const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const message = "Səni çox sevirəm Dinara ❤️";

const particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.baseX = x;
        this.baseY = y;

        this.size = 14 + Math.random() * 6;

        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;

        this.alpha = 0.5 + Math.random() * 0.5;
    }

    update() {
        this.x += (this.baseX - this.x) * 0.08;
        this.y += (this.baseY - this.y) * 0.08;

        this.x += this.vx * 0.02;
        this.y += this.vy * 0.02;
    }

    draw() {
        ctx.save();

        ctx.globalAlpha = this.alpha;

        ctx.font = `${this.size}px Arial`;

        ctx.fillStyle = "#ff4da6";

        ctx.shadowColor = "#ff1493";
        ctx.shadowBlur = 20;

        ctx.fillText(message, this.x, this.y);

        ctx.restore();
    }
}

function heartPoint(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    return { x, y };
}

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

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();
