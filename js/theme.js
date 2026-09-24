/* ============================================================
   THEME — light/dark mode toggle that remembers the visitor's choice.
   Loaded in <head> (not deferred) so the saved theme is applied
   before the page paints, avoiding a flash of the wrong colors.
   ============================================================ */

(() => {
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("themeBtn").addEventListener("click", () => {
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  });
})();
