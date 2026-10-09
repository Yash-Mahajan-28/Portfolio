export const PERSONAL_INFO = {
  name: "Yash Mahajan",
  title: "Software Developer | Backend & Applied AI Engineer",
  email: "yashmahajan2809@gmail.com",
  phone: "+91 88283 01189",
  location: "Mumbai, Maharashtra, India",
  college: "VESIT (Vivekanand Education Society's Institute of Technology), Mumbai",
  degree: "B.Tech in Computer Engineering",
  gradYear: "2023 – 2027",
  cgpi: "9.76 / 10",
  github: "https://github.com/Yash-Mahajan-28",
  linkedin: "https://www.linkedin.com/in/yash-mahajan-540963321",
  resumePath: "/assets/Yash-Mahajan-Resume.pdf",
  portraitPath: "/assets/portrait.jpg",
  bio: "Architecting high-throughput distributed backends, agentic LLM workflows, and quantum computing simulations. Focused on software that is robust under heavy concurrency, provably secure, and built with purpose."
};

export const METRICS = [
  { value: "9.76", label: "Academic CGPI", sub: "VESIT Computer Engg", accent: "gold" },
  { value: "10+", label: "Hackathon Podiums", sub: "National & Global Honors", accent: "cyan" },
  { value: "3+", label: "Industry Internships", sub: "Jio, Reliance, Atyeti", accent: "emerald" },
  { value: "1", label: "Springer Publication", sub: "LNNS / ICT4SD '26", accent: "violet" },
  { value: "22+", label: "Repositories", sub: "Open Source Code", accent: "blue" }
];

export const FEATURED_PROJECTS = [
  {
    id: "quantum-playground",
    title: "Quantum Playground",
    subtitle: "Interactive Quantum Computing Simulation & Certification",
    category: ["quantum", "systems"],
    award: "🏆 Winner · GOLC International Award 2026",
    image: "/assets/quantum-playground.jpg",
    description: "Full-stack interactive quantum learning platform offering 14+ guided experiments from Bell states to quantum cryptography. Features real-time state tomography, Bloch sphere vector visualization, and cryptographically verified OTP authentication.",
    highlights: [
      "Qiskit Aer vectorized backend executing sub-second circuit simulations",
      "Interactive Bloch sphere and density matrix state visualization",
      "Persistent MongoDB Atlas progress tracking with verifiable certificate generation"
    ],
    tech: ["Python", "Qiskit Aer", "Streamlit", "MongoDB Atlas", "OTP Auth"],
    links: {
      repo: "https://github.com/adi-isclueless/quantummp"
    },
    architecture: {
      headline: "IBM Qiskit Aer Vectorized Simulation Pipeline",
      summary: "Dynamic quantum circuit parser translating interactive UI gate parameters into QASM circuits, dispatched to localized Qiskit Aer simulation workers with sub-250ms latency.",
      sections: [
        {
          heading: "Circuit Vectorization & State Tomography",
          content: "User-composed circuits are compiled into OpenQASM, executed against statevector simulators, and decomposed into complex probability matrices rendered in real-time on client-side Three.js Bloch spheres."
        },
        {
          heading: "Cryptographic Certificate Issue",
          content: "On completing all 14 experiments and passing algorithmic quizzes, users receive a digitally signed certificate verified by a tamper-evident SHA-256 issue hash."
        },
        {
          heading: "State Checkpointing",
          content: "MongoDB Atlas stores per-session shot distributions, noise threshold configurations, and experiment checkpoint states."
        }
      ]
    }
  },
  {
    id: "rfp-copilot",
    title: "RFP Copilot",
    subtitle: "Autonomous Multi-Agent Enterprise Proposal Qualification",
    category: ["ai", "systems", "fullstack"],
    award: "⚡ EY Techathon 6.0 · Enterprise Agentic AI",
    image: "/assets/rfp-copilot.jpg",
    description: "An autonomous agentic copilot engineered for enterprise Request-for-Proposal (RFP) cycles. Employs LangChain and Gemini 2.5 Flash to parse massive technical contracts, quantify compliance requirements, and generate auditable submission bids.",
    highlights: [
      "Asynchronous multi-agent pipeline: Ingestion, clause breakdown & response generation",
      "Multi-dimensional compliance scoring matrix (Technical, Legal, Financial: 0-100%)",
      "Production Next.js interface with real-time streaming LLM feedback"
    ],
    tech: ["TypeScript", "Next.js", "LangChain", "Gemini 2.5 Flash", "MongoDB Atlas"],
    links: {
      demo: "https://eyrfp-copilot.vercel.app",
      repo: "https://github.com/Yash-Mahajan-28/EYRFP-Copilot"
    },
    architecture: {
      headline: "LangChain Asynchronous Multi-Agent Topology",
      summary: "Deconstructs 100+ page enterprise procurement documents across specialized autonomous sub-agents with strict provenance tracing and zero hallucination tolerances.",
      sections: [
        {
          heading: "Document Chunking & AST Ingestion",
          content: "Complex multi-table PDF clauses and contractual SLA parameters are parsed into structured AST graphs to preserve cross-sectional dependencies."
        },
        {
          heading: "Tri-Pillar Compliance Matrix",
          content: "Simultaneously scores technical capability match (96%), financial threshold feasibility (88%), and legal risk exposure (94%) with explainable citation anchors."
        },
        {
          heading: "Streaming Response Synthesis",
          content: "Drafts tailored, clause-by-clause tender responses incorporating enterprise boilerplate while respecting token cost budgets."
        }
      ]
    }
  },
  {
    id: "safelabs",
    title: "SafeLabs — IoT & AI Safety Ecosystem",
    subtitle: "Physical-to-Cloud Laboratory Telemetry & Hazard Mitigation",
    category: ["systems", "fullstack", "ai"],
    award: "🏆 Winner · Hackquinox 2.0 & GDG TechSprint",
    image: "/assets/safelabs-iot.jpg",
    description: "End-to-end intelligent laboratory safety architecture connecting ESP32 environmental sensing nodes with Google Cloud Run and Vertex AI Gemini. Automates emergency power/ventilation cutoffs and provides explainable AI (XAI) risk insights.",
    highlights: [
      "Low-latency ESP32 edge telemetry over MQTT / HTTP mesh network",
      "Cloud Run microservice orchestrating Vertex AI risk classification",
      "Cross-platform Flutter dashboard delivering sub-second technician alerts"
    ],
    tech: ["ESP32", "Google Cloud Run", "Vertex AI Gemini", "Flutter", "IoT-AI"],
    links: {
      repo: "https://github.com/Yash-Mahajan-28"
    },
    architecture: {
      headline: "Edge-to-Cloud Hazard Telemetry Pipeline",
      summary: "Real-time microcontroller sensor networks streaming physical atmospheric metrics to containerized Cloud Run services with automated safety actuation.",
      sections: [
        {
          heading: "ESP32 Hardware Telemetry Mesh",
          content: "Microcontrollers sample VOC gas ppm, ambient temperature, humidity, and acoustic spikes every 250ms, bundling packets with lightweight binary payloads."
        },
        {
          heading: "Vertex AI Anomaly Detection",
          content: "Google Cloud Run processes incoming data streams; when anomalies are detected, Vertex AI evaluates danger thresholds and triggers relays to isolate laboratory hazards."
        },
        {
          heading: "Technician Dispatch App",
          content: "Technicians receive push notifications on Flutter mobile with floorplan heatmaps and actionable containment protocols."
        }
      ]
    }
  },
  {
    id: "remine-ai",
    title: "Re-mine-AI",
    subtitle: "Multimodal Vision & Blockchain for E-Waste Valuation",
    category: ["ai", "systems"],
    award: "🌿 Best Sustainability Award · Syrus 2026",
    image: "/assets/remine-ai.jpg",
    description: "Circular economy software integrating computer vision hardware inspection and blockchain ledgers. Evaluates printed circuit board components, estimates precious metal salvage yield, and cryptographically matches certified recyclers.",
    highlights: [
      "Deep residual vision model detecting PCB damage and micro-components",
      "Real-time commodity market pricing integration for gold, copper & palladium",
      "Immutable recycler ledger verifying ethical electronic waste disposal"
    ],
    tech: ["Multimodal AI", "Computer Vision", "Blockchain", "FastAPI", "PyTorch"],
    links: {
      repo: "https://github.com/Yash-Mahajan-28"
    },
    architecture: {
      headline: "Computer Vision & Commodity Valuation Architecture",
      summary: "Combines residual convolutional models with real-time spot commodity feeds and smart contracts for certified circular hardware recycling.",
      sections: [
        {
          heading: "Micro-Component Segmentation",
          content: "Neural network segments IC packages, tantalum capacitors, and gold plating contacts from high-resolution PCB photographs."
        },
        {
          heading: "Algorithmic Spot Valuation",
          content: "FastAPI computes estimated salvage value based on current London Metal Exchange spot quotes for gold, palladium, and copper."
        },
        {
          heading: "Immutable Custody Ledger",
          content: "Disposal provenance and recycling verification certificates are recorded on-chain to guarantee zero hazardous landfill dumping."
        }
      ]
    }
  }
];

export const SECONDARY_PROJECTS = [
  {
    title: "Citation-First",
    badge: "🏆 Ideathon 2025 Winner",
    category: ["ai", "fullstack"],
    description: "Academic research platform guaranteeing source verifiability and citation grounding to eradicate hallucinations in AI-assisted literature surveys.",
    tech: ["TypeScript", "Next.js", "Academic AI"],
    link: "https://citation-first.vercel.app",
    linkText: "Live App ↗"
  },
  {
    title: "OS-Tutor",
    badge: "⚡ Deployed on Streamlit",
    category: ["systems"],
    description: "Visual simulation playground for operating system algorithms: CPU process scheduling (FCFS, SJF, RR), memory page replacement, and deadlock avoidance.",
    tech: ["Python", "Streamlit", "OS Algorithms"],
    link: "https://os-tutor.streamlit.app/",
    linkText: "Live App ↗"
  },
  {
    title: "Quantum ML Option Pricing",
    badge: "🌐 Top 5 · Q-volution Int'l",
    category: ["quantum"],
    description: "Quantum Reservoir Computing (QRC) system engineered to forecast financial volatility surfaces and price complex derivative options with improved precision.",
    tech: ["Quantum ML", "Python", "Qiskit"],
    link: "https://github.com/Yash-Mahajan-28",
    linkText: "GitHub ↗"
  },
  {
    title: "FinSphere",
    badge: "🔒 Mumbai Hacks",
    category: ["ai", "systems"],
    description: "Zero-leakage, privacy-first RAG architecture operating entirely with local quantized LLMs and embedded vector databases for confidential financial analysis.",
    tech: ["Local LLMs", "Vector DBs", "RAG"],
    link: "https://github.com/Yash-Mahajan-28",
    linkText: "GitHub ↗"
  },
  {
    title: "IDMS 3D-Avatar",
    badge: "🎨 Three.js & Speech",
    category: ["fullstack"],
    description: "Interactive 3D conversational avatar incorporating speech recognition, VapiAI, ConvoAI, Blender rigged models, and Three.js real-time phoneme lip sync.",
    tech: ["Three.js", "VapiAI", "Blender"],
    link: "https://github.com/Yash-Mahajan-28",
    linkText: "GitHub ↗"
  },
  {
    title: "Kheti-Vyapar",
    badge: "🌾 SIH '24 Round",
    category: ["fullstack"],
    description: "Direct-to-consumer agri-commerce application bypassing intermediary cartels to connect farmers directly with consumer cooperatives.",
    tech: ["Flutter", "Firebase", "D2C"],
    link: "https://github.com/Yash-Mahajan-28",
    linkText: "GitHub ↗"
  }
];

export const WORK_EXPERIENCE = [
  {
    period: "JUN 2026 — JUL 2026",
    company: "Jio Platforms Limited",
    location: "Navi Mumbai, India",
    role: "DevOps Engineer Intern",
    tag: "Cloud & Infrastructure",
    points: [
      "Contributed to enterprise DevOps workflows, container orchestration, and cloud infrastructure operations across large-scale distributed deployments.",
      "Streamlined automated build, test, and container rollout pipelines, enhancing release velocity and minimizing system divergence.",
      "Monitored infrastructure telemetry and reliability metrics across multi-tenant environments."
    ],
    tech: ["DevOps Workflows", "Cloud Infrastructure", "Docker", "CI/CD Automation"]
  },
  {
    period: "DEC 2025 — JAN 2026",
    company: "Atyeti Robotics Pvt Ltd",
    location: "Mumbai, India",
    role: "SDE (Frontend-Dev) Intern",
    tag: "Frontend Architecture",
    points: [
      "Engineered high-performance, accessible Next.js user interfaces integrated with Django REST APIs within a production-grade enterprise environment.",
      "Implemented component caching, client-side state hydration, and modular design patterns to reduce cumulative layout shifts and page latency.",
      "Collaborated closely with backend engineers on schema contracts and end-to-end integration tests."
    ],
    tech: ["Next.js", "React", "Django REST", "TypeScript", "Production UI"]
  },
  {
    period: "MAY 2025 — JUL 2025",
    company: "Reliance Industries Limited",
    location: "Mumbai, India",
    role: "SDE (Python-Backend) Intern",
    tag: "Backend & Microservices",
    points: [
      "Successfully migrated core backend microservices from legacy Flask to asynchronous FastAPI, reducing API response times under high concurrency.",
      "Engineered a Spring Boot ERP MasterData caching layer with Redis, reducing repetitive database queries by up to 60%.",
      "Maintained robust code coverage and leveraged Azure DevOps for continuous integration and automated testing."
    ],
    tech: ["FastAPI", "Python", "Spring Boot", "Redis Caching", "Azure DevOps"]
  },
  {
    period: "2024 — 2026",
    company: "VESIT Technical Cell",
    location: "Mumbai, India",
    role: "Software Engineering Intern & Build-a-thon Ranker",
    tag: "Academic Systems & AI",
    points: [
      "Build-a-thon 2025–26 (Rank 2): Developed an AI-enabled Smart Question Paper Digitization System automating layout extraction and taxonomy tagging.",
      "Winter Internship 2024–25 (Rank 3): Built an institution-wide Web Exam Management System using Python and Django managing student scheduling, registrations, and examination results."
    ],
    tech: ["Python", "Django", "AI OCR", "PostgreSQL"]
  }
];

export const RESEARCH_STUDIES = [
  {
    title: "Deep Learning for Environmental Sustainability: Evaluating Residual Architectures for Microplastic Detection, Classification and Segmentation",
    badge: "📄 Springer Nature LNNS · Presented at ICT4SD '26, Goa",
    description: "Authored and presented at the ICT4SD International Conference 2026, Goa. Formally accepted for publication in Springer Nature's Lecture Notes in Networks and Systems (LNNS) — ICT Analysis and Applications, Volume 6.",
    details: "Investigated deep residual convolutional networks and attention mechanisms for microscopic oceanic particle segmentation. Evaluated precision, recall, and boundary delineation metrics under complex turbidity and noise profiles.",
    tech: ["Deep Residual Networks", "Semantic Segmentation", "PyTorch", "Environmental AI"]
  },
  {
    title: "Lunar Surface Image Registration",
    badge: "🛰 SIH Technical Evaluation",
    description: "Engineered feature-matching algorithms on lunar crater orbital imagery, attaining sub-pixel alignment accuracy under extreme lighting conditions.",
    stats: [
      { value: "558", label: "Verified Inliers" },
      { value: "0.432px", label: "RMSE Registration Error" }
    ],
    tech: ["Computer Vision", "Feature Matching", "Orbital Telemetry"]
  },
  {
    title: "Quantum Reservoir Computing (QRC)",
    badge: "⚛ Q-volution International",
    description: "Modeled non-linear quantum dynamics to map option pricing volatility surfaces, benchmarked against classical Black-Scholes equations.",
    tech: ["Quantum ML", "Option Pricing", "Qiskit"]
  }
];

export const TROPHIES = [
  {
    rank: "Winner",
    rankType: "gold",
    icon: "🏆",
    title: "GOLC International Award",
    event: "Quantum Playground Platform",
    year: "2026 · Global Recognition"
  },
  {
    rank: "Winner",
    rankType: "gold",
    icon: "🥇",
    title: "GDG TechSprint Hackathon",
    event: "Google Developer Group VESIT",
    year: "2026 · IoT & Vertex AI"
  },
  {
    rank: "Winner",
    rankType: "gold",
    icon: "🥇",
    title: "Hackquinox 2.0",
    event: "National Level Hackathon",
    year: "2026 · SafeLabs Ecosystem"
  },
  {
    rank: "Best Sustainability",
    rankType: "emerald",
    icon: "🌿",
    title: "Syrus Hackathon",
    event: "VESIT Innovation Cell",
    year: "2026 · Re-mine-AI"
  },
  {
    rank: "Top 5 · Honorable",
    rankType: "blue",
    icon: "🌐",
    title: "Q-volution International",
    event: "Quantum ML Option Pricing",
    year: "2026 · International"
  },
  {
    rank: "Winner",
    rankType: "gold",
    icon: "💡",
    title: "ISTE VESIT Ideathon",
    event: "Citation-First Research Assistant",
    year: "2025 · Academic Innovation"
  },
  {
    rank: "Rank 2",
    rankType: "blue",
    icon: "🥈",
    title: "VESIT Build-a-thon",
    event: "Question Paper Digitization",
    year: "2025–26 · AI Engineering"
  },
  {
    rank: "Certified",
    rankType: "blue",
    icon: "📜",
    title: "IBM DevOps Professional",
    event: "IBM & Coursera Specialization",
    year: "Cloud, CI/CD & Microservices"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Backend & Microservices",
    icon: "⚡",
    description: "High-throughput async services, master-data caching, and distributed system design.",
    skills: ["Python", "FastAPI", "Django", "Java", "Spring Boot", "Redis", "REST APIs", "Microservices"]
  },
  {
    title: "Applied AI & Quantum",
    icon: "🧠",
    description: "Agentic pipelines, prompt orchestration, vector retrieval, and quantum computing circuits.",
    skills: ["LangChain", "Gemini 2.5", "Vertex AI", "Qiskit Aer", "Vector DBs", "Local LLMs", "PyTorch", "Quantum ML"]
  },
  {
    title: "Cloud, DevOps & Data",
    icon: "☁",
    description: "Container orchestration, continuous integration, telemetry, and scalable persistence.",
    skills: ["Google Cloud Run", "Azure DevOps", "Docker", "PostgreSQL", "MongoDB Atlas", "Firebase", "Linux", "Tableau"]
  },
  {
    title: "Frontend & Interfaces",
    icon: "💻",
    description: "Responsive applications, interactive 3D viewports, and mobile ecosystems.",
    skills: ["TypeScript", "Next.js", "React", "Three.js", "Flutter / Dart", "HTML5 / CSS3"]
  },
  {
    title: "Hardware & Edge IoT",
    icon: "🔌",
    description: "Microcontroller firmware, edge telemetry streaming, and physical automation controls.",
    skills: ["ESP32", "Sensors (Gas, Temp)", "MQTT Telemetry", "Edge Processing"]
  },
  {
    title: "Leadership & Delivery",
    icon: "🤝",
    description: "Iterative sprint velocity, technical communication, and cross-functional hackathon teamwork.",
    skills: ["Problem Solving", "Adaptive Teamwork", "Technical Writing", "Time Management", "System Auditing"]
  }
];

export const MUSIC_NOTES = [
  { key: "A", char: "A", name: "C4 (Root)", freq: 261.63, note: "C4" },
  { key: "S", char: "S", name: "E4 (Major 3rd)", freq: 329.63, note: "E4" },
  { key: "D", char: "D", name: "G4 (Perfect 5th)", freq: 392.00, note: "G4" },
  { key: "F", char: "F", name: "B4 (Major 7th)", freq: 493.88, note: "B4" },
  { key: "G", char: "G", name: "D5 (9th)", freq: 587.33, note: "D5" }
];
