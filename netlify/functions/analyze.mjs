export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  try {
    const { question } = await request.json();

    if (!question || !question.trim()) {
      return new Response(
        JSON.stringify({ error: "Please enter a research question." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

   const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not configured.");
    }

    const openaiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          model: "gpt-5-mini",

          instructions: `
You are PaperPilot, an AI research copilot.

Your job is to help researchers understand scientific questions.

Rules:
1. Give a concise scientific synthesis.
2. Separate established evidence from interpretation.
3. Do not invent paper titles, citations, authors, DOIs, or experimental results.
4. If no source documents were supplied, explicitly say that the evidence items are conceptual synthesis rather than verified paper citations.
5. Identify uncertainty and limitations when relevant.
6. Generate exactly three evidence points.
7. Keep the response useful for graduate-level scientific research.
          `,

          input: question,

          text: {
            format: {
              type: "json_schema",
              name: "paperpilot_analysis",
              strict: true,

              schema: {
                type: "object",
                properties: {
                  summary: {
                    type: "string"
                  },

                  evidence: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: {
                          type: "string"
                        },
                        explanation: {
                          type: "string"
                        },
                        source_status: {
                          type: "string"
                        }
                      },

                      required: [
                        "title",
                        "explanation",
                        "source_status"
                      ],

                      additionalProperties: false
                    }
                  },

                  limitations: {
                    type: "string"
                  }
                },

                required: [
                  "summary",
                  "evidence",
                  "limitations"
                ],

                additionalProperties: false
              }
            }
          }
        })
      }
    );

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      console.error("OpenAI API error:", data);

      return new Response(
        JSON.stringify({
          error:
            data?.error?.message ||
            "OpenAI API request failed."
        }),
        {
          status: openaiResponse.status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const outputText = data.output
      ?.flatMap(item => item.content || [])
      ?.find(content => content.type === "output_text")
      ?.text;

    if (!outputText) {
      throw new Error("The AI response contained no text output.");
    }

    const analysis = JSON.parse(outputText);

    return new Response(
      JSON.stringify(analysis),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error("PaperPilot function error:", error);

    return new Response(
      JSON.stringify({
        error: "PaperPilot could not complete the analysis.",
        details: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
