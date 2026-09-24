/* ============================================================
   THEME — light/dark mode toggle that remembers the visitor's choice.
   The site opens in light mode unless the visitor picked dark before.
   Loaded in <head> (not deferred) so the saved theme is applied
   before the page paints, avoiding a flash of the wrong colors.
   ============================================================ */

(() => {
  const root = document.documentElement;
  root.classList.add("js");   // lets CSS hide scroll-reveal elements only when JS can reveal them
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("themeBtn").addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  });
})();
