/* ============================================================
   LIGHTBOX — enlarges a project screenshot when it's clicked.
   Arrow keys / buttons switch screenshots, Esc or backdrop closes.
   ============================================================ */

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
let lbIndex = 0;

const shots = () => (projectFromHash()?.gallery) || [];

function showShot(n) {
  const list = shots();
  lbIndex = (n + list.length) % list.length;
  lbImg.src = list[lbIndex].src;
  lbImg.alt = list[lbIndex].caption || "";
  lbCap.textContent = list[lbIndex].caption || "";
  lb.querySelectorAll(".lb-prev, .lb-next").forEach(b => b.hidden = list.length < 2);
}

function initLightbox() {
  app.addEventListener("click", e => {
    const shot = e.target.closest("[data-shot]");
    if (shot) { showShot(+shot.dataset.shot); lb.showModal(); }
  });

  lb.addEventListener("click", e => {
    const action = e.target.closest("[data-lb]")?.dataset.lb;
    if (action === "prev") showShot(lbIndex - 1);
    else if (action === "next") showShot(lbIndex + 1);
    else if (action === "close" || e.target === lb) lb.close();
  });

  document.addEventListener("keydown", e => {
    if (!lb.open) return;
    if (e.key === "ArrowLeft") showShot(lbIndex - 1);
    if (e.key === "ArrowRight") showShot(lbIndex + 1);
  });
}
