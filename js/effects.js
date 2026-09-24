/* ============================================================
   EFFECTS — the interactive touches: particle network, typing
   text, 3D card tilt, scroll reveal, count-up stats,
   scroll progress bar, and "copy email".
   All motion is skipped when the visitor prefers reduced motion.
   ============================================================ */

let cleanups = [];   // stop timers/loops from the previous page before rendering a new one
const still = () => reduceMotion.matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)");

/* Called by the router after every page render */
function mountEffects() {
  cleanups.forEach(fn => fn());
  cleanups = [];
  revealOnScroll();
  tiltCards();
  if (document.getElementById("particles")) {
    particleNetwork();
    typeRoles();
  }
}

/* ---------- Scroll reveal + count-up ---------- */
function revealOnScroll() {
  const els = app.querySelectorAll("[data-reveal]");
  const done = el => {
    el.classList.add("in");
    countUp(el);
    // Hand the element back to its normal styles (hover effects etc.) once it has animated in
    setTimeout(() => { el.removeAttribute("data-reveal"); el.classList.remove("in"); el.style.removeProperty("--d"); }, still() ? 0 : 1400);
  };
  if (still() || !("IntersectionObserver" in window)) return els.forEach(done);
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { io.unobserve(e.target); done(e.target); }
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  els.forEach(el => io.observe(el));
  cleanups.push(() => io.disconnect());
}

function countUp(scope) {
  scope.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.dataset.count;
    if (still()) return;
    const start = performance.now(), dur = 1400;
    const step = now => {
      const t = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  });
}

/* ---------- 3D tilt + glare on project cards ---------- */
function tiltCards() {
  if (still() || !finePointer.matches) return;
  app.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const strength = card.classList.contains("featured") ? 4 : 7;
      card.classList.add("tilting");
      card.style.setProperty("--ry", `${(x - .5) * strength}deg`);
      card.style.setProperty("--rx", `${(.5 - y) * strength}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.classList.remove("tilting");
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    });
  });
}

/* ---------- "I build …" typing loop ---------- */
function typeRoles() {
  const el = document.getElementById("typed");
  const words = DATA.typed;
  if (still()) { el.textContent = words[0]; return; }
  let w = 0, c = 0, deleting = false, timer;
  const tick = () => {
    const word = words[w];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 28 : 55;
    if (!deleting && c === word.length) { deleting = true; delay = 1900; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
    timer = setTimeout(tick, delay);
  };
  timer = setTimeout(tick, 900);
  cleanups.push(() => clearTimeout(timer));
}

/* ---------- Interactive particle network behind the hero ---------- */
function particleNetwork() {
  const canvas = document.getElementById("particles");
  if (still()) return;
  const ctx = canvas.getContext("2d");
  const mouse = { x: -9999, y: -9999 };
  let pts = [], w = 0, h = 0, raf = 0, visible = true, color = "109,93,252";

  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(80, Math.round(w * h / 16000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .8
    }));
  };
  const readColor = () => {
    const hex = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim().replace("#", "");
    if (hex.length === 6) color = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16)).join(",");
  };

  const frame = () => {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      // gentle pull toward the cursor
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
      if (d < 180) { p.vx += dx / d * .012; p.vy += dy / d * .012; }
      p.vx *= .99; p.vy *= .99;
      if (Math.hypot(p.vx, p.vy) < .15) { p.vx += (Math.random() - .5) * .05; p.vy += (Math.random() - .5) * .05; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = `rgba(${color},.7)`; ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(${color},${(1 - d / 130) * .35})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const a = pts[i], dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 180) {
        ctx.strokeStyle = `rgba(${color},${(1 - dm / 180) * .6})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  };

  const hero = app.querySelector(".hero");
  const onMove = e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
  const onLeave = () => { mouse.x = mouse.y = -9999; };
  hero.addEventListener("pointermove", onMove);
  hero.addEventListener("pointerleave", onLeave);

  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(hero);
  const mo = new MutationObserver(readColor); mo.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  readColor(); resize(); frame();
  cleanups.push(() => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); mo.disconnect(); });
}

/* ---------- Site-wide: scroll progress bar + copy email ---------- */
function initGlobalEffects() {
  const bar = document.getElementById("progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(scrollY / max, 1) : 0);
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  app.addEventListener("click", async e => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    try { await navigator.clipboard.writeText(btn.dataset.copy); toast("Email copied ✓"); }
    catch { toast(btn.dataset.copy); }
  });
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2000);
}
