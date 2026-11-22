/* ============================================================
   YOUR CONTENT — edit this file to update the site.
   Everything on the page (text, projects, résumé) comes from DATA.
   ============================================================ */

const DATA = {
  name: "John Rendell L. Fuerte",
  short: "Rendell",
  role: "Junior Full Stack Developer",
  tagline: "2026 BSIT graduate who builds complete systems, from the database to the screen. The inventory system I made during my internship is still used by the company today.",
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
    "Full-stack web systems.",
    "Inventory & asset tools.",
    "Unity games with C#.",
    "Things that work from start to finish."
  ],

  stats: [
    { value: "5", label: "Web, mobile & game projects built" },
    { value: "19", label: "Computers built & set up" },
    { value: "2026", label: "BSIT Graduate, TIP Quezon City" }
  ],

  about: [
    "Web developer and 2026 IT graduate from TIP Quezon City. As an intern at J-K Network Services, I built the company's inventory and asset management system on my own, from the database to the screens, and they still use it today.",
    "I also set up 19 computers for employees and helped with their IT problems every day. I work with PHP, MySQL, and JavaScript, and I learn new tools quickly when a project needs them. I taught myself Unity to build my capstone game."
  ],

  // "I also build the machines" section (from your internship)
  hardware: {
    count: "19",
    label: "desktop computers built & set up",
    where: "J-K Network Services internship",
    intro: "Not all of my work is coding. During my internship I also handled the hardware side. I put together new computers from parts, set them up at employees' desks, and fixed them when something broke.",
    steps: [
      { title: "Assemble", text: "Built desktop computers for employees to use." },
      { title: "Upgrade", text: "Added more RAM and SSDs." },
      { title: "Configure", text: "Formatted the SSDs and installed the software each computer needed." },
      { title: "Deploy & support", text: "Arranged the cables, then found and fixed hardware, software, and OS problems after the computers were handed over." }
    ]
  },

  // "How this site is made" section on the home page
  siteInfo: {
    intro: "This portfolio is a website made from scratch with plain HTML, CSS, and JavaScript. It doesn't use a framework like React, and it doesn't need any build step or install. You can open index.html and it just works.",
    madeWith: ["HTML", "CSS", "JavaScript", "Google Fonts", "Git", "GitHub Pages"],
    repo: "https://github.com/rendell-11/Portfolio",
    parts: [
      { title: "One file for all the content", text: "All the text, projects, and screenshots come from one file, data.js. To add a project or change a line, I only edit that file, and every page updates." },
      { title: "Pages without reloading", text: "When you click a project, the address changes (like #/projects/ecommerce) and JavaScript draws that page right away. Smooth page transitions use the View Transitions API, with a simple fallback for browsers that don't have it." },
      { title: "The moving background", text: "The dots and lines at the top are drawn on an HTML canvas. They react to your mouse, and they stop drawing when you scroll away so they don't waste battery." },
      { title: "Light and dark mode", text: "The ◐ button switches the theme. All the colors are CSS variables, and your choice is saved in your browser, so it stays the same next time you visit." },
      { title: "CV made from the same data", text: "The CV page uses the same data.js, so it never gets out of date. Print styles turn it into a one-page A4 PDF with the Print / Save as PDF button." },
      { title: "Hosted for free", text: "The site is hosted on GitHub Pages. When I push changes to GitHub, the live site updates in about a minute. Animations also turn off if your device is set to reduce motion." }
    ]
  },

  // CV page only (#/cv): short summary and skill lines in a standard résumé format
  cvSummary: "IT graduate (TIP Quezon City, 2026) with internship experience in PHP/MySQL web development and IT support. Built an inventory and asset management system that replaced 13–15 spreadsheets and is still used by the IT department of J-K Network Services.",
  cvSkills: {
    "Languages": ["PHP", "JavaScript", "TypeScript", "SQL", "C#", "Dart", "Python", "C++", "HTML/CSS"],
    "Web": ["MySQL", "ReactJS", "Node.js", "XAMPP", "Stripe and PayPal APIs", "Google OAuth"],
    "Mobile and Games": ["Flutter", "React Native", "Expo", "Unity", "Blender"],
    "Tools": ["Git/GitHub", "VS Code", "Figma", "Jest", "Claude API"],
    "IT Support": ["PC assembly", "RAM/SSD upgrades", "OS installation", "troubleshooting"]
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
      summary: "A PHP/MySQL system for the IT department of J-K Network Services that keeps all IT asset and office records in one place. It replaced about 13 to 15 spreadsheets, and I built the whole thing by myself.",
      role: "Solo developer",
      context: "Internship — J-K Network Services",
      year: "2026",
      onCV: false,   // already covered under Experience on the CV
      tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
      wordmark: "itadmin",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/inventory/logo.png", logoBg: "#03122b",   // shown on the card and project header
      image: "screenshots/inventory/peripherals.webp",
      galleryNote: "Disclaimer: all data in these screenshots (names, accounts, passwords, IP addresses, and serial keys) is fake data I entered for the demo. It does not belong to real people, and none of the passwords are real.",
      gallery: [
        { src: "screenshots/inventory/login.webp", caption: "IT Admin login" },
        { src: "screenshots/inventory/peripherals.webp", caption: "Computer Peripherals: total devices in use, and storage stock that is counted automatically" },
        { src: "screenshots/inventory/admin-users.webp", caption: "Admin Users: computer users grouped by department" },
        { src: "screenshots/inventory/seat-plan.webp", caption: "Seat Plan Arrangement: where each computer is in every department, with counts of taken and free seats" },
        { src: "screenshots/inventory/trend-micro.webp", caption: "Trend Micro Tracker: antivirus license status and expiry date, with a filter by department" },
        { src: "screenshots/inventory/purchases.webp", caption: "Computer Purchases: when each unit was bought, with remarks" },
        { src: "screenshots/inventory/specs.webp", caption: "Computer Specifications: processor, motherboard, BIOS, and RAM of each unit, with counts of complete and incomplete records" },
        { src: "screenshots/inventory/cleaning.webp", caption: "Computer Cleaning: cleaning checklist for each device and part" },
        { src: "screenshots/inventory/access-cards.webp", caption: "Access Card Tracker: keycards, access levels, and whether each card is active, returned, or unused" },
        { src: "screenshots/inventory/it-logs.webp", caption: "IT Logs Issue Tracker: reported problems with their category, priority, fix, and target time to solve (SLA)" },
        { src: "screenshots/inventory/internet.webp", caption: "Internet Details: internet provider accounts, network monitoring, and setup records" },
        { src: "screenshots/inventory/new-page.webp", caption: "New Page: a custom page that works like a spreadsheet, with fonts, cell colors, merging, and dropdowns" },
        { src: "screenshots/inventory/user-accounts.webp", caption: "User accounts with Super Admin / Sub Admin roles" }
      ],
      overview: [
        "J-K Network Services needed one place to keep track of its IT assets and office records. During my internship, I planned and built an Inventory & Asset Management System on my own to keep all that data in one place.",
        "Before this, the IT department used about 13 to 15 separate spreadsheets. Now the IT department uses this one system to track every computer in the office, including the laptops of employees who work from home.",
        "I was in charge of the whole build: the database design, the screens, the back-end code, and the features for adding, editing, and managing the data."
      ],
      features: [
        "Designed the MySQL database for the IT asset and office records",
        "Wrote the back-end code in PHP, running on XAMPP",
        "Made the screens with HTML and CSS",
        "Added features for adding, editing, and managing data, to help the IT team and keep company records in order",
        "Built pages to track computer peripherals, purchases, specs, cleaning schedules, access cards, IT issues, and internet providers",
        "Added summary boxes on each page (totals, pending, expiring, vacant), plus filters by department, search, and page numbers",
        "Made a seat plan that shows which computers belong to each department and counts taken and free seats",
        "Added Trend Micro license tracking that shows if each license is active, expiring soon, or expired",
        "Set up accounts with different access levels (Super Admin / Sub Admin) and a log of every change"
      ],
      note: "This is a private company system, so the code isn't public.",
      code: "", demo: ""
    },
    {
      slug: "mathplustbs",
      color: "#e8590c", color2: "#7c3aed", mock: "game",
      short: "MathPlusTBS",
      tag: "Academic · Game",
      title: "MathPlusTBS — Unity Educational Game",
      summary: "An educational math game made in Unity and C#, with topics from algebra up to Simplex and Duality. I led the development and taught myself Unity from zero to finish it.",
      role: "Team lead",
      context: "Capstone project — TIP",
      year: "2026",
      cvName: "MathPlusTBS", cvStack: ["Unity", "C#", "Blender"],
      cvPoints: [
        "3D educational math game covering Basic Algebra and Fractions up to Simplex, Two-Phase, and Duality.",
        "Learned Unity from scratch and wrote most of the gameplay code in C#, including turn-based battles, puzzles, and level unlocking. Modeled 3D assets in Blender.",
        "Led the capstone team and taught Unity basics to groupmates."
      ],
      tech: ["Unity", "C#", "Blender"],
      wordmark: "mathplus",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/mathplustbs/logo-clean.png", logoBg: "#000000",   // shown on the card and project header
      image: "screenshots/mathplustbs/main-menu.png",
      // In play order. group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Getting started", src: "screenshots/mathplustbs/main-menu.png", caption: "Main menu: Start, Library, Tutorial, Help" },
        { group: "Getting started", src: "screenshots/mathplustbs/level-select.png", caption: "Choosing a topic and level: Basic Algebra and Fractions, with some levels locked" },
        { group: "Getting started", src: "screenshots/mathplustbs/characters.png", caption: "Choosing a character: Warrior, Archer, Mage, Assassin" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-classroom.webp", caption: "The story starts in class: \"Another day, another boring topic\"" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-overslept.webp", caption: "The student wakes up in a strange place" },
        { group: "Story intro", src: "screenshots/mathplustbs/intro-wizard.webp", caption: "An old wizard offers to help" },
        { group: "Story intro", src: "screenshots/mathplustbs/npc-welcome.webp", caption: "In the dungeon, an NPC welcomes the player to Basic Algebra" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/perfect-choice.webp", caption: "Getting the right answer: \"Perfect Choice!\"" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/enemy.webp", caption: "An enemy hiding in the dark" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon.webp", caption: "Exploring the dungeon lit by torches, with the minimap, timer, HP, and score" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/dungeon-cells.webp", caption: "Locked cells along the dungeon hallway" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-variable.webp", caption: "A math clue at a locked gate explaining what a variable is" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/lesson-chalkboard.webp", caption: "Chalkboard lessons teach the topic as you explore" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/clue-pickup.webp", caption: "Picking up a clue scroll" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/puzzle.webp", caption: "A picture puzzle you have to solve to open the gate" },
        { group: "Level 1: the dungeon", src: "screenshots/mathplustbs/gate-unlock.webp", caption: "The gate opens once the puzzle is solved" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle.png", caption: "Turn-based battle: pick a move or a skill" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-items.webp", caption: "Using items in battle: strength, health, defense, and skill potions" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/battle-victory.webp", caption: "Winning a battle: bonus points and gold coins as a reward" },
        { group: "Turn-based battles", src: "screenshots/mathplustbs/level-completed.webp", caption: "Finishing the level on the magic circle" },
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
        "MathPlusTBS is an educational game that makes practicing math more fun and hands-on. I led the project and built it even though I had never made a game before, and I taught myself Unity along the way.",
        "The player is a student who falls asleep in a boring math class and wakes up in a fantasy world. To get through each level, they explore dungeons, collect clues and lessons about the topic, solve puzzles to unlock gates, and fight enemies in turn-based battles.",
        "In the end, we had a working game with gameplay code, 3D models, designed levels, and interactive features."
      ],
      features: [
        "Wrote the gameplay code in C#",
        "Made 3D models in Blender",
        "Designed the game worlds in Unity: a dungeon, grassland, desert, treasure room, and lava world",
        "Built the interactive parts that connect the math lessons to the gameplay",
        "Math topics from Basic Algebra and Fractions up to linear programming (Simplex, Two-Phase, and Duality methods), with levels that unlock as you play",
        "Story scenes and NPC conversations that introduce each topic",
        "Clues, chalkboard lessons, and puzzles that unlock gates",
        "Four characters to choose from: Warrior, Archer, Mage, and Assassin",
        "Turn-based battles with basic moves, skills, and items",
        "On-screen display with minimap, timer, HP, level, score, and gold coins, plus touch controls",
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
      summary: "GG-EZ, a full-stack online store for gaming gear with Stripe and PayPal payments, Google sign-in, an admin panel, and a courier portal.",
      role: "Team lead",
      context: "3rd-year project — TIP",
      year: "2025",
      cvName: "GG-EZ Online Store", cvStack: ["PHP", "MySQL", "JavaScript", "Stripe", "PayPal"],
      cvPoints: [
        "Online store for gaming gear with a customer shop, an admin panel, and a courier portal, finished in 3–4 months.",
        "Integrated Stripe and PayPal checkout and Google sign-in (OAuth 2.0).",
        "Built admin tools for orders, refunds, deliveries, promotions, and sales reports with PDF export.",
        "Led the team, assigned tasks and deadlines, and helped teammates fix bugs."
      ],
      tech: ["PHP", "MySQL", "JavaScript", "Stripe", "PayPal", "Google OAuth", "FPDF"],
      wordmark: "ggez",   // sharp text logo drawn by the site (see WORDMARKS in render.js)
      logo: "screenshots/ecommerce/logo.png", logoBg: "#07080c",   // shown on the card and project header
      image: "screenshots/ecommerce/home.png",
      // group: splits the screenshots under a heading on the project page
      gallery: [
        { group: "Customer side", src: "screenshots/ecommerce/home.png", caption: "Home page with a sliding banner of featured products" },
        { group: "Customer side", src: "screenshots/ecommerce/shop.png", caption: "Shop: list of products with price and category filters" },
        { group: "Customer side", src: "screenshots/ecommerce/location.png", caption: "Store location page with a map" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/01-dashboard.webp", caption: "Admin dashboard: store numbers, low-stock alerts, newest users, and most viewed products" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/02-login.webp", caption: "Admin login" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/03-orders.webp", caption: "Placed orders: update payment status and handle cancel and refund requests" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/04-admin-accounts.webp", caption: "Admin accounts with Super, Order, and Delivery admin roles" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/05-activity-logs.webp", caption: "Activity logs: every admin action with the date and time, with search and a filter by admin" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/06-user-accounts.webp", caption: "Customer accounts" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/07-promotions.webp", caption: "Making image and video promos for the home page" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/08-order-status.webp", caption: "Delivery reports: order status, delivery date, and assigned courier" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/09-courier-login.webp", caption: "Separate login for couriers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/10-courier-accounts.webp", caption: "Creating and managing courier accounts" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/11-messages.webp", caption: "Inbox for customer feedback" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/12-user-comments.webp", caption: "Product comments and ratings from customers" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/13-add-product.webp", caption: "Adding a product with price, category, stock, and three images" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/14-manage-categories.webp", caption: "Products grouped by category, with update and archive buttons" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/15-archived-products.webp", caption: "Archived products that can be restored" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/16-product-reports.webp", caption: "Sales reports: a chart of sales over time, a sales calendar, and PDF download" },
        { group: "Admin side", src: "screenshots/ecommerce/admin/17-update-profile.webp", caption: "Updating the admin profile and password" }
      ],
      overview: [
        "A full-stack online store website for selling gaming gear and accessories. It has three parts: a shop for customers, an admin dashboard, and a page for couriers. We finished it in about 3 to 4 months.",
        "It has the basic parts of an online store: product pages you can browse, the screens customers use, a database that holds the products, and the steps for buying.",
        "Behind the store is a full admin panel for running the business. Admins can manage orders and deliveries, products and categories, promos, customer messages, and admin accounts. Each admin only gets access to what their role needs, and every admin action is saved in an activity log."
      ],
      features: [
        "Product pages with categories, search, and quick view",
        "Screens built with HTML, CSS, and JavaScript",
        "MySQL database connected through a PHP back end",
        "Online payments through Stripe and PayPal",
        "Sign in with Google (OAuth 2.0), or sign up with a normal account",
        "Main buying features: cart, wishlist, saved addresses, and order history",
        "Order tracking (to ship, to receive, delivered), buying again, and return requests",
        "Shop page with price-range and category filters",
        "Admin dashboard with store numbers, low-stock alerts, newest users, and most viewed products",
        "Order management: updating payment status and handling cancel and refund requests",
        "Admin accounts with different roles (Super Admin, Order Admin, Delivery Admin)",
        "Activity log that saves every admin action with the date and time",
        "Delivery management with courier accounts, a separate courier login, and delivery status reports",
        "Product management: add, update, archive, and restore products by category",
        "Marketing tools: image and video promos and discounts",
        "Customer feedback inbox and product comments",
        "Sales reports with a chart of sales over time, a sales calendar, and PDF download (FPDF)"
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
      summary: "An Android app for planning which muscles to train each day of the week, logging every set, tracking progress, and reaching daily calorie and macro goals.",
      why: "I wanted one app that fits the way I actually train, and a reason to learn Flutter.",
      role: "Solo developer & designer",
      context: "Personal project",
      year: "2026",
      cvName: "Workout Tracker", cvStack: ["Flutter", "Dart", "Figma"],
      cvPoints: [
        "Android app for planning weekly workouts, logging sets, and tracking food intake. Designed every screen in Figma first.",
        "Calculates daily calorie and macro targets with the Mifflin-St Jeor equation; progress charts with fl_chart.",
        "Released as an APK on GitHub, with a demo mode that loads 8 weeks of sample workouts."
      ],
      tech: ["Flutter", "Dart", "Material 3", "fl_chart", "Figma"],
      phones: ["screenshots/workout-tracker/02_planner.webp", "screenshots/workout-tracker/01_splash.webp", "screenshots/workout-tracker/04_progress.webp"],
      gallery: [
        { src: "screenshots/workout-tracker/01_splash.webp", caption: "Animated opening screen" },
        { src: "screenshots/workout-tracker/02_planner.webp", caption: "Weekly planner: today's plan, weekly goal, streak, and calendar" },
        { src: "screenshots/workout-tracker/03_week.webp", caption: "The whole week in one view, with an icon for the muscle group of each day" },
        { src: "screenshots/workout-tracker/06_split.webp", caption: "Choosing which muscle group to train that day" },
        { src: "screenshots/workout-tracker/08_day_plan.webp", caption: "Adding exercises to each section of the day" },
        { src: "screenshots/workout-tracker/09_exercises.webp", caption: "Exercise list you can filter by equipment" },
        { src: "screenshots/workout-tracker/04_progress.webp", caption: "Progress: totals, workouts per week, and heaviest set per exercise" },
        { src: "screenshots/workout-tracker/05_food.webp", caption: "Food tracker compared to daily calorie and macro goals" },
        { src: "screenshots/workout-tracker/07_food_day.webp", caption: "Logging breakfast, lunch, dinner, and snacks" },
        { src: "screenshots/workout-tracker/10_daily_guide.webp", caption: "Daily guide: how the goals are computed, step by step" },
        { src: "screenshots/workout-tracker/11_profile.webp", caption: "Edit profile: body stats, activity level, and goals" },
        { src: "screenshots/workout-tracker/12_bmi.webp", caption: "BMI that updates right away as you edit" }
      ],
      motivation: [
        "I exercise regularly, but I kept forgetting where I was: how many reps I usually do for each exercise, how heavy the weights were, and what order I did them in. My workouts felt messy. I also had trouble tracking my calories and protein, which made it harder to stick to my fitness goals.",
        "Instead of trying another workout app, I decided to make my own. I wanted one that matches the way I actually train: plan my weekly schedule, record each set, track the weight and reps, keep an eye on what I eat, and see whether I'm improving over time.",
        "It was also a way to keep improving my coding skills after graduation. I designed every screen in Figma first, then learned Flutter and Dart to turn the design into a working app."
      ],
      overview: [
        "Workout Tracker is a Flutter app for planning your weekly workouts, logging every set, tracking progress over time, and keeping a food log.",
        "Everything is saved on the phone. A demo mode fills the app with eight weeks of sample workouts, so anyone can try it right away."
      ],
      features: [
        "Weekly planner: pick which muscles to train each day, with icons I drew in code for each muscle group",
        "List of 50+ exercises with the equipment, form tips, and target muscles",
        "Log every set, already filled in with your numbers from last time",
        "Workout summary with time, total weight lifted, estimated calories, and personal records",
        "Progress charts for workouts per week and heaviest set per exercise",
        "Daily calorie and macro goals using the Mifflin-St Jeor formula, with safe limits and sources",
        "Food tracker, profile, and BMI that updates as you type",
        "Used ChangeNotifier to manage the app's data, and saved it with shared_preferences and JSON"
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
      summary: "A React Native notes app where you speak your notes. An optional AI helper powered by Claude summarizes them, suggests a title, and lists the to-dos.",
      why: "To try TypeScript, React Native, and Expo, and get used to tools outside what I usually use.",
      role: "Solo developer",
      context: "Personal project",
      year: "2026",
      cvName: "VoiceNote", cvStack: ["React Native", "Expo", "TypeScript"],
      cvPoints: [
        "Voice-first notes app for Android and iOS using the phone's speech recognition.",
        "Optional Claude API assistant that summarizes notes, suggests titles, and pulls out to-dos; responses validated with Zod. Unit tests in Jest."
      ],
      tech: ["React Native", "Expo", "TypeScript", "Node.js", "Claude API", "Jest"],
      wordmark: "voicenote",
      logo: "screenshots/voicenote/icon.png", logoBg: "#f5f3ea",
      phones: ["screenshots/voicenote/02_home.webp", "screenshots/voicenote/01_splash.webp", "screenshots/voicenote/05_dictating.webp"],
      gallery: [
        { src: "screenshots/voicenote/01_splash.webp", caption: "Animated opening screen: \"Say it. Save it.\"" },
        { src: "screenshots/voicenote/02_home.webp", caption: "Notes list with search (by typing or voice) and pinned notes" },
        { src: "screenshots/voicenote/03_home_dark.webp", caption: "Dark mode, turned on with the button at the top right" },
        { src: "screenshots/voicenote/04_editor.webp", caption: "Note editor with word count, share button, and tap-to-talk" },
        { src: "screenshots/voicenote/05_dictating.webp", caption: "Talking: a recording timer and a moving sound wave" },
        { src: "screenshots/voicenote/06_formatting.webp", caption: "Formatting toolbar: headings, bold, italic, bullet lists, and checklists" }
      ],
      motivation: [
        "VoiceNote was a learning project. Most of my work is in PHP and MySQL, so I built this to try TypeScript with React Native and Expo, learn a new skill, and get used to other programming languages and tools.",
        "Choosing a voice notes app gave me real problems to solve: using the phone's speech recognition, getting the AI to answer in a fixed format, and saving data in a way I could test."
      ],
      overview: [
        "VoiceNote is a notes app for Android and iOS where talking comes first. You speak straight into a note, and the words go where your cursor is, so you can mix typing and talking.",
        "An optional AI helper, powered by Claude, gives a one-sentence summary, a suggested title, a to-do list, and a cleaned-up version of what you said. You can apply each one with one tap. Notes are saved on the phone, so everything except the AI works without internet."
      ],
      features: [
        "Talk to type, with the words showing up as you speak, using the phone's speech recognition (expo-speech-recognition)",
        "Voice commands like \"new paragraph\", a button to switch the talking language, and voice search",
        "Text formatting: H1–H3 headings, bold, italic, bullet lists, and checklists",
        "AI results from Claude, checked with a Zod schema so the app always gets answers in the right format",
        "Pin, search, and select many notes to delete, with Undo",
        "Share any note to other apps",
        "Dark mode that follows the phone's setting or can be set by hand, and a screen-reader label on every button",
        "Notes saved with AsyncStorage using TypeScript types, with a fixed ID for each note, and old data updated automatically when the format changes",
        "Unit tests with Jest, and GitHub Actions that automatically checks code style, types, and tests"
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
      cvPoints: [   // CV page wording
        "Built the IT department's inventory and asset management system alone, using PHP, MySQL, HTML, and CSS. The department still uses it.",
        "Replaced 13–15 separate spreadsheets with one system that tracks every office computer, including laptops of employees who work from home.",
        "Built more than 10 tracking modules (peripherals, purchases, specs, access cards, IT issue logs, antivirus licenses), plus admin roles and a change log.",
        "Assembled, upgraded (RAM/SSD), and deployed 19 desktop workstations.",
        "Handled day-to-day IT support for hardware, software, and OS issues.",
        "Wrote technical documentation and designed print and digital materials."
      ],
      points: [
        "Built the company's inventory and IT asset management system on my own. I designed the MySQL database, wrote the PHP back end, and built the HTML/CSS screens. The company still uses it.",
        "The system keeps IT asset and office records in one place. Before, they were spread across about 13 to 15 different spreadsheets. It tracks every office computer, including the laptops of employees who work from home.",
        "Built, set up, and delivered 19 desktop computers, including adding RAM and SSDs, formatting SSDs, installing software, and arranging cables.",
        "Helped employees with IT problems every day, fixing broken hardware, software errors, OS problems, and slow computers.",
        "Wrote technical guides and designed printed and online materials for the company."
      ]
    },
    {
      title: "Freelance Data Management Assistant",
      org: "Alpha Iota — Malaysia (Remote)",
      date: "Sep 2021 – Mar 2022",
      cvPoints: [   // CV page wording
        "Processed data entry and record updates for about 150 accounts per day inside a secure virtual machine.",
        "Followed the client's data-handling and security procedures; usually finished the daily batch early and took on extra accounts."
      ],
      points: [
        "Did data entry and kept records for about 150 accounts per day for a client abroad, working inside a secure virtual machine.",
        "Followed strict rules for handling data and security to keep the client's information correct and safe.",
        "Often finished my daily work early and took on extra work to get more done."
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
