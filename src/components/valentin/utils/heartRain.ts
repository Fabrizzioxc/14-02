export function createHeartRain(amount = 50) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.textContent = "💙"; // corazones celestes

    const size = Math.random() * 18 + 10; // 10 - 28px
    const left = Math.random() * 100;     // vw
    const dur = Math.random() * 3 + 2;    // 2 - 5s
    const delay = Math.random() * 0.5;    // 0 - 0.5s

    heart.style.left = `${left}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${dur}s`;
    heart.style.animationDelay = `${delay}s`;

    document.body.appendChild(heart);

    // limpiar DOM
    setTimeout(() => heart.remove(), 6500);
  }
}
