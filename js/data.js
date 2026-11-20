/* ============================================================
   YOUR CONTENT — edit this file to update the site.
   Everything on the page (text, projects, résumé) comes from DATA.
   ============================================================ */

const DATA = {
  name: "John Rendell L. Fuerte",
  short: "Rendell",
  role: "Junior Full Stack Developer",
  tagline: "I'm a fresh IT graduate from TIP Quezon City. I like building systems people actually use. The inventory system I made during my internship is still running at the company.",
  location: "Quezon City, Philippines",
  email: "fuertejohnrendell@gmail.com",
  github: "https://github.com/rendell-11",
  linkedin: "https://www.linkedin.com/in/johnrendell-fuerte",
  phone: "0961 504 8679",   // shown on the CV page only (leave "" to hide)
  website:"https://rendell-11.github.io/Portfolio/",   // shown on the CV page
  resume: "resume.pdf",   // put your PDF next to index.html with this name
  coverLetter: "cover-letter.pdf",   // leave "" to hide the cover letter button
  photo: "images/profile.jpg",   // your portrait in the hero (a larger photo will look sharper)

  // Hero extras
  status: "Open to junior developer roles",   // shown in the green "available" badge
  typed: [                                      // phrases the hero types out after "I build…"
    "web systems in PHP & MySQL.",
    "inventory and asset tools.",
    "Unity games in C#.",
    "mobile apps in Flutter."
  ],

  stats: [
    { value: "5", label: "Projects I've built" },
    { value: "19", label: "PCs I built and set up" },
    { value: "2026", label: "BSIT graduate, TIP Quezon City" }
  ],

  about: [
    "Hi, I'm Rendell. I graduated with a BSIT degree from TIP Quezon City in 2026. During my internship at J-K Network Services, I built their inventory and asset management system by myself, from the database up to the screens. They still use it today.",
    "I also built and set up 19 computers for the staff and helped with IT problems around the office. I mostly work with PHP, MySQL, and JavaScript, but I don't mind learning something new when a project needs it. I learned Unity from zero just to build our capstone game."
  ],

  // "I also build the machines" section (from your internship)
  hardware: {
    count: "19",
    label: "desktop PCs built and set up",
    where: "J-K Network Services internship",
    intro: "Not all my work is code. During my internship I also did the hardware side. I put together new PCs, set them up for the staff, and fixed them when something went wrong.",
    steps: [
      { title: "Assemble", text: "Put together desktop PCs for the employees." },
      { title: "Upgrade", text: "Added RAM and SSDs to make them faster." },
      { title: "Configure", text: "Formatted the drives and installed what each person needed." },
      { title: "Deploy & support", text: "Set them up at each desk, tidied the cables, and fixed problems after." }
    ]
  },

  skills: {
    "Languages": ["PHP", "JavaScript", "TypeScript", "Dart", "C#", "C++", "Python", "SQL", "HTML", "CSS"],
    "Web Development": ["ReactJS", "Node.js", "MySQL", "XAMPP"],
    "Mobile Development": ["Flutter", "React Native", "Expo", "Material 3", "fl_chart"],
    "Game Development": ["Unity", "Blender"],
    "Testing & AI": ["Jest", "Claude API"],
    "Tools": ["Git/GitHub", "Visual Studio Code", "Figma"],
    "IT Support": ["Desktop assembly", "Hardware & software troubleshooting", "RAM/SSD upgrades", "OS installation", "Workstation setup"]
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
     - galleryNote: optional note shown above the screenshots (e.g. a dummy-data disclaimer)
     - overview: paragraphs for the project page
     - features: bullet points for "What I built"
     - code / demo: links (leave "" to hide)
     - cvPoints: bullet points used for this project on the CV page (falls back to summary)
     - onCV:     set to false to leave a project off the CV page
  */
  projects: [
    {
      slug: "inventory-system",
      color: "#0f766e", color2: "#14b8a6", mock: "dashboard",
      short: "Inventory",
      tag: "Internship · Production",
      title: "Inventory & IT Asset Management System",
      summary: "A PHP and MySQL system I built alone during my internship at J-K Network Services. It keeps all their IT assets and office records in one place, and they still use it.",
      role: "Solo developer",
      context: "Internship — J-K Network Services",
      year: "2026",
      onCV: false,   // already covered under Experience on the CV
      tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
      wordmark: "itadmin",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/inventory/logo.png", logoBg: "#03122b",   // shown on the card and project header
      image: "screenshots/inventory/peripherals.webp",
      galleryNote: "Note: everything in these screenshots (names, accounts, passwords, IP addresses, serial keys) is dummy data I typed in for the demo. None of it is real.",
      gallery: [
        { src: "screenshots/inventory/login.webp", caption: "IT Admin login page" },
        { src: "screenshots/inventory/peripherals.webp", caption: "Computer peripherals, with totals of deployed devices and stock left in storage" },
        { src: "screenshots/inventory/admin-users.webp", caption: "Workstation users, sorted by department" },
        { src: "screenshots/inventory/seat-plan.webp", caption: "Seat plan per department, showing which seats are taken or free" },
        { src: "screenshots/inventory/trend-micro.webp", caption: "Trend Micro tracker for antivirus licenses and when they expire" },
        { src: "screenshots/inventory/purchases.webp", caption: "When each computer was bought, with remarks" },
        { src: "screenshots/inventory/specs.webp", caption: "Specs of each unit (processor, motherboard, BIOS, RAM)" },
        { src: "screenshots/inventory/cleaning.webp", caption: "Cleaning checklist for each device and part" },
        { src: "screenshots/inventory/access-cards.webp", caption: "Access card tracker, showing who has which keycard" },
        { src: "screenshots/inventory/it-logs.webp", caption: "IT issue log with priority, status, and SLA" },
        { src: "screenshots/inventory/internet.webp", caption: "Internet accounts and network details" },
        { src: "screenshots/inventory/new-page.webp", caption: "Custom page that works like a small spreadsheet" },
        { src: "screenshots/inventory/user-accounts.webp", caption: "User accounts with Super Admin and Sub Admin roles" }
      ],
      overview: [
        "Before this system, the company kept their IT records in different spreadsheets, so it was hard to find things. During my internship I was asked to build one system to keep everything together.",
        "I did it alone. I planned the database, wrote the PHP code, and designed the pages. I kept adding modules whenever the IT team needed to track something new."
      ],
      features: [
        "Planned the MySQL database for all the IT and office records",
        "Wrote the back end in PHP and ran it on XAMPP",
        "Made the pages with HTML and CSS",
        "Built pages to track peripherals, purchases, specs, cleaning, access cards, IT issues, and internet accounts",
        "Added summary cards on top of each page (totals, pending, expiring, vacant) so you see the numbers right away",
        "Added department filters, search, and pagination",
        "Made a seat plan that shows which desks are taken or free",
        "Tracked Trend Micro licenses so the team knows which ones are about to expire",
        "Added Super Admin and Sub Admin accounts, plus a log of who changed what"
      ],
      note: "This is an internal company system, so I can't share the code.",
      code: "", demo: ""
    },
    {
      slug: "mathplustbs",
      color: "#e8590c", color2: "#7c3aed", mock: "game",
      short: "MathPlusTBS",
      tag: "Academic · Game",
      title: "MathPlusTBS — Unity Educational Game",
      summary: "Our capstone game for practicing math, from algebra up to Simplex and Duality. I led the team and learned Unity from scratch to build it.",
      role: "Team lead",
      context: "Capstone project — TIP",
      year: "",
      cvPoints: [
        "Led our capstone team and built most of the game. I had never made a game before, so I learned Unity and C# during the project.",
        "Did the gameplay code, the 3D levels, and the math puzzles, and we finished a playable game."
      ],
      tech: ["Unity", "C#", "Blender"],
      wordmark: "mathplus",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/mathplustbs/logo-clean.png", logoBg: "#000000",   // shown on the card and project header
      image: "screenshots/mathplustbs/main-menu.png",
      // In play order. group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Getting started", src: "screenshots/mathplustbs/main-menu.png", caption: "Main menu" },
        { group: "Getting started", src: "screenshots/mathplustbs/level-select.png", caption: "Picking a topic and level (locked levels open as you play)" },
        { group: "Getting started", src: "screenshots/mathplustbs/characters.png", caption: "Choosing a character: Warrior, Archer, Mage, or Assassin" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-classroom.webp", caption: "The story starts in a boring math class" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-overslept.webp", caption: "The student falls asleep and wakes up somewhere else" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-wizard.webp", caption: "An old wizard offers to help" },
        { group: "Story intro", src: "screenshots/mathplustbs/npc-welcome.webp", caption: "An NPC welcomes you to the Basic Algebra dungeon" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/perfect-choice.webp", caption: "Getting an answer right" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/enemy.webp", caption: "An enemy waiting in the dark" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon.webp", caption: "Walking through the dungeon, with the minimap, timer, HP, and score" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon-cells.webp", caption: "Locked cells along the hallway" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-variable.webp", caption: "A clue at a locked gate explaining what a variable is" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/lesson-chalkboard.webp", caption: "Chalkboard lessons you find while exploring" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-pickup.webp", caption: "Picking up a clue scroll" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/puzzle.webp", caption: "A picture puzzle you solve to open the gate" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/gate-unlock.webp", caption: "The gate opens after the puzzle" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle.png", caption: "Battle: pick a move or a skill" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-items.webp", caption: "Using potions during a battle" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-victory.webp", caption: "Winning a battle and getting gold coins" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/level-completed.webp", caption: "Level done" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-grassland.webp", caption: "Grassland world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-desert.webp", caption: "Desert canyon world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-treasure.webp", caption: "Treasure room" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-lava.webp", caption: "Lava world" },
        { group: "More worlds", src: "screenshots/mathplustbs/world-portal.webp", caption: "Portal to the next stage" },
        { group: "More worlds", src: "screenshots/mathplustbs/final-victory.webp", caption: "Victory screen" },
        { group: "In-game menus", src: "screenshots/mathplustbs/player-stats.webp", caption: "Player stats and equipment" },
        { group: "In-game menus", src: "screenshots/mathplustbs/inventory.webp", caption: "Inventory with potions and clues" },
        { group: "In-game menus", src: "screenshots/mathplustbs/pause-menu.webp", caption: "Pause menu" }
      ],
      overview: [
        "MathPlusTBS is the game we made for our capstone. The idea was to make math practice feel less boring by turning it into an adventure.",
        "You play as a student who falls asleep in math class and wakes up in a fantasy world. To finish each level, you explore, collect clues and short lessons, solve puzzles to open gates, and fight enemies in turn-based battles.",
        "I was the team lead. None of us had made a game before, so I learned Unity from zero in about 3 to 4 months, wrote most of the code, and taught my groupmates along the way."
      ],
      features: [
        "Wrote the gameplay code in C#",
        "Made the 3D models in Blender",
        "Built the levels in Unity: a dungeon, grassland, desert, treasure room, and lava world",
        "Connected the math lessons to the gameplay so you learn while you play",
        "Topics start with Basic Algebra and Fractions and go up to linear programming (Simplex, Two-Phase, and Duality)",
        "Levels unlock as you go",
        "Short story scenes and NPC dialogue that introduce each topic",
        "Clues, chalkboard lessons, and puzzles that open locked gates",
        "Four characters to choose from: Warrior, Archer, Mage, and Assassin",
        "Turn-based battles with moves, skills, and items",
        "Minimap, timer, HP, score, and gold coins on screen, with touch controls",
        "Inventory, player stats, and a pause menu"
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
      summary: "GG-EZ, an online store for gaming gear that we built in 3rd year. It has Stripe and PayPal payments, Google sign-in, an admin side, and a page for couriers.",
      role: "Team lead",
      context: "3rd-year project — TIP",
      year: "",
      cvPoints: [
        "Built an online store for gaming gear with PHP and MySQL, with Stripe and PayPal payments, Google sign-in, an admin panel, and a courier portal.",
        "Led the team. I split the tasks, kept track of deadlines, ran the testing, and helped my groupmates when they got stuck on code."
      ],
      tech: ["PHP", "MySQL", "JavaScript", "Stripe", "PayPal", "Google OAuth", "FPDF"],
      wordmark: "ggez",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/ecommerce/logo.png", logoBg: "#07080c",   // shown on the card and project header
      image: "screenshots/ecommerce/home.png",
      // group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Customer side", src: "screenshots/ecommerce/home.png", caption: "Home page with featured products" },
        { group: "Customer side", src: "screenshots/ecommerce/shop.png", caption: "Shop page with price and category filters" },
        { group: "Customer side", src: "screenshots/ecommerce/location.png", caption: "Store location with a map" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/01-dashboard.webp", caption: "Admin dashboard with sales, low-stock alerts, and new users" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/02-login.webp", caption: "Admin login" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/03-orders.webp", caption: "Orders page, where admins update payments and handle cancel or refund requests" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/04-admin-accounts.webp", caption: "Admin accounts (Super, Order, and Delivery admins)" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/05-activity-logs.webp", caption: "Activity log of what each admin did and when" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/06-user-accounts.webp", caption: "Customer accounts" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/07-promotions.webp", caption: "Making image and video promos for the home page" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/08-order-status.webp", caption: "Delivery reports with status, date, and courier" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/09-courier-login.webp", caption: "Courier login" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/10-courier-accounts.webp", caption: "Adding and managing couriers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/11-messages.webp", caption: "Messages from customers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/12-user-comments.webp", caption: "Product comments and ratings" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/13-add-product.webp", caption: "Adding a new product" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/14-manage-categories.webp", caption: "Products by category, with edit and archive buttons" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/15-archived-products.webp", caption: "Archived products you can bring back" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/16-product-reports.webp", caption: "Sales report with a chart, calendar, and PDF download" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/17-update-profile.webp", caption: "Updating the admin profile and password" }
      ],
      overview: [
        "GG-EZ is an online store for gaming gear that our team made in 3rd year. It has three parts: the shop for customers, an admin side for running the store, and a separate page for couriers.",
        "On the customer side you can browse products, add them to your cart or wishlist, pay with Stripe or PayPal, and track your order until it arrives.",
        "The admin side is where most of the work went. Admins can manage products, orders, deliveries, promos, and messages. Each admin role only sees what it needs, and every action gets saved in a log."
      ],
      features: [
        "Customers can browse by category, search, and quick view products",
        "Payments through Stripe and PayPal",
        "Sign in with Google, or make a normal account",
        "Cart, wishlist, saved addresses, and order history",
        "Order tracking (to ship, to receive, delivered), plus reorder and returns",
        "Shop filters for price and category",
        "Admin dashboard with sales, low-stock alerts, new users, and most viewed products",
        "Admins can update payment status and handle cancel and refund requests",
        "Three admin roles: Super Admin, Order Admin, and Delivery Admin",
        "Activity log that saves every admin action with the time",
        "Courier accounts with their own login and delivery reports",
        "Add, edit, archive, and restore products",
        "Image and video promos and discounts",
        "Customer messages and product comments",
        "Sales reports with a chart, a calendar, and PDF export"
      ],
      note: "",
      code: "https://github.com/rendell-11/ggezports", demo: ""
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
      summary: "An Android app I made for my own workouts. I can plan my week, log every set, see my progress, and track what I eat.",
      why: "I kept forgetting my weights and reps, and I wanted an excuse to learn Flutter.",
      role: "Solo developer & designer",
      context: "Personal project",
      year: "2026",
      cvPoints: [
        "Designed in Figma and built in Flutter. It's an Android app for planning workouts, logging each set, checking progress with charts, and tracking calories and protein."
      ],
      tech: ["Flutter", "Dart", "Material 3", "fl_chart", "Figma"],
      phones: ["screenshots/workout-tracker/02_planner.webp", "screenshots/workout-tracker/01_splash.webp", "screenshots/workout-tracker/04_progress.webp"],
      gallery: [
        { src: "screenshots/workout-tracker/01_splash.webp", caption: "Splash screen" },
        { src: "screenshots/workout-tracker/02_planner.webp", caption: "Planner with today's workout, weekly goal, and streak" },
        { src: "screenshots/workout-tracker/03_week.webp", caption: "The whole week, with an icon for each muscle group" },
        { src: "screenshots/workout-tracker/06_split.webp", caption: "Choosing which muscles to train that day" },
        { src: "screenshots/workout-tracker/08_day_plan.webp", caption: "Adding exercises to the day" },
        { src: "screenshots/workout-tracker/09_exercises.webp", caption: "Exercise list you can filter by equipment" },
        { src: "screenshots/workout-tracker/04_progress.webp", caption: "Progress page with workouts per week and heaviest lifts" },
        { src: "screenshots/workout-tracker/05_food.webp", caption: "Food tracker with calorie and macro goals" },
        { src: "screenshots/workout-tracker/07_food_day.webp", caption: "Logging meals for the day" },
        { src: "screenshots/workout-tracker/10_daily_guide.webp", caption: "Guide that shows how the targets are computed" },
        { src: "screenshots/workout-tracker/11_profile.webp", caption: "Profile with body stats and goals" },
        { src: "screenshots/workout-tracker/12_bmi.webp", caption: "BMI that updates while you type" }
      ],
      motivation: [
        "I work out regularly, but I always forgot the details. How many reps did I do last time? How heavy was it? What order did I do the exercises in? My workouts ended up messy. I also had a hard time keeping track of my calories and protein.",
        "Instead of looking for another app, I decided to make my own that fits how I train. I wanted to plan my week, write down each set, see the weight and reps, track my food, and check if I'm actually getting stronger.",
        "It was also a way to keep coding after graduation. I designed all the screens in Figma first, then learned Flutter and Dart to build it."
      ],
      overview: [
        "Workout Tracker is a Flutter app where I plan my weekly workouts, log each set, check my progress, and keep a food log.",
        "Everything is saved on the phone. There's also a demo mode that fills the app with 8 weeks of sample workouts, so you can try it right away without typing anything."
      ],
      features: [
        "Weekly planner where you pick which muscles to train each day, with icons I drew in code",
        "More than 50 exercises, each with equipment, form tips, and target muscles",
        "Logging each set, already filled in with your numbers from last time",
        "Summary after each workout with time, total volume, calories, and new personal records",
        "Charts for workouts per week and heaviest set per exercise",
        "Daily calorie and macro targets using the Mifflin-St Jeor formula, with safe limits",
        "Food tracker, profile page, and BMI",
        "Used ChangeNotifier for state, and saved data with shared_preferences and JSON"
      ],
      note: "Android only. Open the app and tap \"Try it with demo data\" to look around with sample workouts.",
      code: "https://github.com/rendell-11/workout-tracker",
      demo: "https://github.com/rendell-11/workout-tracker/releases/latest", demoLabel: "Download APK"
    },
    {
      slug: "voicenote",
      color: "#36725e", color2: "#a33327", mock: "dashboard",
      short: "VoiceNote",
      tag: "Personal · Mobile",
      title: "VoiceNote — Voice-First Notes App",
      summary: "A notes app where you talk instead of type. If you want, an AI helper (Claude) can summarize the note, suggest a title, and list the to-dos.",
      why: "I wanted to learn TypeScript and React Native, since I mostly use PHP.",
      role: "Solo developer",
      context: "Personal project",
      year: "2026",
      cvPoints: [
        "Built a notes app in React Native where you speak your notes. An optional AI helper using the Claude API summarizes them, suggests a title, and pulls out to-dos.",
        "Made it to learn TypeScript, React Native, and Expo, and wrote unit tests with Jest."
      ],
      tech: ["React Native", "Expo", "TypeScript", "Node.js", "Claude API", "Jest"],
      wordmark: "voicenote",
      logo: "screenshots/voicenote/icon.png", logoBg: "#f5f3ea",
      phones: ["screenshots/voicenote/02_home.webp", "screenshots/voicenote/01_splash.webp", "screenshots/voicenote/05_dictating.webp"],
      gallery: [
        { src: "screenshots/voicenote/01_splash.webp", caption: "Splash screen: \"Say it. Save it.\"" },
        { src: "screenshots/voicenote/02_home.webp", caption: "Notes list with search and pinned notes" },
        { src: "screenshots/voicenote/03_home_dark.webp", caption: "Dark mode" },
        { src: "screenshots/voicenote/04_editor.webp", caption: "Writing a note, with a button to start talking" },
        { src: "screenshots/voicenote/05_dictating.webp", caption: "Recording, with a timer and a sound wave" },
        { src: "screenshots/voicenote/06_formatting.webp", caption: "Formatting: headings, bold, italic, lists, and checklists" }
      ],
      motivation: [
        "This was a learning project. Most of what I've built is in PHP and MySQL, so I wanted to try something different: TypeScript, React Native, and Expo.",
        "I picked a voice notes app because it gave me real things to figure out, like using the phone's speech recognition, getting clean answers back from the AI, and writing code I could test."
      ],
      overview: [
        "VoiceNote is a notes app for Android and iOS where you can talk instead of type. Whatever you say goes in where your cursor is, so you can mix typing and talking in the same note.",
        "There's an optional AI helper using Claude. It can give a one-line summary, suggest a title, make a to-do list, or clean up what you dictated, and you apply each one with a tap. Notes are saved on the phone, so it works offline except for the AI part."
      ],
      features: [
        "Talk to type, using the phone's own speech recognition",
        "Voice commands like \"new paragraph\", a language switch, and voice search",
        "Headings, bold, italic, bullet lists, and checklists",
        "AI summaries from Claude, checked with a Zod schema so bad answers don't break the app",
        "Pin notes, search, and delete many at once with Undo",
        "Share any note to other apps",
        "Dark mode, and screen reader labels on every button",
        "Notes saved with AsyncStorage, with typed code around it",
        "Unit tests with Jest, and GitHub Actions to run lint, type checks, and tests"
      ],
      note: "",
      code: "", demo: ""
    }
  ],

  experience: [
    {
      title: "Full Stack Developer / IT Support Intern",
      org: "J-K Network Services",
      date: "Jan 2026 – Apr 2026",
      points: [
        "Built the company's inventory and IT asset system by myself. I made the MySQL database, the PHP back end, and the HTML/CSS pages. They still use it.",
        "Before this, their IT records were spread across different spreadsheets. Now everything is in one place.",
        "Built and set up 19 desktop PCs. That included adding RAM and SSDs, formatting drives, installing software, and fixing the cables.",
        "Helped employees every day with IT problems, like broken hardware, software errors, OS issues, and slow computers.",
        "Wrote documentation and made some print and online materials for the company."
      ]
    },
    {
      title: "Freelance Data Management Assistant",
      org: "Alpha Iota — Malaysia (Remote)",
      date: "Sep 2021 – Mar 2022",
      points: [
        "Did data entry and kept records for around 150 accounts a day for a client abroad, working inside a secure virtual machine.",
        "Followed the client's rules for handling data so their information stayed accurate and safe.",
        "Usually finished my daily work early, so I took extra tasks."
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
