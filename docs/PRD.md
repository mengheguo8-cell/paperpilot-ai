# PaperPilot — AI Research Copilot
## Product Requirements Document (PRD)

**Version:** V0.1  
**Product Type:** AI Research Copilot / LLM Application  
**Role:** AI Product Manager  
**Status:** MVP Planning

---

## 1. Product Overview

PaperPilot is an AI-powered research copilot designed to help researchers and students understand, compare, and synthesize scientific literature more efficiently.

Instead of simply generating answers, PaperPilot focuses on evidence-based research workflows:

Question → Evidence → Comparison → Insight → Report

The product aims to reduce the time researchers spend reading and organizing papers while improving the traceability of AI-generated conclusions.

---

## 2. Problem Statement

Scientific researchers often face several problems when reviewing literature:

1. Large amounts of literature require significant reading time.
2. Important information is scattered across multiple papers.
3. Comparing experimental designs and conclusions manually is inefficient.
4. General-purpose LLMs may generate answers without reliable evidence.
5. Researchers need structured outputs rather than long conversational responses.

PaperPilot addresses these problems by combining LLM reasoning, structured information extraction, evidence tracking, and multi-paper comparison.

---

## 3. Target Users

### Primary Users

- Graduate students
- Biomedical researchers
- Research assistants
- R&D professionals

### Typical Scenario

A researcher wants to understand:

> What are the major mechanisms associated with CAR-T cell exhaustion?

Instead of manually reading multiple papers, the user can use PaperPilot to extract evidence, compare studies, and generate a structured research summary.

---

## 4. Core User Journey

User enters a research question or uploads papers.

↓

PaperPilot identifies the research intent.

↓

The system extracts relevant evidence.

↓

Evidence is converted into structured Evidence Cards.

↓

Users compare findings across multiple papers.

↓

The LLM synthesizes evidence-based insights.

↓

Users generate a structured Research Report.

---

## 5. MVP Features

### Feature 1 — AI Ask

Users enter a scientific research question.

The system generates a structured answer containing:

- Key conclusion
- Supporting evidence
- Mechanism or explanation
- Evidence limitations
- Suggested follow-up questions

---

### Feature 2 — Evidence Card

PaperPilot extracts structured information from scientific papers.

Each Evidence Card contains:

- Paper title
- Research question
- Study model
- Intervention
- Methods
- Key findings
- Mechanism
- Limitations
- Evidence source

This converts long scientific papers into reusable research knowledge units.

---

### Feature 3 — Paper Compare

Users can compare multiple papers.

The system generates a structured comparison table:

| Dimension | Paper A | Paper B | Paper C |
|---|---|---|---|
| Study Model | | | |
| Intervention | | | |
| Methods | | | |
| Key Finding | | | |
| Mechanism | | | |
| Limitation | | | |

The system then identifies:

- Consensus
- Conflicting findings
- Evidence gaps

---

### Feature 4 — Research Report

Users can generate a structured research report based on collected evidence.

Report structure:

1. Research Question
2. Background
3. Key Evidence
4. Comparison of Studies
5. Current Consensus
6. Conflicting Evidence
7. Research Gaps
8. Conclusion

---

## 6. AI Capability Design

PaperPilot uses an evidence-first AI workflow.

User Query / Paper

↓

Intent Detection

↓

Document Processing

↓

Evidence Retrieval

↓

Evidence Extraction

↓

LLM Reasoning

↓

Structured Output

↓

Citation / Evidence Verification

The system should prioritize retrieved evidence over unsupported model knowledge.

---

## 7. Product Differentiation

PaperPilot is not designed as another generic AI chatbot.

The product focuses on three principles:

### Evidence-first

Important conclusions should be connected to identifiable evidence.

### Structured Research

Scientific information is converted into structured Evidence Cards instead of being buried in chat history.

### Comparison-first

PaperPilot helps users identify consensus, contradictions, and research gaps across multiple studies.

---

## 8. Success Metrics

### Product Metrics

- Task completion rate
- Report generation rate
- Evidence Card usage
- Paper comparison usage
- User retention

### AI Quality Metrics

- Answer accuracy
- Evidence faithfulness
- Citation correctness
- Information completeness
- Hallucination rate
- Structured output success rate

---

## 9. MVP Scope

### V0.1

- AI Ask interface
- Research question input
- Structured AI response
- Evidence Card prototype
- Paper comparison prototype
- Demo research report

### V0.2

- PDF upload
- Document parsing
- Multi-paper comparison
- Evidence extraction
- Basic RAG pipeline

### V1.0

- Personal Research Library
- Persistent Evidence Cards
- Semantic search
- Research workspace
- Exportable research reports

---

## 10. Risks and Limitations

Potential risks include:

- LLM hallucination
- Incorrect evidence extraction
- Citation mismatch
- Poor PDF parsing
- Over-reliance on AI-generated conclusions

PaperPilot should clearly separate:

Evidence from source

and

AI-generated interpretation

to improve transparency and reliability.

---

## 11. Product Vision

PaperPilot aims to evolve from a literature assistant into an AI-native research workspace where researchers can:

Discover → Understand → Compare → Organize → Synthesize

scientific knowledge in one workflow.
