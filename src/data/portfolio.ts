// ============================================
// EDIT YOUR PORTFOLIO DATA HERE
// ============================================

export const personalInfo = {
  name: "Anushka Ghei",
  roles: ["AI/ML Engineer", "Software Developer", "Data Scientist", "Researcher"],
  bio: "MSCS student specializing in AI/ML with 12+ months of industry experience across software engineering, LLM development, and data infrastructure. Passionate about bridging cutting-edge AI research with production-grade software to deliver impactful solutions.",
  email: "anushkaghei@gmail.com",
  location: "Buffalo, NY",
  avatar: "https://avatars.githubusercontent.com/u/79694271?v=4",
  resumeUrl: "#",
  social: {
    github: "https://github.com/Anushkaghei",
    linkedin: "https://www.linkedin.com/in/anushkaghei/",
    scholar: "https://scholar.google.com/citations?user=hvKoFwgAAAAJ&hl=en",
    twitter: "",
  },
};

export const stats = [
  { label: "Publications", value: "5" },
  { label: "Citations", value: "4" },
  { label: "GitHub Repos", value: "20+" },
  { label: "Industry Experience", value: "12+ mo" },
];

export const projects = [
  {
    name: "Underwater Image Dehazing",
    description: "Enhancing Underwater Vision: GANs & Transformers for Dehazing and Object Detection. Published at IEEE ASIP 2024.",
    languages: ["Python", "PyTorch", "Jupyter"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei/Underwater-Image-dehazing",
    demo: "",
    stars: 4,
  },
  {
    name: "Distributed File System",
    description: "Architected a distributed file system with master-slave architecture and replication factor of 3, ensuring high availability, fault tolerance, and data integrity.",
    languages: ["Python", "Network Sockets", "Multi-threading"],
    category: "Systems",
    github: "https://github.com/Anushkaghei/Distributed-File-System",
    stars: 1,
  },
  {
    name: "Detecting Hallucinations in LLMs",
    description: "Novel 2-agent LLM system to detect and flag self-contradictions and factual inaccuracies, reducing hallucination rate by 25% using Step-back Prompting and RAG.",
    languages: ["Python", "TensorFlow", "PyTorch"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei",
    stars: 0,
  },
  {
    name: "Agribot",
    description: "Crop prediction using automated soil analysis for smart agriculture.",
    languages: ["HTML", "Python", "ML"],
    category: "Web App",
    github: "https://github.com/Anushkaghei/Agribot",
    stars: 0,
  },
  {
    name: "Student Attendance Management",
    description: "Automated attendance tracking system using face recognition technology.",
    languages: ["Python", "OpenCV", "ML"],
    category: "AI/ML",
    github: "https://github.com/Anushkaghei/Student-Attendance-Management",
    stars: 0,
  },
  {
    name: "Weather Forecast System",
    description: "Real-time weather forecasting system built with MVC architecture in Java.",
    languages: ["Java", "HTML", "MVC"],
    category: "Web App",
    github: "https://github.com/Anushkaghei/Weather-forecast-system",
    stars: 0,
  },
];

export const publications = [
  {
    title: "Automated Notes and Question Generation",
    authors: "S Zanwar, S Srikanth, A Ghei, DR Krishnan, KS Srinivas",
    venue: "IEEE 4th International Conference on Software Engineering, 2024",
    citations: 2,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:u-x6o8ySG0sC",
  },
  {
    title: "Dynamic Crowd Management through Potential Field-Based Simulations",
    authors: "BM Suraj, T Jaiwanth, A Ghei, KS Srinivas",
    venue: "IEEE 8th International Conference on Smart Grid and Smart Cities (ICSGSC), 2024",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:UeHWp8X0CEIC",
  },
  {
    title: "Multi-faceted Question Complexity Estimation Targeting Topic Domain-Specificity",
    authors: "R Sujay, S Perumal, Y Nagraj, A Ghei, KS Srinivas",
    venue: "CS & IT Conference Proceedings 14 (15), 2024",
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:u5HHmVD_uO8C",
  },
  {
    title: "Multimodal Sentiment Analysis for Interviews and Proctoring",
    authors: "N Rayasam, VVS Sridhar, NS Pushkar, O Mathur, A Ghei, DR Krishnan, et al.",
    venue: "IEEE 9th International Conference on Computational Intelligence, 2024",
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:2osOgNQ5qMEC",
  },
  {
    title: "Systematic Analysis of Underwater Image Dehazing and Object Detection",
    authors: "A Ghei, DR Krishnan, G Santhosh, S Natarajan",
    venue: "6th Asia Symposium on Image Processing (ASIP), 2024",
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hvKoFwgAAAAJ&citation_for_view=hvKoFwgAAAAJ:qjMakFHDy7sC",
  },
];

export const skills = {
  "AI/ML": [
    { name: "PyTorch" }, { name: "TensorFlow" }, { name: "scikit-learn" },
    { name: "HuggingFace" }, { name: "LangChain" }, { name: "OpenCV" },
    { name: "NLTK" }, { name: "spaCy" }, { name: "Keras" },
    { name: "RAG" }, { name: "Fine-Tuning" }, { name: "Prompt Engineering" },
  ],
  "Languages": [
    { name: "Python" }, { name: "C++" }, { name: "Java" },
    { name: "JavaScript" }, { name: "TypeScript" }, { name: "SQL" },
    { name: "Bash" }, { name: "R" }, { name: "HTML/CSS" },
  ],
  "Data & Analytics": [
    { name: "Pandas" }, { name: "NumPy" }, { name: "Matplotlib" },
    { name: "Seaborn" }, { name: "Power BI" }, { name: "Tableau" },
    { name: "Apache Spark" }, { name: "ETL Pipelines" }, { name: "Statistical Modeling" },
  ],
  "Cloud & DevOps": [
    { name: "AWS" }, { name: "Docker" }, { name: "Kubernetes" },
    { name: "Git" }, { name: "CI/CD" }, { name: "Linux" },
    { name: "Trivy" }, { name: "RKE2" },
  ],
  "Databases": [
    { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "MySQL" },
    { name: "Redis" }, { name: "Pinecone" }, { name: "ChromaDB" },
  ],
  "Web & Software": [
    { name: "React" }, { name: "Node.js" }, { name: "REST APIs" },
    { name: "FastAPI" }, { name: "Flask" }, { name: "Postman" },
    { name: "Agile/Scrum" },
  ],
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University at Buffalo, SUNY",
    period: "Aug 2024 – Dec 2025",
    description: "Specializing in AI/ML. Coursework: Machine Learning, Computer Vision, Data Intensive Computing, Analysis of Algorithms.",
    gpa: "3.7/4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "PES University, Bangalore",
    period: "Aug 2020 – May 2024",
    description: "Focus on AI, Data Science, and Software Engineering. Active in research and published 5 papers at IEEE conferences.",
    gpa: "8.6/10",
  },
];

export const experience = [
  {
    title: "Data Analyst",
    company: "Weiss Labs, University at Buffalo",
    period: "Jan 2026 - Present",
    description: "Building end-to-end data pipelines to analyze large-scale Fitbit time-series data from a 12-week clinical trial. Applied mixed-effects modeling, clustering and predictive analysis to evaluate sleep outcomes.",
    technologies: ["Python", "Data Pipelines", "Statistical Modeling", "Dashboards"],
  },
  {
    title: "Software Engineering Intern",
    company: "Siemens Healthineers",
    period: "Jan 2025 – Jul 2025",
    description: "Designed a scalable Linux-based SBOM pipeline using RKE2 clusters and Kubernetes. Automated VCS metadata retrieval increasing metadata by 45% and improved accuracy by 40%.",
    technologies: ["Linux", "Kubernetes", "Docker", "Trivy", "Python"],
  },
  {
    title: "Software Development Intern",
    company: "Opkey",
    period: "Aug 2024 – Oct 2024",
    description: "Fine-tuned LLMs (ReAct agents) for automated project planning, improving method invoking accuracy by 40%. Implemented automated API testing framework with CI/CD integration.",
    technologies: ["Python", "LLMs", "Postman", "CI/CD"],
  },
  {
    title: "AI & Data Intern",
    company: "Deloitte",
    period: "Jun 2024 – Aug 2024",
    description: "Automated geospatial data processing pipelines for retailer segmentation. Built product assortment recommendation model improving targeting accuracy by 65%.",
    technologies: ["Python", "ML", "Clustering", "Geospatial"],
  },
  {
    title: "Data & Analytics Intern",
    company: "PwC",
    period: "Jun 2023 – Jul 2023",
    description: "Researched e-commerce technology trends across major Indian platforms. Developed Power BI dashboards analyzing advertising KPIs for multiple campaigns.",
    technologies: ["Power BI", "Data Analytics", "Research"],
  },
];

export const recentUpdates = [
  {
    date: "Mar 2026",
    title: "Building Clinical Data Pipelines at Weiss Labs",
    description: "Designing end-to-end pipelines for analyzing large-scale Fitbit time-series data from a 12-week clinical trial, applying mixed-effects modeling and predictive analysis for sleep outcome evaluation.",
    tags: ["Data Engineering", "Clinical Research", "Python"],
    emoji: "🔬",
  },
  {
    date: "Feb 2026",
    title: "InterviewIQ: Multi-Turn AI Interview System",
    description: "Building a context-aware, retrieval-augmented dialogue system that conducts realistic technical interviews with adaptive question generation and automated candidate response evaluation across 10–20 conversational turns.",
    tags: ["LLMs", "RAG", "NLP", "Interview AI"],
    emoji: "🎯",
  },
  {
    date: "Jan 2026",
    title: "SecureAI Monitor: LLM Audit & Security Platform",
    description: "Designing a unified database architecture for tracking LLM API usage, cost attribution by team, and cross-domain correlation between cybersecurity incidents and active AI model integrations.",
    tags: ["Database Design", "Security", "Enterprise"],
    emoji: "🛡️",
  },
  {
    date: "Dec 2025",
    title: "Finishing MS Coursework at UB",
    description: "Completed advanced coursework in Machine Learning, Computer Vision, and Data Intensive Computing. Preparing for graduation!",
    tags: ["Academics", "ML", "Computer Vision"],
    emoji: "🎓",
  },
];
