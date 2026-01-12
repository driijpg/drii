onload = () => {
  document.body.classList.remove("container");
};

const rickCount = 20; // Quantos nomes vão aparecer
for (let i = 0; i < rickCount; i++) {
  const rick = document.createElement('div');
  rick.className = 'rick';

  const nomes = ['Rick', 'drii']; // nomes que vão aparecer
  const nomeEscolhido = nomes[Math.floor(Math.random() * nomes.length)];
  rick.innerText = nomeEscolhido;

  // Define a cor e o brilho
  if (nomeEscolhido === 'drii') {
    rick.style.color = '#ff4de1'; // rosa chiclete
    rick.style.textShadow = "0 0 5px #ff4de1, 0 0 10px #ff80ff, 0 0 15px #ffb3ff";
  } else {
    rick.style.color = '#fff700'; // amarelo
    rick.style.textShadow = "0 0 4px #fff700, 0 0 8px #fff700";
  }

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
