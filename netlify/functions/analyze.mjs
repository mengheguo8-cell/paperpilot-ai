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
        JSON.stringify({
          error: "Please enter a research question."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured.");
    }

    const prompt = `
You are PaperPilot, an AI research copilot for scientific researchers.

Analyze the following research question:

"${question}"

Requirements:
1. Give a concise graduate-level scientific synthesis.
2. Generate exactly three evidence points.
3. Clearly separate established scientific knowledge from interpretation.
4. Do NOT invent paper titles, authors, journals, DOIs, citations, or experimental data.
5. Because no source papers have been uploaded yet, make clear that these are conceptual evidence points, not verified literature citations.
6. Mention important uncertainty or limitations.
`;

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],

          generationConfig: {
            responseMimeType: "application/json",

            responseSchema: {
              type: "OBJECT",

              properties: {
                summary: {
                  type: "STRING"
                },

                evidence: {
                  type: "ARRAY",

                  items: {
                    type: "OBJECT",

                    properties: {
                      title: {
                        type: "STRING"
                      },

                      explanation: {
                        type: "STRING"
                      },

                      source_status: {
                        type: "STRING"
                      }
                    },

                    required: [
                      "title",
                      "explanation",
                      "source_status"
                    ]
                  }
                },

                limitations: {
                  type: "STRING"
                }
              },

              required: [
                "summary",
                "evidence",
                "limitations"
              ]
            }
          }
        })
      }
    );

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      console.error("Gemini API error:", data);

      return new Response(
        JSON.stringify({
          error:
            data?.error?.message ||
            "Gemini API request failed."
        }),
        {
          status: geminiResponse.status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const outputText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!outputText) {
      throw new Error(
        "Gemini returned no text output."
      );
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
    console.error(
      "PaperPilot function error:",
      error
    );

    return new Response(
      JSON.stringify({
        error:
          "PaperPilot could not complete the analysis.",
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
