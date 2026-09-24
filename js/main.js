/* ============================================================
   MAIN — starts the site once every other script has loaded.
   ============================================================ */

document.getElementById("footer").textContent =
  `© ${new Date().getFullYear()} ${DATA.name}. Built with HTML, CSS & JS · Hosted on GitHub Pages.`;

initLightbox();
initRouter();
