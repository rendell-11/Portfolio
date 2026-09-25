/* ============================================================
   RENDER — builds the HTML for the home page and project pages
   from DATA. You normally don't need to edit this file.
   ============================================================ */

const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// External link attributes. Adds "https://" if it was left off, so "www.site.com" isn't treated as a page on this site.
const url = href => /^(www\.|[\w-]+\.(com|net|org|io|dev|me|ph|co)(\/|$))/i.test(href) ? `https://${href}` : href;
const ext = href => `href="${esc(url(href))}" target="_blank" rel="noopener"`;
// Opens a new Gmail message addressed to you (instead of the visitor's default mail app)
const gmail = to => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
const colors = p => `--pc: ${esc(p.color || "#6d5dfc")}; --pc2: ${esc(p.color2 || p.color || "#22c7ee")};`;
const repeat = (n, html) => Array.from({ length: n }, (_, i) => html(i)).join("");

/* Illustrated mockups shown on a project's cover until a screenshot is added */
const MOCKS = {
  dashboard: () => `
    <div class="mock"><div class="bar"><i></i><i></i><i></i><u></u></div>
      <div class="m-dash">
        <div class="side"><span class="ln c"></span>${repeat(4, () => `<span class="ln"></span>`)}</div>
        <div class="main">
          <div class="tiles">${repeat(3, () => "<span></span>")}</div>
          ${repeat(5, () => `<div class="row"><b></b><span class="ln"></span><span class="ln"></span><span class="pill"></span></div>`)}
        </div>
      </div>
    </div>`,
  store: () => `
    <div class="mock"><div class="bar"><i></i><i></i><i></i><u></u></div>
      <div class="m-store">
        <div class="hdr"><span class="ln c"></span><em></em></div>
        <div class="grid">${repeat(6, () => `<div class="prod"><span></span><i class="ln"></i><i class="ln"></i></div>`)}</div>
      </div>
    </div>`,
  game: () => `
    <div class="m-game">
      <div class="sun"></div><div class="floor"></div>
      <span class="q">7 × 8 = ?</span>
      ${[["+", 12, 30, 0], ["×", 78, 24, -.8], ["÷", 22, 58, -1.6], ["−", 84, 55, -2.4], ["=", 50, 44, -1.2]]
        .map(([s, x, y, d]) => `<span class="sym" style="left:${x}%;top:${y}%;animation-delay:${d}s">${s}</span>`).join("")}
    </div>`
};

/* Project logos rebuilt as text + shapes, so they stay sharp at every size */
const WORDMARKS = {
  itadmin: p => `
    <div class="wm wm-it">
      <span class="mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
      <span><b class="name">IT Admin</b><small class="sub">Inventory &amp; Asset Management</small></span>
    </div>`,
  ggez: p => `
    <div class="wm wm-gg">
      <span class="box"><b>GG-EZ</b></span>
      <span class="side"><b>ESPORTS</b><small>GAME GEAR STORE</small></span>
    </div>`,
  mathplus: p => `
    <div class="wm wm-mp">
      ${p.logo ? `<img src="${esc(p.logo)}" alt="" aria-hidden="true">` : ""}
      <span><b class="name">MathPlus</b><small class="tag">TBS · Unity game</small></span>
    </div>`
};

// The cover carries a per-project view-transition-name, so the card's cover
// and the project page's cover are treated as the same element and morph.
const cover = (p, cls = "") => WORDMARKS[p.wordmark] ? `
  <div class="cover logo-cover ${cls}" style="view-transition-name: cover-${p.slug}; ${colors(p)} --lbg: ${esc(p.logoBg || "#111")};"
    role="img" aria-label="${esc(p.title)} logo">
    ${WORDMARKS[p.wordmark](p)}
  </div>` : p.logo ? `
  <div class="cover logo-cover ${cls}" style="view-transition-name: cover-${p.slug}; ${colors(p)} --lbg: ${esc(p.logoBg || "#111")};">
    <img src="${esc(p.logo)}" alt="${esc(p.title)} logo" onload="sizeLogo(this)">
  </div>` : `
  <div class="cover ${cls}" style="view-transition-name: cover-${p.slug}; ${colors(p)}">
    ${p.image ? `<img class="bg" src="${esc(p.image)}" alt="" aria-hidden="true">
      <img class="fg" src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" onload="markSmallCover(this)">` : (MOCKS[p.mock] || MOCKS.dashboard)()}
  </div>`;

// Logos are shown at up to 2.4x their real size so small logo files stay crisp
function sizeLogo(img) {
  img.style.maxWidth = `min(64%, ${Math.round(img.naturalWidth * 2.4)}px)`;
}

// Low-resolution screenshots aren't stretched: they're shown at a sharp size over a blurred copy of themselves
function markSmallCover(img) {
  if (img.naturalWidth < 900) img.closest(".cover").classList.add("small");
}

const sectionTitle = (num, title) => `<div class="section-title" data-reveal><span class="num">${num}</span><h3>${title}</h3></div>`;

const timelineItem = (e, i = 0) => `
  <div class="item" data-reveal style="--d:${i * .08}">
    <div class="item-head">
      <div><h5>${esc(e.title)}</h5><div class="org">${esc(e.org)}</div></div>
      ${e.date ? `<div class="date">${esc(e.date)}</div>` : ""}
    </div>
    ${e.points.length ? `<ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
  </div>`;

function renderHome() {
  document.title = `${DATA.name} — ${DATA.role}`;
  const words = DATA.name.split(" ");
  const last = words.pop();
  const marquee = [...DATA.skills["Web Development"], ...DATA.skills["Programming & Game Dev"]];

  app.innerHTML = `
  <header class="hero">
    <div class="hero-bg" aria-hidden="true">
      <div class="blob b1"></div><div class="blob b2"></div>
      <div class="grid"></div>
      <canvas id="particles"></canvas>
    </div>

    <div class="hero-text">
      <div class="badge" data-in style="--d:.05"><span class="dot"></span>${esc(DATA.status)}</div>
      <div class="hello" data-in style="--d:.1">Hi, I'm</div>
      <h1><span class="line"><span>${esc(words.join(" "))}</span></span><span class="line"><span class="hl">${esc(last)}</span>.</span></h1>
      <p class="typed-line" data-in style="--d:.35" aria-label="I build ${esc(DATA.typed[0])}">I build <b id="typed"></b><span class="caret"></span></p>
      <p class="tagline" data-in style="--d:.45">${esc(DATA.tagline)}</p>
      <div class="loc" data-in style="--d:.5">📍 ${esc(DATA.location)}</div>
      <div class="cta" data-in style="--d:.6">
        <a class="btn primary" href="#projects">View my projects →</a>
        <a class="btn" href="#resume">See my résumé</a>
        <a class="btn" ${ext(DATA.github)}>GitHub ↗</a>
      </div>
    </div>

    <figure class="portrait" data-in style="--d:.4">
      <div class="photo"><img src="${esc(DATA.photo)}" alt="Portrait of ${esc(DATA.name)}"></div>
      <dl class="facts">
        <div><dt>based in</dt><dd>${esc(DATA.location.split(",")[0])}, PH</dd></div>
        <div><dt>studied at</dt><dd>TIP Quezon City</dd></div>
        <div><dt>works on</dt><dd>Web apps + hardware</dd></div>
      </dl>
    </figure>

    <a class="scroll-hint" href="#projects" aria-label="Scroll to projects"><span class="mouse"></span>Scroll</a>
  </header>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">${[...marquee, ...marquee].map(t => `<span>${esc(t)}</span>`).join("")}</div>
  </div>

  <div class="stats">
    ${DATA.stats.map((s, i) => `<div class="stat" data-reveal style="--d:${i * .1}">
      <b ${/^\d{1,3}$/.test(s.value) ? `data-count="${s.value}"` : ""}>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}
  </div>

  <section id="projects">
    ${sectionTitle("01", `Things I've <span class="hl">built</span>`)}
    <p class="section-sub" data-reveal>Click a project for the full story, screenshots, and tech details.</p>
    <div class="projects">${DATA.projects.map((p, i) => `
      <a class="card ${i === 0 ? "featured" : ""}" href="#/projects/${p.slug}" data-reveal data-tilt style="${colors(p)} --d:${i * .1}" aria-label="${esc(p.title)} — view project">
        ${cover(p)}
        <div class="card-body">
          ${i === 0 ? `<span class="star">★ Featured</span>` : ""}
          <div class="tag">${esc(p.tag)}</div>
          <h4>${esc(p.title)}</h4>
          <p>${esc(p.summary)}</p>
          <div class="chips">${p.tech.map(t => `<span class="chip tech">${esc(t)}</span>`).join("")}</div>
          <div class="more">View project <i>→</i></div>
        </div>
      </a>`).join("")}
    </div>
  </section>

  <section id="hardware">
    ${sectionTitle("02", `I also build <span class="hl">the machines</span>`)}
    <div class="hw">
      <div class="hw-count" data-reveal>
        <b data-count="${esc(DATA.hardware.count)}">${esc(DATA.hardware.count)}</b>
        <span>${esc(DATA.hardware.label)}</span>
        <small>${esc(DATA.hardware.where)}</small>
      </div>
      <div>
        <p class="hw-intro" data-reveal>${esc(DATA.hardware.intro)}</p>
        <ol class="hw-steps">${DATA.hardware.steps.map((st, i) => `
          <li data-reveal style="--d:${i * .08}"><h5>${esc(st.title)}</h5><p>${esc(st.text)}</p></li>`).join("")}
        </ol>
      </div>
    </div>
  </section>

  <section id="resume">
    <div class="section-head">
      <div>
        ${sectionTitle("03", `The <span class="hl">résumé</span>`)}
        <p class="section-sub" data-reveal>Experience, skills, and education at a glance.</p>
      </div>
      <div class="cta" data-reveal>
        <a class="btn primary" href="${esc(DATA.resume)}" download>Download PDF ↓</a>
        <a class="btn" ${ext(DATA.resume)}>View PDF</a>
      </div>
    </div>
    <div class="resume-summary" data-reveal>${DATA.about.map(p => `<p>${esc(p)}</p>`).join("")}</div>
    <div class="resume-grid">
      <div>
        <h4 class="col-title" data-reveal>Experience</h4>
        <div class="timeline">${DATA.experience.map(timelineItem).join("")}</div>
      </div>
      <div>
        <div class="side-block" data-reveal>
          <h4 class="col-title">Skills</h4>
          ${Object.entries(DATA.skills).map(([group, items]) => `
            <div class="skill-group"><h5>${esc(group)}</h5>
              <div class="chips">${items.map(i => `<span class="chip">${esc(i)}</span>`).join("")}</div>
            </div>`).join("")}
        </div>
        <div class="side-block" data-reveal style="--d:.1">
          <h4 class="col-title">Education</h4>
          <div class="timeline">${DATA.education.map(timelineItem).join("")}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-card" data-reveal>
      <div class="eyebrow">04 — contact</div>
      <h3>Hiring a junior <span class="hl">developer?</span></h3>
      <p>I'm looking for my first full-time role in web development or IT. If you think I'd be a good fit, or just have a question about my work, send me an email.</p>
      <div class="cta">
        <a class="btn light" ${ext(gmail(DATA.email))}>Say hello ✉</a>
        <button class="btn" type="button" data-copy="${esc(DATA.email)}">Copy email</button>
        <a class="btn" ${ext(DATA.linkedin)}>LinkedIn ↗</a>
        <a class="btn" ${ext(DATA.github)}>GitHub ↗</a>
      </div>
    </div>
  </section>`;
}

function renderProject(p) {
  const i = DATA.projects.indexOf(p);
  const prev = DATA.projects[i - 1], next = DATA.projects[i + 1];
  const gallery = p.gallery || [];
  const meta = [["Role", p.role], ["Context", p.context], ["Year", p.year]].filter(([, v]) => v);
  document.title = `${p.title} — ${DATA.name}`;
  app.innerHTML = `
  <article class="detail" style="${colors(p)}">
    <div class="detail-bg" aria-hidden="true"></div>
    <a class="back" href="#projects" data-back><i>←</i> All projects</a>
    <div class="tag">${esc(p.tag)}</div>
    <h1>${esc(p.title)}</h1>
    <p class="summary">${esc(p.summary)}</p>
    ${meta.length ? `<dl class="meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}

    ${cover(p, "hero-cover")}

    <div class="detail-grid">
      <div class="prose">
        <h3 data-reveal>Overview</h3>
        ${p.overview.map(t => `<p data-reveal>${esc(t)}</p>`).join("")}
        ${p.features.length ? `<h3 data-reveal>What I built</h3>
          <ul class="features">${p.features.map((f, n) => `<li data-reveal style="--d:${n * .07}">${esc(f)}</li>`).join("")}</ul>` : ""}
      </div>
      <aside class="aside-card" data-reveal>
        <h4>Tech stack</h4>
        <div class="chips">${p.tech.map(t => `<span class="chip tech">${esc(t)}</span>`).join("")}</div>
        ${p.code || p.demo ? `<div class="links">
          ${p.demo ? `<a class="btn primary" ${ext(p.demo)}>Live demo ↗</a>` : ""}
          ${p.code ? `<a class="btn" ${ext(p.code)}>View code ↗</a>` : ""}
        </div>` : ""}
        ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      </aside>
    </div>

    ${gallery.length ? `<div class="gallery-wrap">
      <h3 data-reveal>Screenshots</h3>
      <div class="gallery">${gallery.map((g, n) => `
        <button class="shot-btn" data-shot="${n}" data-reveal style="--d:${n * .08}" aria-label="Enlarge screenshot: ${esc(g.caption || p.title)}">
          <figure><img src="${esc(g.src)}" alt="${esc(g.caption || p.title)}" loading="lazy">
          ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure>
        </button>`).join("")}
      </div>
    </div>` : ""}

    <nav class="pager" aria-label="More projects">
      ${prev ? `<a href="#/projects/${prev.slug}"><small>← Previous</small><b>${esc(prev.title)}</b></a>` : ""}
      ${next ? `<a class="next" href="#/projects/${next.slug}"><small>Next →</small><b>${esc(next.title)}</b></a>` : ""}
    </nav>
  </article>`;
}
