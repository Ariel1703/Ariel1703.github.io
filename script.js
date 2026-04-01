function abrirCarta() {
    document.querySelector('.card').classList.toggle('open');
}

// Lista de 4 emojis
const emojis = ["👻", "🍺", "🐭", "🖕"];

// Crear corazones animados
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Elegir emoji aleatorio
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);