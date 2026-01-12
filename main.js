onload = () => {
  document.body.classList.remove("container");
}; const rickCount = 20; // Quantos "Rick" vão aparecer
for (let i = 0; i < rickCount; i++) {
  const rick = document.createElement('div');
  rick.className = 'rick';
  rick.innerText = 'Rick & drii';
  rick.style.left = Math.random() * 100 + 'vw';
  rick.style.animationDelay = (Math.random() * 6) + 's';
  rick.style.fontSize = (Math.random() * 1.5 + 1) + 'vmin';
  document.body.appendChild(rick);
}
// ================= Estrelas =================
const starCount = 100; // Quantas estrelas
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.width = star.style.height = (Math.random() * 2 + 1) + 'px'; // tamanho aleatório
  star.style.animationDelay = (Math.random() * 5) + 's';
  document.body.appendChild(star);
}
// === Tela cheia + cursor escondido e ESC para sair ===
document.addEventListener("DOMContentLoaded", () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  document.body.style.cursor = 'none';
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    document.body.style.cursor = 'default';
  }
});
