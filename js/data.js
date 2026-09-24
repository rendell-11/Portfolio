/* ============================================================
   YOUR CONTENT — edit this file to update the site.
   Everything on the page (text, projects, résumé) comes from DATA.
   ============================================================ */

const DATA = {
  name: "John Rendell L. Fuerte",
  short: "Rendell",
  role: "Junior Full Stack Developer",
  tagline: "BS Information Technology graduate who builds full-stack web systems from database to UI — and keeps the machines running them in shape.",
  location: "Quezon City, Philippines",
  email: "fuertejohnrendell@gmail.com",
  github: "https://github.com/rendell-11",
  linkedin: "https://www.linkedin.com/in/johnrendell-fuerte",   // TODO: confirm this URL
  resume: "resume.pdf",   // put your PDF next to index.html with this name

  stats: [
    { value: "3", label: "Full-stack & game projects shipped" },
    { value: "19", label: "Workstations built & deployed" },
    { value: "2026", label: "BSIT Graduate, TIP Quezon City" }
  ],

  about: [
    "I'm a recent BS Information Technology graduate from the Technological Institute of the Philippines with hands-on experience in full-stack development, IT support, database management, and hardware deployment.",
    "During my internship at J-K Network Services, I independently designed and built the company's internal Inventory & Asset Management System and configured 19 workstations for employee deployment. I enjoy teaching myself new technologies and taking projects from concept all the way to completion."
  ],

  skills: {
    "Web Development": ["PHP", "MySQL", "JavaScript", "ReactJS", "HTML", "CSS", "XAMPP", "VS Code"],
    "Programming & Game Dev": ["C#", "C++", "Python", "Unity", "Blender"],
    "IT Support": ["Hardware troubleshooting", "Software troubleshooting", "Workstation setup", "Desktop assembly", "RAM/SSD upgrades", "SSD reformatting", "Cable management"]
  },

  /* ---------- TOP PROJECTS ----------
     Each project gets its own page at  #/projects/<slug>
     - slug:     short id used in the link (lowercase, dashes)
     - short:    short name shown on the cover until you add a screenshot
     - summary:  1–2 sentences shown on the card
     - image:    cover screenshot, e.g. "screenshots/inventory/cover.png" (leave "" for a placeholder)
     - gallery:  extra screenshots shown on the project page, each { src, caption }
     - overview: paragraphs for the project page
     - features: bullet points for "What I built"
     - code / demo: links (leave "" to hide)
  */
  projects: [
    {
      slug: "inventory-system",
      short: "Inventory",
      tag: "Internship · Production",
      title: "Inventory & IT Asset Management System",
      summary: "Internal PHP/MySQL system for J-K Network Services that centralizes IT asset and administrative data — built solo, end to end.",
      role: "Solo developer",
      context: "Internship — J-K Network Services",
      year: "",   // TODO: e.g. "2026"
      tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
      image: "",
      gallery: [
        // { src: "screenshots/inventory/dashboard.png", caption: "Dashboard" },
      ],
      overview: [
        "J-K Network Services needed one place to keep track of its IT assets and administrative records. During my internship I independently designed and developed an internal Inventory & Asset Management System to centralize that data.",
        "I owned the whole build: the database architecture, the user interface, the back-end logic, and the data-management functionality."
      ],
      features: [
        "Designed the MySQL database structure for IT asset and administrative records",
        "Built the back-end logic in PHP, running on XAMPP",
        "Created the user interface with HTML and CSS",
        "Implemented data-management functions to support internal IT operations and company record management"
        // TODO: add specific features, e.g. "Search and filter assets by department"
      ],
      note: "This is an internal company system, so source code isn't public.",
      code: "", demo: ""
    },
    {
      slug: "mathplustbs",
      short: "MathPlusTBS",
      tag: "Academic · Game",
      title: "MathPlusTBS — Unity Educational Game",
      summary: "An educational math game built in Unity and C#. I led development and taught myself Unity from scratch to ship it.",
      role: "Lead developer",
      context: "Academic project — TIP",
      year: "",
      tech: ["Unity", "C#", "Blender"],
      image: "",
      gallery: [],
      overview: [
        "MathPlusTBS is an educational game that makes practicing math interactive. I led the project and developed it despite having no prior game-development experience, teaching myself Unity along the way.",
        "The result is a functional application covering gameplay logic, 3D assets, environment design, and interactive features."
      ],
      features: [
        "Programmed the gameplay logic in C#",
        "Modeled 3D assets in Blender",
        "Designed the game environments in Unity",
        "Built the interactive features that tie the math content to gameplay"
      ],
      note: "",
      code: "", demo: ""
    },
    {
      slug: "ecommerce",
      short: "E-Commerce",
      tag: "Academic · Web",
      title: "Web-Based E-Commerce System",
      summary: "A full-stack online store for computers and electronic devices, with product listings, database integration, and a purchasing flow.",
      role: "Full-stack developer",
      context: "Academic project — TIP",
      year: "",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      image: "",
      gallery: [],
      overview: [
        "A full-stack e-commerce website for selling computers and electronic devices.",
        "It covers the essentials of an online store: browsable product listings, front-end interfaces, a database behind the catalog, and the core purchasing flow."
      ],
      features: [
        "Product listings for computers and electronic devices",
        "Front-end interfaces built with HTML, CSS, and JavaScript",
        "MySQL database integration through a PHP back end",
        "Core purchasing functionality"
      ],
      note: "",
      code: "", demo: ""
    }
  ],

  experience: [
    {
      title: "Full Stack Developer / IT Support Intern",
      org: "J-K Network Services",
      date: "",   // TODO: add dates, e.g. "Feb 2026 – May 2026"
      points: [
        "Independently designed and developed an internal Inventory & Asset Management System end to end — database, UI, back-end logic, and data management.",
        "Built full-stack features with PHP, MySQL, HTML, CSS, and XAMPP to support IT operations and company record management.",
        "Diagnosed and resolved employee hardware, software, OS, device, and workstation performance issues.",
        "Assembled, upgraded, configured, and deployed 19 desktop workstations, including RAM/SSD upgrades, reformatting, software installs, and cable management.",
        "Produced technical documentation and digital/print design assets for the company."
      ]
    },
    {
      title: "Freelance Data Management Assistant",
      org: "Alpha Iota — Malaysia (Remote)",
      date: "Sep 2021 – Mar 2022",
      points: [
        "Managed and maintained company data across spreadsheets and digital systems.",
        "Verified records for accuracy, completeness, and consistency.",
        "Supported administrative operations, documentation, and digital record organization."
      ]
    },
    {
      title: "Team Lead, Academic Software Projects",
      org: "Technological Institute of the Philippines",
      date: "",
      points: [
        "Led multiple student development teams from planning through final delivery.",
        "Coordinated task assignments, deadlines, testing, documentation, and presentations.",
        "Unblocked teammates on technical and coding issues to keep projects on schedule."
      ]
    }
  ],

  education: [
    {
      title: "Bachelor of Science in Information Technology",
      org: "Technological Institute of the Philippines — Quezon City",
      date: "Graduated 2026",
      points: []
    }
  ]
};
