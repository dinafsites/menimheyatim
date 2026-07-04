const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ❤️ Heart Text
const message = "Səni çox sevirəm Dinara ❤️";
const particles = [];

// ❤️ Heart Shape Formula
function heartPoint(t) {
    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y:
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t)
    };
}

class Particle {

    constructor(x, y) {
        this.baseX = x;
        this.baseY = y;

        this.x = x + (Math.random() - 0.5) * 200;
        this.y = y + (Math.random() - 0.5) * 200;

        this.size = 15 + Math.random() * 8;
    }

    update() {

        this.x += (this.baseX - this.x) * 0.06;
        this.y += (this.baseY - this.y) * 0.06;

    }

    draw() {

        ctx.save();

        ctx.font = `${this.size}px Arial`;

        ctx.fillStyle = "#ff4da6";

        ctx.shadowColor = "#ff1493";
        ctx.shadowBlur = 25;

        ctx.fillText(message, this.x, this.y);

        ctx.restore();

    }

}

// Build Heart
for (let i = 0; i < 700; i++) {

    const t = Math.random() * Math.PI * 2;

    const p = heartPoint(t);

    particles.push(
        new Particle(
            canvas.width / 2 + p.x * 28,
            canvas.height / 2 - p.y * 28
        )
    );

}

// Animate Heart
function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);

}

animate();


// ⭐ STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        1 + Math.random() * 4 + "s";

    stars.appendChild(star);

}


// 🪷🏺 FALLING LILIES

const lilies = document.getElementById("lilies");

function createLily() {

    const lily = document.createElement("div");

    lily.className = "lily";

    lily.innerHTML = "🪷🏺";

    lily.style.left = Math.random() * 100 + "%";

    lily.style.animationDuration =
        6 + Math.random() * 6 + "s";

    lily.style.fontSize =
        28 + Math.random() * 20 + "px";

    lilies.appendChild(lily);

    setTimeout(() => {
        lily.remove();
    }, 12000);

}

setInterval(createLily, 250);


// 🎵 MUSIC

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {

    music.play();

    playBtn.style.display = "none";

};
