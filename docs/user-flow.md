# PaperPilot — User Flow

**Version:** V0.1  
**Product:** PaperPilot AI Research Copilot

---

## 1. Core User Goal

PaperPilot helps researchers transform scientific papers into structured, traceable research insights.

The core workflow is:

Research Question → Upload Papers → Extract Evidence → Compare Studies → Generate Insights → Research Report

---

## 2. Main User Flow

### Step 1 — Home

The user enters PaperPilot and sees two primary actions:

- Ask a Research Question
- Upload Scientific Papers

Example query:

> What are the major mechanisms associated with CAR-T cell exhaustion?

---

### Step 2 — Research Intent Detection

PaperPilot identifies the user's intent.

Possible intents include:

- Explain a scientific concept
- Analyze a research question
- Compare multiple studies
- Identify mechanisms
- Find conflicting evidence
- Identify research gaps

The system then recommends the appropriate workflow.

---

### Step 3 — Paper Upload

Users upload one or multiple scientific papers in PDF format.

PaperPilot processes the documents and extracts:

- Title
- Authors
- Study objective
- Experimental model
- Intervention
- Methods
- Key findings
- Mechanism
- Limitations

---

### Step 4 — Evidence Cards

The extracted information is converted into structured Evidence Cards.

Example:

## Evidence Card

**Paper:** Example Study

**Study Model:** Mouse tumor model

**Intervention:** CAR-T therapy

**Key Finding:** Increased T-cell exhaustion was associated with reduced antitumor activity.

**Mechanism:** Persistent antigen stimulation increased exhaustion-related signaling.

**Limitation:** Findings were primarily based on a preclinical model.

**Source:** Uploaded Paper

---

### Step 5 — Paper Compare

Users select multiple Evidence Cards.

PaperPilot generates a structured comparison.

| Dimension | Paper A | Paper B | Paper C |
|---|---|---|---|
| Study Model | | | |
| Intervention | | | |
| Key Finding | | | |
| Mechanism | | | |
| Limitation | | | |

---

### Step 6 — AI Insight

Based on the available evidence, PaperPilot identifies:

- Research consensus
- Conflicting findings
- Evidence gaps
- Possible explanations for differences

AI-generated interpretation must be clearly separated from source evidence.

---

### Step 7 — Research Report

Users click:

**Generate Research Report**

PaperPilot generates:

1. Research Question
2. Background
3. Key Evidence
4. Comparison of Studies
5. Research Consensus
6. Conflicting Evidence
7. Research Gaps
8. Conclusion

---

## 3. Product Flow Diagram

Home

↓

Ask Question / Upload Papers

↓

Intent Detection

↓

Document Processing

↓

Evidence Extraction

↓

Evidence Cards

↓

Paper Compare

↓

AI Insight

↓

Research Report

↓

Save / Export

---

## 4. Key UX Principle

PaperPilot should not behave like a generic chatbot.

Every important conclusion should allow the user to answer:

> Where did this information come from?

Therefore, the interface should always distinguish between:

**Source Evidence**

and

**AI Interpretation**

---

## 5. MVP User Journey

For V0.1, the minimum complete user journey is:

Enter Research Question

↓

View Structured AI Answer

↓

View Evidence Cards

↓

Compare Papers

↓

Generate Research Report

This workflow will be implemented first before advanced features such as personal libraries and external literature search.
