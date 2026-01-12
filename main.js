onload = () => {
  document.body.classList.remove("container");
};

const rickCount = 20; // Quantos nomes vão aparecer
for (let i = 0; i < rickCount; i++) {
  const rick = document.createElement('div');
  rick.className = 'rick';

  // Escolha 50/50 entre Rick e drii
  const nomeEscolhido = Math.random() < 0.5 ? 'Rick' : 'drii';
  rick.innerText = nomeEscolhido;

  // Define cor e brilho
  if (nomeEscolhido === 'drii') {
    rick.style.color = '#ff69b4'; // rosa chiclete
    rick.style.textShadow = "0 0 5px #ff69b4, 0 0 10px #ff85c1, 0 0 15px #ffb3d9";
  } else {
    rick.style.color = '#fff700'; // amarelo
    rick.style.textShadow = "0 0 4px #fff700, 0 0 8px #fff700";
  }

  // Posição e animação
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
