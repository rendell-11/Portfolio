# John Rendell Fuerte — Portfolio

Personal portfolio site for **John Rendell L. Fuerte**, Junior Full Stack Developer and 2026 BS Information Technology graduate.

**Live site:** https://rendell-11.github.io

## Features

- Top Projects section with a dedicated page for each project (overview, features, tech stack, screenshot gallery)
- Smooth animated transitions between the project list and project pages (View Transitions API, with a fallback)
- Résumé section with a downloadable PDF
- Light / dark mode that remembers the visitor's choice
- Responsive layout for desktop and mobile
- No frameworks or build step — plain HTML, CSS, and JavaScript

## Project structure

```
├── index.html          Page skeleton; loads the styles and scripts below
├── resume.pdf          Downloadable résumé
├── css/
│   ├── base.css        Color tokens (light/dark), reset, layout container
│   ├── components.css  Nav, buttons, chips, project covers, lightbox
│   ├── home.css        Hero, project cards, résumé, contact
│   ├── project.css     Project detail page
│   └── animations.css  Page transitions and reduced-motion support
├── js/
│   ├── data.js         All site content — edit this to update the site
│   ├── render.js       Builds the home and project pages from data.js
│   ├── router.js       Switches between pages using #/projects/<slug> links
│   ├── lightbox.js     Enlarged screenshot viewer
│   ├── theme.js        Light/dark mode toggle
│   └── main.js         Starts the site
└── screenshots/        Project screenshots referenced from data.js
```

## Updating content

All text lives in [`js/data.js`](js/data.js). To add a project, add an entry to `DATA.projects`:

```js
{
  slug: "my-project",            // used in the link: #/projects/my-project
  short: "MyProject",            // shown on the cover until a screenshot is added
  tag: "Personal · Web",
  title: "My Project",
  summary: "One or two sentences for the card.",
  role: "Solo developer",
  context: "Personal project",
  year: "2026",
  tech: ["React", "Node.js"],
  image: "screenshots/my-project/cover.png",
  gallery: [{ src: "screenshots/my-project/home.png", caption: "Home page" }],
  overview: ["Paragraph one.", "Paragraph two."],
  features: ["Feature one", "Feature two"],
  note: "",
  code: "https://github.com/rendell-11/my-project",
  demo: ""
}
```

## Running locally

Open `index.html` in a browser — no server or install needed.
