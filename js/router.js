/* ============================================================
   ROUTER — switches between the home page and project pages.
   Project pages live at  #/projects/<slug>  so each one has its
   own shareable link and the browser's Back button works.
   ============================================================ */

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
let current = null;        // "home" or a project slug
let homeScroll = 0;        // where to return to on the home page
let cameFromHome = false;  // lets "All projects" behave like the browser's Back button

function projectFromHash() {
  const m = location.hash.match(/^#\/projects\/([\w-]+)/);
  return m ? DATA.projects.find(p => p.slug === m[1]) : null;
}

function route() {
  const project = projectFromHash();
  const next = project ? project.slug : "home";
  if (next === current) return;   // same page: the browser handles #section jumps
  const prev = current;
  const returning = next === "home" && cameFromHome;   // coming back from a project we opened from home
  if (prev === "home") { homeScroll = scrollY; cameFromHome = true; }
  if (next === "home") cameFromHome = false;

  const update = () => {
    current = next;
    project ? renderProject(project) : renderHome();
    const target = !project && !returning && location.hash.length > 1 && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" });
    else scrollTo({ top: project ? 0 : homeScroll, behavior: "instant" });
  };

  if (!prev || reduceMotion.matches) return update();
  if (document.startViewTransition) document.startViewTransition(update);
  else { update(); app.classList.remove("page-enter"); void app.offsetWidth; app.classList.add("page-enter"); }
}

function initRouter() {
  window.addEventListener("hashchange", route);

  // "All projects" goes back in history when we came from home, so scroll position is kept
  app.addEventListener("click", e => {
    if (e.target.closest("[data-back]") && cameFromHome) { e.preventDefault(); history.back(); }
  });

  route();
}
