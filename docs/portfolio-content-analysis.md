# Portfolio content analysis - Phase 2

Prepared: 4 October 2026. Status: content assessment only; creative direction and implementation have not begun.

**Historical Phase 2 snapshot:** Yash subsequently authorized implementation and supplied corrections/answers. See `docs/creative-direction.md` for the current facts and direction, and `site/` for the portfolio. In particular, SafeLabs resolves the unnamed IoT entry, Quantum Playground now documents 17 labs, the research title/status is known, and graduation is 2027. The original analysis below is preserved as the earlier evidence assessment; do not treat its unresolved facts as current.

## Source and evidence rules

- Factual source: `Yash M Resume.pdf`, one page, read completely through text extraction and visual inspection. The visual review resolved the two-column achievements area and punctuation lost during extraction.
- Task source: the attached Phase 2 brief. The current conversation supplies the design constraints; no separate design-constitution file was found in the repository.
- At inspection, the repository contained the resume only, with no tracked files or commits. No project repositories, demos, papers, certificates, or screenshots were supplied or inspected.
- **Resume-stated** means a claim appears in the resume. It does not mean independently verified. **Editorial assessment** means a recommendation based on those claims. **UNKNOWN / NEEDS SOURCE MATERIAL** means the resume does not establish it.
- Project objectives are not measured outcomes. Words such as "privacy-first," "production grade," "improve," and "reduce" require supporting material before stronger claims can be made.
- Preserve the resume as supplied. This document is internal planning material and contains personal information that should not automatically become public copy.
- Do not implement React, CSS, layouts, Three.js scenes, or boilerplate in this phase. Do not choose a final visual composition. The user's request to reject the obvious solution, propose three alternatives, and select one applies before UI implementation in a later phase.

## 1. Resume factual inventory

### 1.1 Identity, education, and links

| Field | Resume-stated fact | Boundary / missing information |
| --- | --- | --- |
| Name | Yash Mahajan | No alternate professional name stated. |
| Professional descriptor | Software Developer; Backend & AI Enthusiast | Self-description, not a seniority or specialization credential. |
| Location | Mumbai, Maharashtra, India | No availability, relocation, or work authorization information. |
| Email | yashmahajan2809@gmail.com | Contact address in the source; public use needs an explicit preference. |
| Phone | +91 88283 01189 | Preserve internally; omit from public defaults. |
| Date of birth | 28 September 2005 | Preserve internally; omit from public defaults. |
| Portrait | Headshot embedded in resume | No standalone asset or permission preference supplied. |
| GitHub | https://github.com/Yash-Mahajan-28 | Profile link only; no project-specific repository links. Not inspected. |
| LinkedIn | http://www.linkedin.com/in/yash-mahajan-540963321 | PDF hyperlink target transcribed; visible text omits the protocol. Not inspected. |
| Degree | B. Tech in Computer Engineering, VESIT, Mumbai | 2023-Ongoing; expected graduation date and current semester unknown. |
| Degree result | Aggregate CGPI 9.76 | Scale and semester through which calculated unknown. Do not silently change to GPA or CGPA. |
| High school | NHSS, Thane | 2021-23; institution expansion and qualification/board unknown. |
| High-school result | 94% | Source gives percentage; do not invent examination or board. |

### 1.2 Experience records

All five entries are listed under internships. Industry internships and institute programs should remain distinguishable. Exact personal contribution, team size, external evidence, and permission to disclose employer material are unknown throughout.

#### E1 - Jio Platforms Limited

- **Role / dates:** DevOps Engineer Intern, June-July 2026.
- **Problem:** Specific operational problem UNKNOWN / NEEDS SOURCE MATERIAL.
- **Work stated:** Contributing to DevOps workflows and cloud/infrastructure operations.
- **Named technologies:** None in this entry. Do not assign Azure, Kubernetes, Docker, Terraform, or any CI/CD tool from assumptions.
- **Concepts:** DevOps workflows; cloud and infrastructure operations.
- **Outcome / award:** No concrete deliverable, metric, or award stated.
- **Available evidence:** One resume sentence and role/date line.
- **Missing:** Owned task, system context, tooling, scope, decisions, results, and shareable artifact. Dates are past relative to this review; the present-tense verb does not establish current employment.

#### E2 - Atyeti Robotics Private Limited

- **Role / dates:** SDE (Frontend-Dev) Intern, December 2025-January 2026.
- **Problem:** Specific product/user problem unknown.
- **Work stated:** Developed a responsive user interface using Next.js and integrated it with Django in a production-grade environment, as described by the resume.
- **Named technologies:** Next.js; Django. No robotics hardware work is stated despite the organization name.
- **Concepts:** Responsive UI; frontend/backend integration.
- **Outcome / award:** UI and integration developed; no measured outcome or award stated. Actual deployment status and audience unknown.
- **Available evidence:** Resume description only.
- **Missing:** Product identity, exact screens and endpoints, personal scope, integration difficulties, accessibility/testing work, deployment evidence, and approved screenshots.

#### E3 - VESIT Winter Internship / Build-a-thon 2025-26

- **Role / dates:** Institute winter internship entry, December 2025-January 2026; no formal role title supplied.
- **Project:** AI-enabled Smart Question Paper Digitization System.
- **Problem:** Question-paper digitization. Exact source formats, users, and workflow unknown.
- **Work stated:** Developed the named system.
- **Named technologies:** AI is mentioned; no model, OCR tool, framework, or language stated.
- **Concepts:** AI-assisted digitization. Extraction, recognition, layout parsing, and human review would be investigation topics, not established implementation facts.
- **Outcome / award:** System developed. A separate achievement states Rank 2, Build-a-thon 2026 (VESIT); the matching program names suggest a possible association, but linkage must be confirmed.
- **Available evidence:** Resume project sentence and separate rank line.
- **Missing:** Pipeline, source/output examples, evaluation, contribution, deployment, and award linkage.

#### E4 - Reliance Industries Limited

- **Role / dates:** SDE (Python-Backend) Intern, May-July 2025.
- **Problem:** Specific reasons for migration and caching unknown.
- **Work stated:** Migrated a Flask backend to FastAPI; engineered a Spring Boot ERP MasterData caching system.
- **Named technologies:** Flask; FastAPI; Spring Boot. Python appears in the role title. Cache store, database, cloud, and language for the Spring Boot system are not stated in this entry.
- **Concepts:** Backend framework migration; ERP master-data caching. Cache invalidation strategy, concurrency model, compatibility requirements, and architecture unknown.
- **Outcome / award:** Migration and caching system reported as implemented; no performance measurements or award stated.
- **Available evidence:** One resume sentence containing two distinct pieces of work.
- **Missing:** Relationship between the systems, exact contribution, migration scope, design decisions, correctness checks, cache semantics, before/after evidence, and disclosure clearance.

#### E5 - VESIT Winter Internship 2024 / Exam Management System

- **Role / dates:** Institute winter internship entry, December 2024-January 2025; no formal role title supplied.
- **Problem:** Exam scheduling, registration, and results management.
- **Work stated:** Developed a web-based Exam Management System.
- **Named technologies:** Python; Django.
- **Concepts:** Web application; exam administration workflows. Permission model, schema, and scheduling algorithm unknown.
- **Outcome / award:** System developed. A separate achievement states Rank 3, Winter Internship 2024-2025; association is plausible but unconfirmed.
- **Available evidence:** Resume entry and separate rank line.
- **Missing:** Users, workflow boundaries, role permissions, deployment, contribution, repository/screens, and rank linkage.

### 1.3 Project and hackathon records

For every record below, the only supplied evidence is the resume. No source repository, live deployment, demo, dataset, award certificate, or measured result was supplied. "Built" and "engineered" are source wording, not proof of sole authorship.

#### P1 - Re-mine-AI

- **Event / date:** Syrus Hackathon, VESIT, 2026.
- **Problem:** E-waste valuation and recycler matching.
- **Solution:** Multimodal AI and blockchain platform for those functions.
- **Named technologies / concepts:** Multimodal AI; blockchain. Models, modalities, chain, languages, backend, and matching method unknown.
- **Outcome:** Platform described; real-world adoption, recycling volume, valuation accuracy, and deployment unknown.
- **Award:** Project line says "Winner-Best Sustainability Award"; achievements also says "Winner - Syrus Hackathon 2026 (VESIT)." Publish the more specific award wording until exact category is confirmed; do not assume overall first place.
- **Missing:** Input/output examples, valuation method, recycler data and matching logic, blockchain purpose, personal contribution, award proof, and environmental-impact evidence.

#### P2 - Quantum ML option-pricing system

- **Event / date:** Q-volution International Hackathon, 2026. No separate project name stated.
- **Problem:** Option pricing, volatility prediction, and pricing accuracy.
- **Solution:** Quantum ML-based option-pricing system using quantum reservoir computing.
- **Named technologies / concepts:** Quantum ML; quantum reservoir computing; option pricing; volatility prediction. Libraries, hardware/simulator, dataset, and pricing baseline unknown.
- **Outcome:** System built with the aim of improving predictions/pricing. No quantified improvement, benchmark, statistical result, or quantum advantage established.
- **Award:** Top 5 - Honorable Mention. The achievements list repeats Top 5; preserve both parts from the project entry.
- **Missing:** Method, code, dataset provenance, train/test procedure, baseline, plots, error measures, contribution, and result confirmation.

#### P3 - Unnamed ESP32 / sensor / cloud / Flutter IoT entry

- **Event / date:** 2026; organization and event unknown.
- **Problem:** Domain and intended users unknown.
- **Solution:** End-to-end IoT architecture integrating ESP32 and sensors, cloud analytics, and AI-generated insights on a Flutter-based frontend.
- **Named technologies / concepts:** ESP32; sensors; Flutter; IoT; cloud analytics; AI-generated insights. Sensor types, cloud service, model, protocol, and actuator hardware unknown.
- **Outcome / award:** Architecture designed; build/deployment status and award unknown.
- **Source ambiguity:** This bullet appears between Q-volution and TechSprint without a heading. It may describe a separate project or belong to another entry. Keep separate provisionally; do not merge with TechSprint or quantum pricing.
- **Missing:** Project identity, correct association, objective, hardware photos, data path, implemented scope, contribution, and any outcome.

#### P4 - TechSprint IoT-AI energy-control ecosystem

- **Event / date:** TechSprint GDG-VESIT, 2026. No separate project name stated.
- **Problem:** Energy controls and risk insights; specific environment and risk type unknown.
- **Solution:** Cloud Run-hosted ecosystem using Vertex AI and Gemini to automate energy controls and deliver XAI risk insights.
- **Named technologies / concepts:** Cloud Run; Vertex AI; Gemini; IoT-AI; automated control; XAI risk insights. Explanation technique and control policy unknown.
- **Outcome:** Ecosystem engineered; no energy savings, risk accuracy, safety validation, or deployed-user claim supported.
- **Award:** Winner; repeated in achievements as GDG TechSprint Hackathon 2026.
- **Missing:** Sensor/actuator inventory, control boundaries, AI inputs/outputs, evidence for explainability, topology, measured behavior, demo, personal scope, and award proof.

#### P5 - Quantum Playground

- **Event / date:** GOLC International Award, 2026.
- **Problem:** Guided, interactive quantum simulation; target learners and educational need not specified.
- **Solution:** Full-stack interactive simulation platform offering 14 guided experiments, secured by OTP-based authentication.
- **Named technologies / concepts:** Qiskit Aer; Streamlit; quantum simulation; guided experiments; OTP authentication. No quantum hardware use stated.
- **Outcome:** Platform with 14 guided experiments described. User counts, learning outcomes, hosting, authentication design, and current availability unknown.
- **Award:** Winner - GOLC International Award 2026. Category, awarding body details, team attribution, and award criteria unknown.
- **Missing:** Experiment list, working examples, code/demo, teaching sequence, validated outputs, authentication approach, contribution, and award record.

#### P6 - RFP Copilot

- **Event / date:** EY Techathon 6.0, 2026.
- **Problem:** Automated RFP qualification.
- **Solution:** Agentic AI copilot.
- **Named technologies / concepts:** LangChain; TypeScript; agentic AI; qualification workflow. Models, agents, tools, backend, and evaluation unknown.
- **Outcome / award:** Copilot engineered; no placement, award, time saving, qualification accuracy, or production status stated.
- **Missing:** Public-safe RFP example, qualification criteria, workflow/decision trace, human review, evidence handling, model/tool choices, personal scope, and demo.

#### P7 - FinSphere

- **Event / date:** Mumbai Hacks, 2025.
- **Problem:** Financial decisioning. Specific audience and decisions unknown.
- **Solution:** Described as a privacy-first RAG system using local LLMs and vector databases.
- **Named technologies / concepts:** RAG; local LLMs; vector databases. Specific model, database, embedding model, deployment, and financial data source unknown.
- **Outcome / award:** System architected; no award, retrieval metric, privacy audit, financial return, or advice quality result stated.
- **Missing:** Data flow, actual local/remote boundaries, document sources, retrieval/citation examples, evaluation, contribution, code, and demonstration. Local inference alone does not verify the whole system's privacy claim.

#### P8 - IDMS 3D-Avatar

- **Event / date:** Hack-AI-Thon, VESIT, 2025.
- **Problem:** Intended use and meaning of IDMS unknown.
- **Solution:** System including speech processing, 3D rendering, and a lip-sync engine.
- **Named technologies / concepts:** three.js; VapiAI; ConvoAI; Blender; speech processing; lip sync; 3D rendering. Roles of each tool and voice/data handling unknown.
- **Outcome / award:** Capabilities listed; completion, latency, quality, deployment, and award unknown.
- **Missing:** Use case, demo video, avatar/model source and rights, speech-to-animation flow, contribution, audio permissions, and performance evidence.

#### P9 - Kheti-Vyapar

- **Event / date:** SIH'24; selected for the intra-college hackathon round, 2024.
- **Problem:** Farmer-to-customer distribution and intermediary-related cost inflation.
- **Solution:** D2C app connecting farmers with customers, aiming to eliminate intermediaries.
- **Named technologies / concepts:** D2C application; farmer/customer marketplace. No stack specified.
- **Outcome:** App described; reduced prices, adoption, transaction volume, and implemented scope unknown. Cost reduction is intended benefit, not measured result.
- **Award / result:** Intra-college round selection. Do not imply national SIH finalist or winner.
- **Missing:** Actual workflow, prototype/screens, repository, team role, customer/farmer research, fulfillment/payment boundaries, and selection evidence.

### 1.4 Research and publication facts

- Resume states a research paper was presented at **ICT4SD International Conference 2026, Goa**.
- Title, topic, authors, author order, contribution, abstract, method, results, presentation format/date, proceedings entry, DOI, publication status, and paper link: **UNKNOWN / NEEDS SOURCE MATERIAL**.
- No explicit publication record is supplied. Do not label it a published or peer-reviewed paper, connect it to a project, or claim a research specialty from the conference line alone.

### 1.5 Awards, achievements, and certification inventory

| Record | Resume wording / scope | Association and unresolved details |
| --- | --- | --- |
| A1 | Winner - GOLC International Award 2026 | Explicitly associated with Quantum Playground in project section; category and proof missing. |
| A2 | Winner - Syrus Hackathon 2026 (VESIT) | Re-mine-AI project line specifies Best Sustainability Award; exact overall/category result needs confirmation. |
| A3 | Top 5 - Q-volution International Hackathon 2026 | Project line adds Honorable Mention; associated with quantum option pricing. |
| A4 | Winner - GDG TechSprint Hackathon 2026 | Associated with TechSprint ecosystem; exact winning category unknown. |
| A5 | Rank 2 - Build-a-thon 2026 (VESIT) | Possible E3 connection; not explicit. |
| A6 | Rank 3 - Winter Internship 2024-2025 | Possible E5 connection; not explicit. |
| A7 | Winner - Hackquinox 2.0 2026 - National Level | Project, organizer, category, contribution, and proof unknown. No corresponding project description. |
| A8 | Winner - Ideathon-2025 | Event context, idea/project, award category, contribution, and proof unknown. |
| C1 | IBM-Coursera certification course on DevOps | Exact credential title, date, completion/issuance status, and credential link unknown. Do not substitute an assumed professional certificate. |

### 1.6 Skills and interests

**Explicit technical skill list:** PostgreSQL, MongoDB, Firebase, Tableau, FastAPI, Django, Flutter, React/NextJS, DevOps, MS Azure, JAVA, Python. Normalize typography to Java, Next.js, and Microsoft Azure if needed, without adding products or proficiency claims.

**Additional technologies/concepts explicitly named in experience/projects:** Flask, Spring Boot, ESP32, sensors, Cloud Run, Vertex AI, Gemini, Qiskit Aer, Streamlit, LangChain, TypeScript, three.js, VapiAI, ConvoAI, Blender, multimodal AI, blockchain, quantum ML, quantum reservoir computing, RAG, local LLMs, vector databases, XAI, OTP authentication, speech processing, lip sync.

**Soft-skill self-descriptions:** Communication Skill; Adaptive collaborator; Problem-solving; Creativity/Innovation; Time Management. No specific behavioral examples supplied.

**Extracurricular facts:** Second position in an intra-college music competition; winner of two consecutive institute-level music exams (resume wording); bronze medal in an inter-school band competition. Instrument, musical role, exam qualification, organizations, dates, and media unknown. Do not reinterpret the institute exams as an external music credential.

## 2. Candidate professional positioning

**Strongest current editorial candidate:** "Computer engineering student working across backend systems and applied AI, with industry internships and interactive quantum projects."

This is supported by the degree, Reliance backend work, Atyeti frontend integration, Jio DevOps entry, AI project descriptions, and Quantum Playground. It remains broad enough to avoid presenting unverified specialization as established expertise.

Other truthful candidates, conditional on audience and artifacts:

1. **Backend/software emphasis:** Computer engineering student with backend migration and caching experience, supported by applied AI projects. Strongest if Reliance provides shareable technical detail.
2. **Applied AI emphasis:** Software developer exploring AI across retrieval, document qualification, e-waste, and IoT. Strong breadth; depth must come from evaluations and implementation evidence.
3. **Interactive quantum emphasis:** Developer of guided quantum simulations and a quantum ML hackathon system. Distinctive, but too narrow as the default until the demos and intended role are clear.

Do not adopt "quantum researcher," "AI expert," "DevOps specialist," "award-winning innovator," or a sustainability-wide personal mission as the primary identity. The resume does not establish those broader claims.

### Audience reading

| Audience | Strongest supplied evidence | What limits credibility / what to add |
| --- | --- | --- |
| Software engineering recruiters | Reliance migration/caching; Atyeti integration; Django exam system | Owned scope, correctness/testing, production context, and implementation artifacts. |
| AI/ML recruiters | FinSphere, RFP Copilot, Re-mine-AI, TechSprint, quantum ML | Model choices, datasets, evaluations, baselines, failure analysis, and personal contribution; framework names alone are insufficient. |
| Research reviewers | ICT4SD presentation; quantum reservoir project | Full paper metadata, method/results, author contribution, reproducibility, publication status. |
| Startup founders | Work aimed at concrete workflows: RFPs, e-waste, exams, energy | User need, product stage, deployment, iteration, adoption, and ownership evidence. Hackathon participation does not establish product traction. |
| Engineers | Migration/cache decisions; local RAG; IoT data/control paths; simulation experiments | Code, diagrams, tradeoffs, failure cases, and demonstration of behavior. |
| Internship/graduate recruiters | Degree CGPI 9.76; multiple internships; ranked/winning events | Expected graduation, availability, clear team attribution, exact award scope, and role target. |

Prioritize software/backend readers provisionally, with applied AI and quantum as distinctive supporting work. Ask Yash to confirm the actual role target before shaping public copy.

## 3. Strongest narratives

### Five candidate stories

1. **Backend change under existing system constraints - Reliance.** Migration and caching offer concrete engineering questions about behavior preservation and data freshness. These are subjects to investigate, not verified challenges solved. Strongest potential evidence of engineering depth.
2. **Quantum systems made interactive - Quantum Playground.** Fourteen guided experiments, named simulation/UI tools, authentication, and an associated award give a specific, demonstrable story. Show an actual experiment and explain an implementation decision rather than centering the award.
3. **Retrieval with a local-inference boundary - FinSphere.** Local LLMs and vector databases make the stated privacy objective inspectable through a data-flow explanation. Strong applied AI candidate if retrieval quality and data boundaries can be demonstrated.
4. **Sensors connected to decisions and controls - TechSprint.** Cloud Run, Vertex AI/Gemini, energy controls, and XAI insights create a hardware/cloud/application story. Strongest breadth candidate if the unnamed ESP32 entry is correctly mapped and the control loop is demonstrated.
5. **AI aimed at e-waste valuation and matching - Re-mine-AI.** A concrete domain and sustainability award make it memorable. Its technical depth depends on the valuation/matching method and whether blockchain serves an actual requirement.

These are provisional candidates, not five equally prominent case studies. Quantum Playground, Reliance, and one well-evidenced applied AI system are the strongest initial shortlist. Quantum pricing could replace an AI candidate if rigorous comparisons are supplied.

### Required comparative judgments

| Question | Provisional choice | Reason / qualification |
| --- | --- | --- |
| Strongest technical project | Quantum Playground | Most concrete product description: 14 guided experiments, Qiskit Aer, Streamlit, OTP, award. This assesses case-study readiness from wording, not proven code quality. |
| Strongest visually demonstrable project | Quantum Playground | Actual inputs and simulator outputs could show behavior directly. IDMS is the strongest explicitly 3D alternative if a working demo exists. |
| Strongest research story | ICT4SD presentation | Only explicit research record; topic and quality cannot be assessed yet. Do not substitute quantum pricing as the paper. |
| Strongest engineering story | Reliance migration and caching | Concrete backend work, with potential for decisions, constraints, and correctness evidence. |
| Strongest AI story | FinSphere, provisionally | RAG/local models offer a coherent technical flow; privacy and retrieval quality remain unverified. Quantum pricing has greater methodological ambition but less supplied detail. |
| Strongest non-AI story | Reliance backend work | No AI dependence stated. Exam Management is the strongest described non-AI standalone application. |
| Strongest breadth | Industry frontend/backend/DevOps sequence plus TechSprint | Multiple work layers explicitly represented; exact tool exposure and depth are unknown. |
| Strongest depth | Reliance, as case-study potential | Migration/cache work can support depth if implementation material exists. No project presently has enough evidence to prove deepest expertise. |
| Strongest achievement | GOLC award tied to Quantum Playground | Distinctive named award plus identifiable product. Prestige, category, and individual/team attribution need proof. CGPI 9.76 is separate academic evidence. |
| Low-prominence candidates | High-school score, generic soft skills, skills with no project link, unnamed awards, certification | Useful context or archive; weaker explanatory value than work behavior and decisions. |

### Connections supported by the resume

- Backend migration/caching, Django exam administration, and Next.js/Django integration establish repeated application-system work.
- FinSphere, RFP Copilot, digitization, and Re-mine-AI use AI in information-oriented workflows. Their implementation methods differ or are unspecified; do not imply a shared architecture.
- Quantum Playground and quantum option pricing share quantum-computing content; one is guided simulation and the other predictive/pricing work. No reuse or research relationship stated.
- The unnamed ESP32 entry and TechSprint both involve IoT/cloud/AI; whether they are the same system is unknown.
- Re-mine-AI and energy controls support a limited connection to environmental use cases. They do not establish sustainability as Yash's lifelong motivation.
- Music and band achievements establish participation in music activities. They do not prove a preferred interface aesthetic or personality trait.

**Possible recurring theme, explicitly editorial:** building software that connects technical processing to an understandable workflow or usable interface. Several entries support that reading, but the resume does not state a personal philosophy. Ask about motivation before elevating it into a brand.

## 4. Project priority matrix

Scores express **case-study potential from the resume**, not verified technical quality. H = high potential, M = medium, L = low, U = cannot assess. Credibility: R = resume description only; R+ = comparatively specific description and/or associated resume-stated recognition, still no corroboration. Priority: P = primary candidate; S = secondary; T = tertiary; A = archive; Hold = association/details required. These are content tiers, not layouts.

### Depth, story, uniqueness, and current evidence

| Record | Technical depth potential | Visual potential | Story potential | Interaction potential | Uniqueness | Current credibility | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| E4a Reliance Flask-to-FastAPI | H | M | H | M | M | R | P |
| E4b Reliance ERP cache | H | M | H | H | M | R | P, with E4a or separate if warranted |
| P5 Quantum Playground | H | H | H | H | H | R+ | P |
| P7 FinSphere | H | M | H | H | M | R | P candidate |
| P4 TechSprint | H | H | H | H | M | R+ | P candidate |
| P1 Re-mine-AI | H | H | H | H | M | R+ | P candidate |
| P2 Quantum pricing | H | M | H | H | H | R+ | S; promote if evaluation is strong |
| E3 Digitization | U | H | H | H | M | R | S |
| P8 IDMS 3D-Avatar | H | H | M | H | M | R | S |
| E2 Atyeti UI integration | M | H | M | M | L | R | S |
| E5 Exam Management | M | M | M | M | L | R | T |
| P6 RFP Copilot | H | M | H | H | M | R | S |
| P9 Kheti-Vyapar | U | M | M | M | L | R | A; promote if user evidence is substantial |
| P3 Unnamed IoT entry | H | H | U | H | U | R | Hold |
| E1 Jio DevOps | U | U | U | U | U | R | S experience; case study on hold |

### Communication medium assessment

| Record | Would 3D communicate something meaningful? | Animation suitability | Diagrams / data visualization |
| --- | --- | --- | --- |
| E4a Migration | **NO.** API behavior and migration structure do not need spatial rendering. | M: optional step-by-step request comparison. | H: verified before/after architecture and compatibility examples. |
| E4b Cache | **NO.** Data flow, expiry, and invalidation are clearer in 2D. | H: optional state changes that explain freshness. | H: cache flow and measured results if supplied. |
| P5 Quantum Playground | **CONDITIONAL YES.** A verified experiment involving a Bloch-sphere representation could justify 3D; no such experiment is yet established. | H: actual experiment state/output transitions. | H: circuit, probability, and output figures if present in the project. |
| P7 FinSphere | **NO.** Retrieval provenance and local/remote boundaries are information flows. | M: trace stages of a real query. | H: data flow and retrieved evidence. |
| P4 TechSprint | **CONDITIONAL YES.** A sourced physical sensor/actuator topology could explain control locations. Without that spatial need, use 2D. | H: timestamped sensing-to-control changes. | H: deployment/control diagrams and genuine telemetry. |
| P1 Re-mine-AI | **NO on current evidence.** Object rotation would not establish valuation or matching. Reconsider only if actual spatial inspection is part of the system. | M: input-to-valuation/match stages. | H: modality flow, valuation rationale, matching evidence. |
| P2 Quantum pricing | **NO on current evidence.** Quantum terminology does not make a 3D scene explanatory. | M: compare parameter/input changes where valid. | H: method diagram, baseline comparison, evaluation plots. |
| E3 Digitization | **NO.** Document structure and transformation are planar. | H: aligned source/output comparison and correction state. | H: verified pipeline and evaluation. |
| P8 IDMS | **YES.** Avatar pose and lip synchronization are explicitly part of the product. Showcase the actual system or a labeled recording. | H: motion demonstrates synchronization and state. | H: speech-to-render pipeline; performance measurements if available. |
| E2 Atyeti | **NO.** Responsive UI and integration are best shown as real screens and flows. | M: demonstrate meaningful UI state transitions. | M: approved screen flow/API boundary. |
| E5 Exams | **NO.** Scheduling and registration workflows do not require 3D. | L/M: only changes in workflow status. | H: role/workflow relationships if verified. |
| P6 RFP Copilot | **NO.** Criteria, evidence, and qualification decisions are textual relationships. | M: show a decision trace. | H: agent/tool flow and evidence-linked criteria. |
| P9 Kheti-Vyapar | **NO.** Buyer/seller workflow is not inherently spatial. | L/M: actual transaction states if implemented. | M: verified service/workflow map. |
| P3 Unnamed IoT | **CONDITIONAL YES.** Only if physical arrangement affects understanding; identity and hardware must first be established. | H: measured hardware-to-screen behavior. | H: architecture and telemetry, subject to source material. |
| E1 Jio | **NO on current evidence.** No spatial task is described. | U: concrete task unknown. | U: task and disclosure scope unknown. |

Do not promote every high-potential row. Artifact quality, personal contribution, and audience relevance should determine the eventual shortlist.

## 5. Experience hierarchy

### Primary: what a visitor should remember

- Quantum Playground: a specific interactive platform, 14 experiments, and associated recognition.
- Reliance: two concrete backend changes. Keep both visible in planning; determine whether one or two narratives are justified by actual system relationships.
- One applied AI system selected from FinSphere, TechSprint, or Re-mine-AI after evidence review. This prevents breadth from obscuring depth.

### Secondary: evidence that supports that memory

- Atyeti: frontend/backend integration in an industry setting.
- Jio: DevOps exposure, with prominence limited until the actual work is explained.
- Q-volution quantum pricing: distinctive methodology and Top 5/Honorable Mention; needs comparative results.
- RFP Copilot and digitization: useful workflow-oriented AI alternatives.
- IDMS: proof that 3D/speech work belongs to the profile, provided a demo and contribution are established.
- Degree and CGPI 9.76: concise academic context, particularly for graduate audiences.
- GOLC, Syrus, Q-volution, TechSprint recognition: attach to the relevant work, without duplicate award-card clutter.
- ICT4SD presentation: concise separate factual entry until the paper is identified; promote only after reading it.

### Tertiary: depth on request

- Exam Management: earlier application work; may move up if a meaningful workflow/design decision is documented.
- All named technical skills: link to evidence where possible; keep list-only technologies available without implying depth.
- Detailed internship chronology, case-study appendix, source links, award documents, and certification once supplied.
- Music activities: optional factual personal context, not a required entertainment feature.
- GitHub and LinkedIn: directly accessible supporting references. Location and chosen contact route should also be accessible without narrative navigation.

### Archival: preserve without dominating

- Kheti-Vyapar: early work and exact intra-college selection scope.
- Ideathon-2025 and Hackquinox 2.0: sparse award entries until associated work is sourced.
- Rank 2 Build-a-thon and Rank 3 Winter Internship: retain exact achievements; attach to E3/E5 only after confirmation.
- IBM-Coursera DevOps course: supporting credential after status/title verification.
- High-school institution, dates, and 94%: education detail, usually absent from the primary narrative.
- Generic soft-skill labels: preserve in this inventory; publish only when behavior supplies evidence.

**Unresolved:** P3 remains on hold and must not become an extra case study through accidental duplication. Phone, birth date, and embedded headshot are public-privacy decisions, not content tiers.

This hierarchy ranks evidence rather than prescribing an About/Skills/Projects sequence. No site order or navigation has been finalized.

## 6. Research/publication positioning

The narrow truthful claim is: **"Presented a research paper at ICT4SD International Conference 2026, Goa."** Keep this as resume-stated until a program, paper, or presentation record is reviewed.

Request the title, author list/order, contribution, abstract, full paper, relevant figures, presentation record, and publication metadata. Assess the actual question, method, results, limitations, and reproducibility before deciding prominence.

If the paper concerns a listed project, connect them only after confirmation. If unrelated, let it stand independently. Conference presentation, proceedings publication, journal publication, and peer review are different claims; none should be silently substituted for another.

## 7. Awards/achievement strategy

- Put recognition beside the work it evaluates. The project should explain what was built; the award supports it.
- Use exact scope: GOLC winner; Q-volution Top 5 - Honorable Mention; Syrus Best Sustainability Award pending clarification; TechSprint winner; SIH intra-college round selection.
- Confirm team versus individual recognition and personal contribution. Team awards are valid evidence when attributed honestly.
- Deduplicate award repetitions across the project and achievement portions of the resume. Do not calculate an inflated total or treat rankings, selections, and wins as identical.
- Keep Hackquinox and Ideathon concise until there is a project, category, and proof. Do not assign either to an existing project by guesswork.
- Treat CGPI and music placements as separate academic/extracurricular facts, not hackathon achievements.
- Certificate scans and organizer links can support exact award statements; redact identifiers and unrelated personal data before public use.

## 8. Skills/technology strategy

Use skills as explanations of decisions inside real work, then offer a compact factual index for readers seeking a specific technology.

| Evidence grouping | Explicit links in resume | Skills listed without a project-specific link |
| --- | --- | --- |
| Backend and applications | Reliance: Flask/FastAPI/Spring Boot; exams: Python/Django; Atyeti: Next.js/Django | PostgreSQL, MongoDB, Firebase, Java; React is listed, while project explicitly names Next.js. |
| AI workflows | FinSphere: RAG/local LLMs/vector DBs; RFP: LangChain/TypeScript; TechSprint: Vertex AI/Gemini | Do not infer PyTorch, TensorFlow, OpenAI APIs, model training, or fine-tuning. |
| Cloud / operations | Jio: DevOps/cloud/infrastructure at conceptual level; TechSprint: Cloud Run | MS Azure is listed but not tied to an experience. Do not assume Jio uses it. |
| Quantum | Quantum Playground: Qiskit Aer/Streamlit; pricing: quantum reservoir computing | Do not assume Qiskit was used for pricing or that a quantum computer was used. |
| Device / interface / media | P3: ESP32/sensors/Flutter; IDMS: three.js/VapiAI/ConvoAI/Blender | Flutter also listed; no sensor model or protocol supplied. |
| Data visualization | No specific Tableau project described | Tableau. |

Do not add skill percentages, proficiency bars, technology icon grids, years of experience, or invented mastery labels. Distinguish named implementation use from a list-only mention. Soft skills belong in examples of collaboration or decisions only when those examples are supplied.

## 9. Case-study opportunities

All demonstrations below are **proposals contingent on source material**, not statements that these capabilities or assets exist. Never make a portfolio reconstruction look like the original product or real project data without labeling it. Prefer the actual artifact; disclose simplification, synthetic examples, and recordings.

| Work | Central case-study question | Potential evidence-led demonstration | Evidence needed before authoring |
| --- | --- | --- | --- |
| Reliance migration | What changed, and how was correct behavior preserved? | A redacted before/after request and response plus the actual migration boundaries. | Motivation, scope, representative endpoints, compatibility decisions, tests, personal work, disclosure permission. |
| Reliance cache | How was ERP master data served, and when could it become stale? | A sourced cache read/update trace showing the actual policy. | Data classification, cache store, read/write/invalidation policy, constraints, verification, measurements if any. |
| Quantum Playground | How does one guided experiment help someone understand a quantum concept? | One authentic experiment: instructions, inputs, simulation output, and what the output means. | List of 14 experiments, demo/repository, correct explanations, figures, contribution, award record. |
| FinSphere | What evidence reaches an answer, and what stays local? | One documented query with retrieved passages, answer provenance, and processing boundaries. | Data sources/rights, model and vector DB, retrieval flow, remote calls, evaluations, limitations, personal work. |
| TechSprint | How does a sensed condition become an energy-control action and risk explanation? | Real recorded telemetry aligned with the resulting action and explanation. | Hardware/topology, cloud deployment, prompt/model flow, control constraints, explanation method, measured demo, award. |
| Re-mine-AI | How are e-waste value and recycler suitability determined? | An actual input with valuation rationale and the resulting matching criteria. | Modalities, sample data rights, valuation/matching method, chain purpose, validation, contribution, award category. |
| Quantum pricing | What did quantum reservoir computing contribute against a baseline? | A reproducible results plot with method, data split, baseline, and limitations beside it. | Dataset, algorithm/configuration, experiment code, metrics, baselines, leakage checks, actual results, award. |
| Digitization | What changes between the original question paper and the digitized output? | An aligned source/output comparison showing a real correction or failure. | Sanitized papers, output schema, actual pipeline, model/OCR details if used, evaluation, role, award association. |
| IDMS | How do speech and animation stay synchronized? | User-triggered actual demo or recording with speech/lip-sync stages explained. | Use case, video, model/rig rights, speech flow, tool responsibilities, latency/quality evidence, personal contribution. |
| RFP Copilot | What makes an RFP qualify, and how is each decision supported? | An approved sample with criteria, sourced evidence, and a real decision trace. | Sanitized RFP, criteria, agent/tool structure, human review, evaluation/failures, contribution, demo. |
| Atyeti | What UI/integration problem did the internship solve? | Approved desktop/mobile screens with one verified backend-dependent interaction. | Product context, owned screens/endpoints, design constraints, testing/deployment detail, disclosure permission. |
| Exam Management | How do scheduling, registration, and results connect? | An actual workflow with verified roles and one meaningful rule or edge case. | Screens, code, schema/role rules if present, implemented scope, users, contribution, rank linkage. |
| Kheti-Vyapar | What changes in the farmer-to-customer workflow? | The actual prototype showing one seller/buyer flow, with product stage disclosed. | Stack, screens, implemented flow, research if any, team role, selection proof; no assumed savings. |
| Unnamed IoT | What system is this, and what passes from sensor to frontend? | Defer until identity is resolved; then show an authentic signal/data path. | Name, event/association, purpose, implemented hardware, sensors, cloud/model, Flutter screens, role. |
| Jio | What concrete infrastructure or workflow task did Yash own? | Defer until a task and shareable artifact are identified. | Tooling, actual deliverable, constraints, contribution, verification, redacted diagram, disclosure permission. |

A good case study should answer: context, problem, personal scope, constraints, implementation, one important decision, evidence of behavior, result, limitations, and source links. Leave missing fields marked unknown during drafting; do not replace them with plausible prose.

## 10. 3D opportunities

### Strongest existing justification

**IDMS 3D-Avatar:** 3D rendering and lip sync are explicit product capabilities. A visitor could inspect actual synchronization or pose behavior. This is a project-level opportunity, not yet a justification for making an avatar the whole site's navigation system.

### Conditional opportunities

- **Quantum Playground:** a spatial state representation may help only if one of the actual experiments uses and supports it. Confirm the mathematics and experiment before proposing a Bloch sphere. Many quantum outputs will be clearer as circuits or plots.
- **IoT:** physical placement could help explain sensor/actuator relationships if the real system has meaningful spatial topology. ESP32, cloud, and AI alone do not require a 3D environment.

### Whole-site 3D decision remains open

The eventual brief requires 3D to participate in navigation/storytelling, not serve as a background. Current source material does not establish a shared spatial structure across all projects. Do not invent a lab, workshop, city, galaxy, or room full of symbolic props simply to satisfy that requirement.

Before adopting a site-wide environment, establish what real relationships the space explains, what each navigable location means, and why moving through it helps someone understand the work. If no convincing relationship emerges, explicitly resolve that gap in creative direction rather than introducing decoration. A project-specific 3D demo does not automatically meet the site-wide navigation requirement.

For any later 3D implementation:

- Keep ordinary links, readable case studies, and keyboard navigation available through progressive enhancement.
- Provide an intentional 2D route with the same factual content and navigation access for reduced motion, failed WebGL, low performance, and mobile use.
- Load heavy models/scenes when needed; measure the actual assets before choosing budgets or fidelity. No performance claims have yet been tested.
- Use movement to explain navigation, position, or state. Do not add idle motion, particles, orbiting objects, or compulsory camera rides without information value.
- Mobile and tablet need deliberate compositions and usable touch interaction; do not shrink a desktop scene to fit.

## 11. Interaction opportunities

Small interactions can make evidence inspectable without creating spectacle:

- **Migration:** select a real endpoint/example to compare behavior, if shareable.
- **Cache:** step through actual freshness/invalidation states, once the policy is sourced.
- **Quantum Playground:** manipulate an actual experiment input and read its valid output; label prerecorded outputs if simulation is not running live.
- **FinSphere:** reveal retrieved evidence and processing location for a real, sanitized query.
- **Digitization:** compare aligned source/output and reveal the correction history if available.
- **RFP Copilot:** reveal the document evidence underlying a qualification criterion.
- **IoT:** scrub real recorded telemetry to connect a sensor reading, inference, and control action.
- **IDMS:** explicitly start/stop an authorized demo; preserve a video or still explanation when real-time rendering is unavailable.
- **Recognition/source notes:** reveal precise award scope or technical source without interrupting the reading path.

These actions communicate state or evidence. Avoid arbitrary dragging, scroll locking, decorative toggles, fake live data, and interactions that obscure the underlying content. Public financial examples should demonstrate the project using sourced or clearly synthetic material rather than present live advice.

### Personality grounded in the source

Music competition, institute music exams, and band participation are the only explicit nontechnical interests. Ask about the instrument, role, current practice, and desired prominence. A concise factual personal note may be enough.

If Yash wants music represented and has appropriate recordings, optional user-triggered listening or phrasing/pacing informed by his own practice could be explored later. No autoplay, sound-dependent navigation, instrument-themed world, or inferred "rhythmic coder" identity. The resume provides no basis for a font, sound palette, or physical aesthetic yet.

## 12. Missing source materials

Everything below is **not supplied** unless the inventory explicitly identifies it as resume-stated. Availability is unknown. Request a curated set first, rather than demanding every asset before any progress.

### 12.1 Minimum packet for each selected case study

- [ ] Project-specific repository link or allowed code excerpt; current README and build/run instructions.
- [ ] Project stage: concept, prototype, working hackathon build, deployment, or maintained product.
- [ ] Problem, audience, dates, event, and actual implemented scope.
- [ ] Exact personal contribution versus team work; collaborators credited as appropriate.
- [ ] One inspectable example: screenshot set, demo video, live demo, hardware photo, or valid output.
- [ ] One substantive decision, rejected alternative, constraint, or failure case.
- [ ] Architecture/process description based on the actual implementation.
- [ ] Genuine results with measurement method, or an explicit statement that no evaluation/metrics exist.
- [ ] Award/category/placement proof where relevant.
- [ ] Permission and redaction needs for code, documents, screenshots, datasets, faces, audio, and employer material.

### 12.2 Work-specific checklist

| Work | Highest-value missing material |
| --- | --- |
| Quantum Playground | Experiment list; one or two complete experiment demos; Qiskit Aer/Streamlit source; explanations/output figures; OTP approach; GOLC certificate/category and contribution. |
| Reliance | Sanitized migration and caching descriptions; motivation; endpoint behavior; actual cache policy; verification/results; personal scope; employer-approved diagram/excerpts. If code cannot be shared, an approved technical summary is useful. |
| FinSphere | Local/remote data-flow diagram; model/vector DB names; example query and retrieval/citations; evaluation; demo; source; role. |
| TechSprint | Demo video; real hardware photos/topology; Cloud Run deployment diagram; control logic; AI/XAI outputs; telemetry/results; winning submission and attribution. |
| Re-mine-AI | Screens/demo; input modalities; valuation/matching method and examples; blockchain requirement; submission; exact sustainability award/category; role. |
| Quantum pricing | Submission deck; code; data source; reservoir method; classical baseline; actual metrics/plots; reproducibility details; Top 5/Honorable Mention proof. |
| Digitization | Sanitized source paper and digitized output; pipeline; model/tool names; error example; evaluation; role; Rank 2 association. |
| IDMS | Short speech/lip-sync video; avatar assets and license/permission; use case; tool responsibilities; pipeline; performance/failure notes; source; role. |
| RFP Copilot | Sanitized sample RFP; qualification rubric; actual agent/tool flow; trace; evaluation; demo/source; role. |
| Atyeti | Approved screenshots across viewport sizes; product context; integration description; owned scope and verification. |
| Exam Management | Screens/source; scheduling/registration/result flow; actual role/schema constraints; deployment status; role; Rank 3 association. |
| Kheti-Vyapar | Screens/prototype/source; stack; implemented buyer/seller flow; team role; selection proof; any genuine user research. |
| Unnamed IoT | Identity and association first; then hardware photos, architecture, sensor/model/cloud details, Flutter screens, and demo. |
| Jio | Owned task and deliverable; tools actually used; approved diagram/summary; verification/results; updated tense/status. |
| ICT4SD paper | Title, authors/order, contribution, abstract/full paper, figures, presentation record, publication status, proceedings/DOI if one exists. |
| Hackquinox / Ideathon | Associated project/idea, dates/organizer, exact category/result, team attribution, certificate/submission. |
| DevOps course | Exact course/credential name, completion/issuance status, date, credential link or redacted certificate. |
| Music | Instrument/role, dates, event/exam identities, current relevance; optional permitted photo/audio and publication preference. |

### 12.3 Ten most important missing pieces

1. Exact personal ownership and team attribution for the shortlisted work.
2. Quantum Playground's working demo, experiment list, and repository.
3. Shareable Reliance migration/caching detail and verification.
4. Working evidence for one lead AI system: FinSphere, TechSprint, or Re-mine-AI.
5. Evaluation evidence: baselines, measurements, methods, failures, and limitations, especially for quantum pricing and AI claims.
6. ICT4SD paper identity, contribution, full text, and actual publication status.
7. Exact award categories and proof, including Syrus wording and team attribution.
8. Identity of the ESP32/Flutter entry and its relationship to TechSprint/Q-volution.
9. Target role/audience, expected graduation, and availability.
10. Public-use permissions, employer disclosure boundaries, and contact/portrait preferences.

Screenshots without context do not establish ownership, and a repository link without a usable demonstration does not automatically explain the story. Both should serve a specific case-study question.

## 13. Questions requiring answers from Yash

### Essential before creative direction

1. **Audience:** Which role and opportunity should this portfolio primarily support: backend/software engineering, applied AI/ML, research, or another target? Who should understand it in their first minute?
2. **Ownership:** For Quantum Playground, Reliance work, and your preferred AI project, what did you personally design/build? What was team work, and who should receive credit?
3. **Evidence:** Which two or three projects have your strongest working demos, repositories, and meaningful technical decisions today? Are there any you no longer want to represent?
4. **IoT association:** Does the ESP32/sensors/cloud/Flutter bullet describe TechSprint, Q-volution, or a separate project? What is its name and actual use case?
5. **Research:** What is the ICT4SD paper title, author list, contribution, topic, and publication status? Can the paper and presentation be shared?
6. **Claims:** What evaluations or concrete outcomes actually exist? For quantum pricing, what baseline and results support the stated improvement goal? It is fine if no metrics were collected.
7. **Recognition:** Is Syrus an overall win or specifically Best Sustainability? What are the GOLC category and team attribution? Do Build-a-thon Rank 2 and Winter Internship Rank 3 belong to the digitization and exam systems? What projects won Hackquinox and Ideathon?
8. **Disclosure:** Which employer/project code, architecture, screenshots, data, and recordings may be public? Which require redaction or permission? Can a sanitized narrative be shared when original artifacts cannot?
9. **Profile:** What is your expected graduation date, current opportunity availability, and preferred public contact method? Do you want the headshot and city public?
10. **Personal meaning:** Which work are you most proud of, and why? What genuinely connects your interests, if anything? Should music appear, and what instrument/role and current practice should be described?

### Follow-up factual cleanup

- What concrete deliverable, toolchain, and result should replace Jio's broad sentence?
- What user/product problem did the Atyeti interface solve, and what production context can be described?
- What are the exact model, database, cloud, and tool names for each project? Keep unused list-only skills distinct.
- What does IDMS mean, and what is the avatar's purpose?
- Which project dates can be made more precise? Are overlapping internships/programs correctly dated?
- Through which semester is CGPI 9.76 calculated, and what scale is used?
- What exact IBM-Coursera course/credential was completed, and when?

Unknown is an acceptable answer. The point is to define truthful boundaries, not to pressure Yash into supplying impressive-sounding facts.

## 14. Privacy recommendations

These are recommendations for a future public website. No source information has been removed, and nothing has been published.

| Classification | Information | Recommendation |
| --- | --- | --- |
| Safe / useful to publish | Professional name, chosen positioning, degree/institution, internship organization/role/dates, factual project descriptions, exact achievements, selected skills, supplied GitHub/LinkedIn profile links | Useful professional information; confirm accuracy and disclosure restrictions. Do not attach unverified outcomes. |
| Optional | Mumbai/city, CGPI 9.76, high-school information/94%, headshot, music details, full research author credit | Choose by audience and personal preference. Use authorized media and proper coauthor/team attribution. |
| Optional | Resume email, downloadable resume, certificate images | Select a public contact route. A download should be a separate sanitized public version, not an automatic link to the current PDF. Redact irrelevant IDs and personal details. |
| Probably keep private | Phone number, exact date of birth | Not needed to evaluate engineering work. Do not derive or publish age from the birth date. |
| Probably keep private unless explicitly cleared | Internal employer source/code, ERP records, deployment identifiers, credentials, personal/student data, confidential RFPs or financial documents | Ask for approved sanitized examples. Some may contain other people's information or confidential material; availability and restrictions are currently unknown. |
| Review before publishing | Dataset samples, participant faces/voices, hardware photos, music recordings, avatar assets, screenshots, certificates | Check permissions, licenses, private details, and identifying metadata. Do not assume team/event material is owned solely by Yash. |

Do not implement a resume download pointing to the supplied PDF without reviewing its phone number, birth date, and contact choices. Keep the supplied resume intact internally.

## 15. Things the portfolio should deliberately avoid

### Content and evidence

- Equal prominence for every line of the resume; a wall of awards; skills mistaken for demonstrated depth.
- Invented metrics, user counts, team sizes, contributions, responsibilities, architecture, links, model names, or results.
- Claiming Quantum Playground used quantum hardware, quantum pricing achieved an advantage, FinSphere is audited/private end to end, or TechSprint delivered measured savings without evidence.
- Turning a conference presentation into a publication or linking it to a project without confirmation.
- Turning SIH intra-college selection into national success, a sustainability-category award into overall first place, or team work into sole authorship.
- Merging or duplicating the unnamed IoT entry; treating overlapping institute/industry programs as identical employment.
- A manufactured personal brand, research specialty, environmental mission, or music-derived personality.
- Generic marketing exaggerations and filler descriptions. Show a real decision or artifact instead.
- Quietly publishing the source resume's phone number/date of birth or confidential project material.

### Design constitution to carry into later phases

The user's prohibitions remain active:

- No generic centered hero or "Hi, I'm [name]" opening.
- No gradient mesh/aurora background, purple/blue AI gradients, glassmorphism, or glowing cursor blobs.
- No excessive rounded cards, floating feature cards, universal pills, or bento grid without an actual information-architecture need.
- No generic navbar-plus-CTA pattern, fake terminal, endless marquee, or technology icon grids/skill progress bars.
- No random Three.js particles, unrelated decorative 3D, or arbitrarily angled floating mockups.
- No gratuitous scroll animations, excessive Framer Motion springs, or every section taking 100vh.
- No automatic About/Skills/Projects/Contact sequence, oversized type solely to signal modernity, or copying Linear/Vercel/Apple/Stripe.

Use composition, negative space, typography, asymmetry, pacing, physicality, and purposeful interaction before decoration. Every unusual element must explain a person, project, process, or relationship. Motion should clarify state, hierarchy, navigation, or space. Responsive versions should be related but deliberately composed for desktop, tablet, and mobile. WebGL requires progressive enhancement, reduced-motion handling, and a sensible low-performance route.

No actual composition has been selected here. Keeping these constraints does not replace the next phase's design reasoning.

## 16. Recommended next phase

### Ten most important things learned from the resume

1. Yash is a VESIT computer engineering student, enrolled since 2023, with aggregate CGPI 9.76.
2. His stated direction is software development with backend and AI interests; the resume supports a student/early-career position.
3. Reliance supplies the most concrete backend work: Flask-to-FastAPI migration and Spring Boot ERP master-data caching.
4. Atyeti and Jio add explicit frontend/integration and DevOps/cloud exposure, though Jio's actual deliverable is missing.
5. Quantum Playground is unusually specific: 14 guided experiments, Qiskit Aer, Streamlit, OTP, and a GOLC award association.
6. Quantum reservoir option pricing is a separate 2026 project with Top 5/Honorable Mention at Q-volution; improved accuracy is an aim, not a supplied measured result.
7. Applied AI spans several concrete workflows: RAG financial decisioning, RFP qualification, question-paper digitization, e-waste valuation/matching, and energy controls.
8. 3D is already present in IDMS through speech processing, rendering, and lip sync, giving it a direct demonstrative purpose.
9. A conference paper presentation and several event results broaden the profile, but paper identity and some award/project associations remain unresolved.
10. Music exams, a college competition placement, and a band medal provide actual personal context beyond technology, without establishing a visual theme.

### Files/materials to provide next, in order

1. **Short answers to the essential questions in section 13**, especially audience, ownership, IoT identity, research, and disclosure.
2. **Quantum Playground packet:** project repository/README, list of experiments, short demo or screenshots with actual outputs, personal scope, and GOLC award details.
3. **Reliance packet:** approved migration/cache narrative or diagram, personal scope, decisions, and verification. Employer code is not required if it cannot be shared.
4. **One lead AI packet:** FinSphere, TechSprint, or Re-mine-AI source/demo plus data flow, one input/output example, evaluation if available, and team role. Select by the best evidence, not award count.
5. **Research/recognition packet:** ICT4SD paper and author/publication information; exact award records; links between Build-a-thon/Winter Internship ranks and projects.
6. **Optional demonstration/personality packet:** IDMS video and asset rights; music details/media if desired; a standalone authorized portrait if public use is wanted.

### Creative-direction phase entry and deliverables

First resolve the critical source ambiguities and review a small set of strong project artifacts. Complete evidence for every archived entry is not required to start direction, but no unsupported claim should be promoted into primary content.

Then:

1. Confirm the primary audience and a factual content shortlist.
2. Identify the obvious AI-generated answer explicitly: a centered introduction, interchangeable project cards, logo grid, awards strip, and unrelated WebGL backdrop.
3. Reject that answer because it flattens differences in evidence and gives 3D no explanatory or navigational role.
4. Propose **three less predictable compositions** grounded in the selected artifacts and real relationships. For each, explain the reading/navigation model, how 3D helps, deliberate desktop/tablet/mobile differences, motion purpose, and performance fallback. Do not assume a literal room or workshop is warranted.
5. Select the strongest composition and explain the evidence-based tradeoff before writing UI code. Produce a concrete creative-direction document; this phase's brief stops short of making that selection.
6. Plan the required source assets and later implementation/verification around that direction. Reconsider any effect that can be removed without losing comprehension.

**Phase 2 stop:** deliver this analysis, the ten learned facts, ten missing pieces, essential questions, and next-material request; wait for Yash. No website, visual template, final composition, or marketing copy has been created.
