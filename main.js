onload = () => {
  document.body.classList.remove("container");
}; const rickCount = 20; // Quantos "Rick" vão aparecer
for (let i = 0; i < rickCount; i++) {
  const rick = document.createElement('div');
  rick.className = 'rick';
  rick.innerText = 'Rick';
  rick.style.left = Math.random() * 100 + 'vw';
  rick.style.animationDelay = (Math.random() * 6) + 's';
  rick.style.fontSize = (Math.random() * 1.5 + 1) + 'vmin';
  document.body.appendChild(rick);
}
