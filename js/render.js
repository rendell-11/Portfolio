/* ============================================================
   RENDER — builds the HTML for the home page and project pages
   from DATA. You normally don't need to edit this file.
   ============================================================ */

const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ext = href => `href="${esc(href)}" target="_blank" rel="noopener"`;

// The cover carries a per-project view-transition-name, so the card's cover
// and the project page's cover are treated as the same element and morph.
const cover = (p, cls = "") => `
  <div class="cover ${p.image ? "" : "placeholder"} ${cls}" style="view-transition-name: cover-${p.slug}">
    ${p.image ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}">` : `<span>${esc(p.short || p.title)}</span>`}
  </div>`;

const sectionTitle = (num, title) => `<div class="section-title"><span class="num">${num}.</span><h3>${title}</h3></div>`;

const timelineItem = e => `
  <div class="item">
    <div class="item-head">
      <div><h5>${esc(e.title)}</h5><div class="org">${esc(e.org)}</div></div>
      ${e.date ? `<div class="date">${esc(e.date)}</div>` : ""}
    </div>
    ${e.points.length ? `<ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
  </div>`;

function renderHome() {
  document.title = `${DATA.name} — ${DATA.role}`;
  app.innerHTML = `
  <header class="hero">
    <div class="eyebrow">Hi, my name is</div>
    <h1>${esc(DATA.name)}</h1>
    <h2>${esc(DATA.role)}</h2>
    <p>${esc(DATA.tagline)}</p>
    <div class="loc">📍 ${esc(DATA.location)}</div>
    <div class="cta">
      <a class="btn primary" href="#projects">View my projects</a>
      <a class="btn" href="#resume">See my résumé</a>
      <a class="btn" ${ext(DATA.github)}>GitHub</a>
    </div>
    <div class="stats">
      ${DATA.stats.map(s => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}
    </div>
  </header>

  <section id="projects">
    ${sectionTitle("01", "Top Projects")}
    <p class="section-sub">Things I've designed and built. Click a project for the full story, screenshots, and tech details.</p>
    <div class="projects">${DATA.projects.map(p => `
      <a class="card" href="#/projects/${p.slug}" aria-label="${esc(p.title)} — view project">
        ${cover(p)}
        <div class="card-body">
          <div class="tag">${esc(p.tag)}</div>
          <h4>${esc(p.title)}</h4>
          <p>${esc(p.summary)}</p>
          <div class="chips">${p.tech.map(t => `<span class="chip tech">${esc(t)}</span>`).join("")}</div>
          <div class="more">View project <i>→</i></div>
        </div>
      </a>`).join("")}
    </div>
  </section>

  <section id="resume">
    <div class="section-head">
      <div>
        ${sectionTitle("02", "Résumé")}
        <p class="section-sub">Experience, skills, and education at a glance.</p>
      </div>
      <div class="cta">
        <a class="btn primary" href="${esc(DATA.resume)}" download>Download PDF</a>
        <a class="btn" ${ext(DATA.resume)}>View PDF</a>
      </div>
    </div>
    <div class="resume-summary">${DATA.about.map(p => `<p>${esc(p)}</p>`).join("")}</div>
    <div class="resume-grid">
      <div>
        <h4 class="col-title">Experience</h4>
        <div class="timeline">${DATA.experience.map(timelineItem).join("")}</div>
      </div>
      <div>
        <div class="side-block">
          <h4 class="col-title">Skills</h4>
          ${Object.entries(DATA.skills).map(([group, items]) => `
            <div class="skill-group"><h5>${esc(group)}</h5>
              <div class="chips">${items.map(i => `<span class="chip">${esc(i)}</span>`).join("")}</div>
            </div>`).join("")}
        </div>
        <div class="side-block">
          <h4 class="col-title">Education</h4>
          <div class="timeline">${DATA.education.map(timelineItem).join("")}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="eyebrow">03. What's next?</div>
    <h3>Let's work together</h3>
    <p>I'm currently open to junior developer and IT roles. Whether you have an opportunity or just want to say hi, my inbox is open.</p>
    <div class="cta">
      <a class="btn primary" href="mailto:${esc(DATA.email)}">Say hello</a>
      <a class="btn" ${ext(DATA.linkedin)}>LinkedIn</a>
      <a class="btn" ${ext(DATA.github)}>GitHub</a>
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
  <article class="detail">
    <a class="back" href="#projects" data-back><i>←</i> All projects</a>
    <div class="tag">${esc(p.tag)}</div>
    <h1>${esc(p.title)}</h1>
    <p class="summary">${esc(p.summary)}</p>
    ${meta.length ? `<dl class="meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}

    ${cover(p, "hero-cover")}

    <div class="detail-grid">
      <div class="prose">
        <h3>Overview</h3>
        ${p.overview.map(t => `<p>${esc(t)}</p>`).join("")}
        ${p.features.length ? `<h3>What I built</h3>
          <ul class="features">${p.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
      </div>
      <aside class="aside-card">
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
      <h3>Screenshots</h3>
      <div class="gallery">${gallery.map((g, n) => `
        <button class="shot-btn" data-shot="${n}" aria-label="Enlarge screenshot: ${esc(g.caption || p.title)}">
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
