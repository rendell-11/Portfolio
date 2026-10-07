/* ============================================================
   YOUR CONTENT — edit this file to update the site.
   Everything on the page (text, projects, résumé) comes from DATA.
   ============================================================ */

const DATA = {
  name: "John Rendell L. Fuerte", 
  short: "Rendell",
  role: "Junior Full Stack Developer",
  tagline: "BS Information Technology graduate with experience in full-stack web development, full stack mobile application, Unity games, database management, UI/UX design, and IT support, creating practical digital solutions from backend logic to user interface.",
  location: "Quezon City, Philippines",
  email: "fuertejohnrendell@gmail.com",
  github: "https://github.com/rendell-11",
  linkedin: "www.linkedin.com/in/john-rendell-fuerte-5396b723b",   // TODO: confirm this URL
  resume: "resume.pdf",   // put your PDF next to index.html with this name
  coverLetter: "cover-letter.pdf",   // leave "" to hide the cover letter button
  photo: "images/profile.jpg",   // your portrait in the hero (a larger photo will look sharper)

  // Hero extras
  status: "Open to Junior Full Stack roles",   // shown in the green "available" badge
  typed: [                                      // phrases the hero types out after "I build…"
    "Full-stack Web Systems.",
    "Inventory & Asset tools.",
    "Unity games with C#.",
    "Things that work end to end."
  ],

  stats: [
    { value: "3", label: "Full stack & game projects shipped" },
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
    "Mobile Development": ["Flutter", "Dart", "React Native", "Expo", "TypeScript", "Node.js", "Material 3", "fl_chart", "Claude API", "Jest", "Figma"],
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
      image: "screenshots/inventory/peripherals.webp",
      gallery: [
        { src: "screenshots/inventory/peripherals.webp", caption: "Computer Peripherals: deployed-device totals and storage stock per department" },
        { src: "screenshots/inventory/seat-plan.webp", caption: "Seat Plan Arrangement: workstation layout by department with occupied/vacant counts" },
        { src: "screenshots/inventory/admin-users.webp", caption: "Admin Users: workstation users grouped by department" },
        { src: "screenshots/inventory/specs.webp", caption: "Computer Specifications: processor, RAM, storage, and OS per unit, with completed/incomplete counts" },
        { src: "screenshots/inventory/purchases.webp", caption: "Computer Purchases: purchase dates and remarks per unit" },
        { src: "screenshots/inventory/cleaning.webp", caption: "Computer Cleaning: maintenance checklist per device and part" },
        { src: "screenshots/inventory/trend-micro.webp", caption: "Trend Micro Tracker: antivirus license status and expiry, filterable by department" },
        { src: "screenshots/inventory/access-cards.webp", caption: "Access Card Tracker: keycards, access levels, and active/returned/vacant status" },
        { src: "screenshots/inventory/internet.webp", caption: "Internet Details: ISP accounts, network monitoring, and configuration records" },
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
        "Implemented data management functions to support internal IT operations and company record management",
        "Built tracking modules for computer peripherals, purchases, specs, cleaning schedules, access cards, IT issue logs, and internet providers",
        "Added summary cards on each module (totals, pending, expiring, vacant) plus department filters, search, and pagination",
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
      // In play order. group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Getting started", src: "screenshots/mathplustbs/main-menu.png", caption: "Main menu: Start, Library, Tutorial, Help" },
        { group: "Getting started", src: "screenshots/mathplustbs/level-select.png", caption: "Topic and level select: Basic Algebra and Fractions, with locked levels" },
        { group: "Getting started", src: "screenshots/mathplustbs/characters.png", caption: "Character select: Warrior, Archer, Mage, Assassin" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-classroom.webp", caption: "The story opens in class: \"Another day, another boring topic\"" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-overslept.webp", caption: "The student wakes up somewhere unfamiliar" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-wizard.webp", caption: "An old wizard offers to help" },
        { group: "Story intro", src: "screenshots/mathplustbs/npc-welcome.webp", caption: "In the dungeon, an NPC welcomes the player to Basic Algebra" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/perfect-choice.webp", caption: "Answering correctly: \"Perfect Choice!\"" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/enemy.webp", caption: "An enemy lurking in the dark" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon.webp", caption: "Exploring the torch-lit dungeon with the minimap, timer, HP, and score" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon-cells.webp", caption: "Locked cells along the dungeon corridor" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-variable.webp", caption: "A math clue at a locked gate: what a variable is" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/lesson-chalkboard.webp", caption: "Chalkboard lessons teach the topic as you explore" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-pickup.webp", caption: "Picking up a clue scroll" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/puzzle.webp", caption: "A picture puzzle that must be solved to open the gate" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/gate-unlock.webp", caption: "The gate unlocks once the puzzle is solved" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle.png", caption: "Turn-based battle: pick a move or a skill" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-items.webp", caption: "Using items in battle: strength, health, defense, and skill potions" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-victory.webp", caption: "Battle won: bonus points and a gold-coin reward" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/level-completed.webp", caption: "Level completed on the magic circle" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-grassland.webp", caption: "Grassland world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-desert.webp", caption: "Desert canyon world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-treasure.webp", caption: "Treasure room full of gold coins" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-lava.webp", caption: "Lava world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-portal.webp", caption: "A portal to the next stage" },
        { group: "More worlds", src: "screenshots/mathplustbs/final-victory.webp", caption: "Victory screen" },
        { group: "In-game menus", src: "screenshots/mathplustbs/player-stats.webp", caption: "Player stats: HP, level, power, defense, and equipment" },
        { group: "In-game menus", src: "screenshots/mathplustbs/inventory.webp", caption: "Inventory: potions and collected clues" },
        { group: "In-game menus", src: "screenshots/mathplustbs/pause-menu.webp", caption: "Pause menu" }
      ],
      overview: [
        "MathPlusTBS is an educational game that makes practicing math interactive. I led the project and developed it despite having no prior game development experience, teaching myself Unity along the way.",
        "The player is a student who falls asleep in a boring math class and wakes up in a fantasy world. To get through each level, they explore dungeons, collect clues and lessons on the topic, solve puzzles to unlock gates, and fight enemies in turn-based battles.",
        "The result is a functional application covering gameplay logic, 3D assets, environment design, and interactive features."
      ],
      features: [
        "Programmed the gameplay logic in C#",
        "Modeled 3D assets in Blender",
        "Designed the game environments in Unity: a dungeon, grassland, desert, treasure room, and lava world",
        "Built the interactive features that tie the math content to gameplay",
        "Math topics (Basic Algebra and Fractions) with levels that unlock as you progress",
        "Story cutscenes and NPC dialogue that introduce each topic",
        "Clues, chalkboard lessons, and puzzles that unlock gates",
        "Four playable character classes: Warrior, Archer, Mage, and Assassin",
        "Turn-based battles with basic moves, skills, and items",
        "In-game HUD with minimap, timer, HP, level, score, and gold coins, plus touch controls",
        "Inventory with potions, a player stats screen with equipment, and a pause menu"
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
      // group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Customer side", src: "screenshots/ecommerce/home.png", caption: "Home page with a featured products carousel" },
        { group: "Customer side", src: "screenshots/ecommerce/shop.png", caption: "Shop: product catalog with price and category filters" },
        { group: "Customer side", src: "screenshots/ecommerce/location.png", caption: "Store location page with an embedded map" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/01-dashboard.webp", caption: "Admin dashboard: store stats, inventory alerts, newest users, and most viewed products" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/02-login.webp", caption: "Admin panel login prompt" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/03-orders.webp", caption: "Placed orders: update payment status and handle cancellation and refund requests" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/04-admin-accounts.webp", caption: "Admin accounts with Super, Order, and Delivery admin roles" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/05-activity-logs.webp", caption: "Activity logs: every admin action with a timestamp, searchable and filterable by admin" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/06-user-accounts.webp", caption: "Customer accounts" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/07-promotions.webp", caption: "Promotion builder for image and video campaigns on the homepage" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/08-order-status.webp", caption: "Delivery reports: order status, delivery date, and assigned courier" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/09-courier-login.webp", caption: "Separate login for couriers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/10-courier-accounts.webp", caption: "Creating and managing courier accounts" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/11-messages.webp", caption: "Customer feedback inbox" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/12-user-comments.webp", caption: "Product comments and ratings from customers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/13-add-product.webp", caption: "Adding a product with price, category, stock, and three images" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/14-manage-categories.webp", caption: "Products grouped by category, with update and archive actions" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/15-archived-products.webp", caption: "Archived products that can be restored" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/16-product-reports.webp", caption: "Sales reports: sales-over-time chart, sales calendar, and PDF export" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/17-update-profile.webp", caption: "Admin profile and password update" }
      ],
      overview: [
        "A full-stack e-commerce website for selling computers and electronic devices.",
        "It covers the essentials of an online store: browsable product listings, front-end interfaces, a database behind the catalog, and the core purchasing flow.",
        "Behind the store is a full admin panel for running the business: managing orders and deliveries, products and categories, promotions, customer messages, and admin accounts with role-based access, with every admin action recorded in an activity log."
      ],
      features: [
        "Product listings for computers and electronic devices",
        "Front-end interfaces built with HTML, CSS, and JavaScript",
        "MySQL database integration through a PHP back end",
        "Core purchasing functionality: cart, wishlist, and order history",
        "Shop page with price-range and category filters",
        "Admin dashboard with store stats, inventory alerts, newest users, and most viewed products",
        "Order management: payment status updates and cancellation and refund requests",
        "Role-based admin accounts (Super Admin, Order Admin, Delivery Admin)",
        "Activity log that records every admin action with a timestamp",
        "Delivery management with courier accounts, a separate courier login, and delivery status reports",
        "Product management: add, update, archive, and restore products by category",
        "Marketing tools: image and video promotions and discounts",
        "Customer feedback inbox and product comments",
        "Sales reports with a sales-over-time chart, a sales calendar, and PDF export"
      ],
      note: "",
      code: "", demo: ""
    }
  ],

  /* ---------- PERSONAL PROJECTS ----------
     Same fields as TOP PROJECTS, plus:
     - why:        one line for the card ("Why I built it")
     - motivation: paragraphs for the "Why I built it" part of the project page
     - phones:     portrait phone screenshots shown side by side on the cover (up to 3)
     - demoLabel:  text for the demo button (default "Live demo")
  */
  personalProjects: [
    {
      slug: "workout-tracker",
      color: "#e5383b", color2: "#ff7a59", mock: "dashboard",
      short: "Workout Tracker",
      tag: "Personal · Mobile",
      title: "Workout Tracker — Flutter Fitness App",
      summary: "An Android app for planning a weekly training split, logging workouts set by set, tracking progress, and hitting daily nutrition targets.",
      why: "I wanted one app that fits the way I actually train, and a reason to learn Flutter.",   // TODO: confirm in your own words
      role: "Solo developer & designer",
      context: "Personal project",
      year: "2026",
      tech: ["Flutter", "Dart", "Material 3", "fl_chart", "Figma"],
      phones: ["screenshots/workout-tracker/02_planner.webp", "screenshots/workout-tracker/01_splash.webp", "screenshots/workout-tracker/04_progress.webp"],
      gallery: [
        { src: "screenshots/workout-tracker/01_splash.webp", caption: "Animated splash screen" },
        { src: "screenshots/workout-tracker/02_planner.webp", caption: "Weekly planner: today's plan, weekly goal, streak, and calendar" },
        { src: "screenshots/workout-tracker/03_week.webp", caption: "The week at a glance, with muscle-group icons for each day" },
        { src: "screenshots/workout-tracker/06_split.webp", caption: "Choosing a muscle-group split for the day" },
        { src: "screenshots/workout-tracker/08_day_plan.webp", caption: "Adding exercises to each section of the day" },
        { src: "screenshots/workout-tracker/09_exercises.webp", caption: "Exercise picker, filterable by equipment" },
        { src: "screenshots/workout-tracker/04_progress.webp", caption: "Progress: totals, workouts per week, and heaviest set per exercise" },
        { src: "screenshots/workout-tracker/05_food.webp", caption: "Food tracker against daily calorie and macro targets" },
        { src: "screenshots/workout-tracker/07_food_day.webp", caption: "Logging breakfast, lunch, dinner, and snacks" },
        { src: "screenshots/workout-tracker/10_daily_guide.webp", caption: "Daily guide: how the targets are calculated, step by step" },
        { src: "screenshots/workout-tracker/11_profile.webp", caption: "Edit profile: body stats, activity level, and goals" },
        { src: "screenshots/workout-tracker/12_bmi.webp", caption: "Live BMI readout that updates as you edit" }
      ],
      // TODO: rewrite in your own words if this isn't quite your reason
      motivation: [
        "I go for regular exercise, but one problem I have always had is forgetting where I am at specifically, how many times I usually do each workouts, how heavy the weights are, and in what order I do them. As a result my workouts often seemed unorganized and irregular. I had difficulty in keeping track of both the number of calories and the amount of protein that I intake, which made it harder for me to stick to my fitness goals.",
        "Instead of considering another workout app I decided to make my own. I wanted one that matched the way I actually workout, to plan my workout schedule, record each set, track both the weight and the number of times I lift, keep an eye on what I eat, and check whether I am improving over time.",
        "It also provided me with a means of continuing to improve my coding skills after I had graduated from school. I designed all the parts of the app using Figma and then enhance myself in Flutter and Dart to make the app function and turn it into a real one."
      ],
      overview: [
        "Workout Tracker is a Flutter app for planning a weekly training split, logging workouts set by set, tracking progress over time, and keeping a food log.",
        "Everything is saved on the device, and a demo mode fills the app with eight weeks of sample workouts so anyone can explore it right away."
      ],
      features: [
        "Weekly planner: pick a split for each day, with custom-painted icons for each muscle group",
        "Exercise library with 50+ exercises, equipment, form cues, and target muscles",
        "Set-by-set workout logging, prefilled with the numbers from your last session",
        "Workout summary with duration, volume, estimated calories, and personal records",
        "Progress charts for workouts per week and heaviest set per exercise",
        "Daily calorie and macro targets using the Mifflin-St Jeor equation, with safety limits and sources",
        "Food tracker, profile, and live BMI readout",
        "State managed with a ChangeNotifier; data stored with shared_preferences and JSON serialization"
      ],
      note: "Android only. Open the app and tap \"Try it with demo data\" to explore with sample workouts.",
      code: "https://github.com/rendell-11/workout-tracker",
      demo: "https://github.com/rendell-11/workout-tracker/releases/latest", demoLabel: "Download APK"
    },
    {
      slug: "voicenote",
      color: "#36725e", color2: "#a33327", mock: "dashboard",
      short: "VoiceNote",
      tag: "Personal · Mobile",
      title: "VoiceNote — Voice-First Notes App",
      summary: "A React Native notes app where you speak your thoughts and an optional Claude-powered assistant summarizes them, suggests a title, and pulls out the to-dos.",
      why: "To explore TypeScript, React Native, and Expo, and get comfortable with tools outside my usual stack.",
      role: "Solo developer",
      context: "Personal project",
      year: "2026",
      tech: ["React Native", "Expo", "TypeScript", "Node.js", "Claude API", "Jest"],
      wordmark: "voicenote",
      logo: "screenshots/voicenote/icon.png", logoBg: "#f5f3ea",
      phones: ["screenshots/voicenote/02_home.webp", "screenshots/voicenote/01_splash.webp", "screenshots/voicenote/05_dictating.webp"],
      gallery: [
        { src: "screenshots/voicenote/01_splash.webp", caption: "Animated splash screen: \"Say it. Save it.\"" },
        { src: "screenshots/voicenote/02_home.webp", caption: "Notes list with search (by typing or voice) and pinned notes" },
        { src: "screenshots/voicenote/03_home_dark.webp", caption: "Dark mode, switched from the top-right toggle" },
        { src: "screenshots/voicenote/04_editor.webp", caption: "Note editor with word count, share, and tap-to-dictate" },
        { src: "screenshots/voicenote/05_dictating.webp", caption: "Dictating: live recording timer and waveform" },
        { src: "screenshots/voicenote/06_formatting.webp", caption: "Formatting toolbar: headings, bold, italic, bullet lists, and checklists" }
      ],
      motivation: [
        "VoiceNote was a learning project. Most of my work is in PHP and MySQL, so I built this to explore TypeScript with React Native and Expo, add another skill, and get familiar with other programming languages and tools.",
        "Picking a voice-first notes app gave me real problems to solve along the way: native speech recognition, structured AI output, and a data layer that can be tested."
      ],
      overview: [
        "VoiceNote is a voice-first notes app for Android and iOS. You dictate straight into a note, and the text is inserted at the cursor, so you can mix typing and speaking.",
        "An optional AI assistant, powered by Claude, gives a one-sentence summary, a suggested title, a to-do list, and a cleaned-up version of dictated text, each applied with one tap. Notes are stored on the device, so everything except AI works offline."
      ],
      features: [
        "Voice typing with live results through the phone's speech recognizer (expo-speech-recognition)",
        "Voice commands like \"new paragraph\", a dictation language switch, and voice search",
        "Rich-text formatting: H1–H3 headings, bold, italic, bullet lists, and checklists",
        "AI insights from Claude, validated against a Zod schema so the UI never parses free text",
        "Pin, search, and multi-select delete with Undo",
        "Share any note through the system share sheet",
        "Dark mode that follows the phone or is set manually, and a screen-reader label on every control",
        "Typed data layer over AsyncStorage, with notes addressed by stable ids and automatic migration",
        "Unit tests with Jest and a GitHub Actions pipeline for lint, type-check, and tests"
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
