/* ============================================================
   YOUR CONTENT — edit this file to update the site.
   Everything on the page (text, projects, résumé) comes from DATA.
   ============================================================ */

const DATA = {
  name: "John Rendell L. Fuerte", 
  short: "Rendell",
  role: "Junior Full Stack Developer",
  tagline: "BS Information Technology graduate with experience in full-stack web development, database management, UI/UX design, and IT support — creating practical digital solutions from backend logic to user interface.",
  location: "Quezon City, Philippines",
  email: "fuertejohnrendell@gmail.com",
  github: "https://github.com/rendell-11",
  linkedin: "www.linkedin.com/in/john-rendell-fuerte-5396b723b",   // TODO: confirm this URL
  resume: "resume.pdf",   // put your PDF next to index.html with this name
  photo: "images/profile.jpg",   // your portrait in the hero (a larger photo will look sharper)

  // Hero extras
  status: "Open to Junior Full Stack roles",   // shown in the green "available" badge
  typed: [                                      // phrases the hero types out after "I build…"
    "full-stack web systems.",
    "inventory & asset tools.",
    "Unity games with C#.",
    "things that work end to end."
  ],

  stats: [
    { value: "3", label: "Full-stack & game projects shipped" },
    { value: "19", label: "Workstations built & deployed" },
    { value: "2026", label: "BSIT Graduate, TIP Quezon City" }
  ],

  about: [
    "I'm a recent BS Information Technology graduate from the Technological Institute of the Philippines with hands-on experience in full-stack development, IT support, database management, and hardware deployment.",
    "During my internship at J-K Network Services, I independently designed and built the company's internal Inventory & Asset Management System and configured 19 workstations for employee deployment. I enjoy teaching myself new technologies and taking projects from concept all the way to completion."
  ],

  // "I also build the machines" section (from your internship)
  hardware: {
    count: "19",
    label: "desktop workstations built & deployed",
    where: "J-K Network Services internship",
    intro: "Not all of my work lives in a code editor. During my internship I also handled the hardware side: getting new workstations from parts to employees' desks, and fixing them when something broke.",
    steps: [
      { title: "Assemble", text: "Built desktop workstations for employee use." },
      { title: "Upgrade", text: "Installed RAM and SSD upgrades." },
      { title: "Configure", text: "Reformatted SSDs and installed the software each machine needed." },
      { title: "Deploy & support", text: "Handled cable management, then diagnosed hardware, software, and OS issues after hand-off." }
    ]
  },

  skills: {
    "Web Development": ["PHP", "MySQL", "JavaScript", "ReactJS", "HTML", "CSS", "XAMPP", "VS Code"],
    "Programming & Game Dev": ["C#", "C++", "Python", "Unity", "Blender"],
    "IT Support": ["Hardware troubleshooting", "Software troubleshooting", "Workstation setup", "Desktop assembly", "RAM/SSD upgrades", "SSD reformatting", "Cable management"]
  },

  /* ---------- TOP PROJECTS ----------
     Each project gets its own page at  #/projects/<slug>
     - slug:     short id used in the link (lowercase, dashes)
     - short:    short name for the project
     - color / color2: the project's accent colors (cards, glow, project page)
     - mock:     illustration shown until you add a screenshot: "dashboard", "store", or "game"
     - summary:  1–2 sentences shown on the card
     - wordmark: which built-in text logo to draw (sharp at any size); falls back to logo, then image
     - logo / logoBg: project logo shown on the card and at the top of the project page, and the color behind it
     - image:    cover screenshot (used when there's no logo), e.g. "screenshots/inventory/cover.png" (leave "" for a placeholder)
     - gallery:  extra screenshots shown on the project page, each { src, caption }
     - overview: paragraphs for the project page
     - features: bullet points for "What I built"
     - code / demo: links (leave "" to hide)
  */
  projects: [
    {
      slug: "inventory-system",
      color: "#0f766e", color2: "#14b8a6", mock: "dashboard",
      short: "Inventory",
      tag: "Internship · Production",
      title: "Inventory & IT Asset Management System",
      summary: "Internal PHP/MySQL system for J-K Network Services that centralizes IT asset and administrative data — built solo, end to end.",
      role: "Solo developer",
      context: "Internship — J-K Network Services",
      year: "",   // TODO: e.g. "2026"
      tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
      wordmark: "itadmin",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/inventory/logo.png", logoBg: "#03122b",   // shown on the card and project header
      image: "screenshots/inventory/peripherals.png",
      gallery: [
        { src: "screenshots/inventory/peripherals.png", caption: "Computer Peripherals: deployed-device totals and storage stock per department" },
        { src: "screenshots/inventory/seat-plan.png", caption: "Seat Plan Arrangement: workstation layout by department with occupied/vacant counts" },
        { src: "screenshots/inventory/trend-micro.png", caption: "Trend Micro Tracker: antivirus license status and expiry, filterable by department" },
        { src: "screenshots/inventory/admin-users.png", caption: "Admin Users: accounts grouped by department" },
        { src: "screenshots/inventory/user-accounts.png", caption: "User accounts with Super Admin / Sub Admin roles" }
      ],
      overview: [
        "J-K Network Services needed one place to keep track of its IT assets and administrative records. During my internship I independently designed and developed an internal Inventory & Asset Management System to centralize that data.",
        "I owned the whole build: the database architecture, the user interface, the back-end logic, and the data-management functionality."
      ],
      features: [
        "Designed the MySQL database structure for IT asset and administrative records",
        "Built the back-end logic in PHP, running on XAMPP",
        "Created the user interface with HTML and CSS",
        "Implemented data-management functions to support internal IT operations and company record management",
        "Built tracking modules for computer peripherals, purchases, specs, cleaning schedules, access cards, IT issue logs, and internet providers",
        "Created a seat plan view that maps workstations to departments and counts occupied and vacant seats",
        "Added Trend Micro license tracking with active, expiring-soon, and expired status",
        "Set up role-based accounts (Super Admin / Sub Admin) and a change history log"
      ],
      note: "This is an internal company system, so source code isn't public.",
      code: "", demo: ""
    },
    {
      slug: "mathplustbs",
      color: "#e8590c", color2: "#7c3aed", mock: "game",
      short: "MathPlusTBS",
      tag: "Academic · Game",
      title: "MathPlusTBS — Unity Educational Game",
      summary: "An educational math game built in Unity and C#. I led development and taught myself Unity from scratch to ship it.",
      role: "Lead developer",
      context: "Academic project — TIP",
      year: "",
      tech: ["Unity", "C#", "Blender"],
      wordmark: "mathplus",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/mathplustbs/logo-clean.png", logoBg: "#000000",   // shown on the card and project header
      image: "screenshots/mathplustbs/main-menu.png",
      gallery: [
        { src: "screenshots/mathplustbs/main-menu.png", caption: "Main menu: Start, Library, Tutorial, Help" },
        { src: "screenshots/mathplustbs/level-select.png", caption: "Topic and level select: Basic Algebra and Fractions, with locked levels" },
        { src: "screenshots/mathplustbs/characters.png", caption: "Character select: Warrior, Archer, Mage, Assassin" },
        { src: "screenshots/mathplustbs/battle.png", caption: "Turn-based battle: pick a move, skill, or item" }
      ],
      overview: [
        "MathPlusTBS is an educational game that makes practicing math interactive. I led the project and developed it despite having no prior game-development experience, teaching myself Unity along the way.",
        "The result is a functional application covering gameplay logic, 3D assets, environment design, and interactive features."
      ],
      features: [
        "Programmed the gameplay logic in C#",
        "Modeled 3D assets in Blender",
        "Designed the game environments in Unity",
        "Built the interactive features that tie the math content to gameplay",
        "Math topics (Basic Algebra and Fractions) with levels that unlock as you progress",
        "Four playable character classes: Warrior, Archer, Mage, and Assassin",
        "Turn-based battles with basic moves, skills, and items"
      ],
      note: "",
      code: "", demo: ""
    },
    {
      slug: "ecommerce",
      color: "#b45309", color2: "#e8590c", mock: "store",
      short: "E-Commerce",
      tag: "Academic · Web",
      title: "Web-Based E-Commerce System",
      summary: "GG-EZ, a full-stack online store for gaming gear and electronics, with a customer shop and a full admin panel.",
      role: "Full-stack developer",
      context: "Academic project — TIP",
      year: "",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      wordmark: "ggez",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/ecommerce/logo.png", logoBg: "#07080c",   // shown on the card and project header
      image: "screenshots/ecommerce/home.png",
      gallery: [
        { src: "screenshots/ecommerce/home.png", caption: "Home page with a featured products carousel" },
        { src: "screenshots/ecommerce/shop.png", caption: "Shop: product catalog with price and category filters" },
        { src: "screenshots/ecommerce/admin-dashboard.png", caption: "Admin dashboard: orders, customers, and inventory alerts" },
        { src: "screenshots/ecommerce/activity-logs.png", caption: "Activity logs that track admin actions" },
        { src: "screenshots/ecommerce/location.png", caption: "Store location page with an embedded map" }
      ],
      overview: [
        "A full-stack e-commerce website for selling computers and electronic devices.",
        "It covers the essentials of an online store: browsable product listings, front-end interfaces, a database behind the catalog, and the core purchasing flow."
      ],
      features: [
        "Product listings for computers and electronic devices",
        "Front-end interfaces built with HTML, CSS, and JavaScript",
        "MySQL database integration through a PHP back end",
        "Core purchasing functionality: cart, wishlist, and order history",
        "Shop page with price-range and category filters",
        "Admin panel for orders, admins, users, promotions, discounts, and delivery",
        "Activity log that records admin actions"
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
