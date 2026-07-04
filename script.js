// ===============================
// Səni Çox Sevirəm Dinara ❤️
// Part 1
// ===============================

const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const TEXT = "Səni çox sevirəm Dinara ❤️";

class TextParticle {
    constructor(x, y) {
        this.baseX = x;
        this.baseY = y;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = 10 + Math.random() * 6;
        this.speed = 0.04 + Math.random() * 0.02;
    }

    update() {
        this.x += (this.baseX - this.x) * this.speed;
        this.y += (this.baseY - this.y) * this.speed;
    }

    draw() {
        ctx.save();

        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = "#ff4da6";

        ctx.shadowColor = "#ff1493";
        ctx.shadowBlur = 15;

        ctx.fillText(TEXT, this.x, this.y);

        ctx.restore();
    }
}

const particles = [];

function heartPoint(t) {
    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y:
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)
    };
}

for (let i = 0; i < 180; i++) {

    const t = Math.random() * Math.PI * 2;

    const p = heartPoint(t);

    particles.push(
        new TextParticle(
            canvas.width / 2 + p.x * 16,
            canvas.height / 2 - p.y * 16
        )
    );
}
const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

// ⭐ Stars
const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDuration = (2 + Math.random() * 3) + "s";
    stars.appendChild(s);
}

// 🏺🪷 Falling flowers
const flowers = document.getElementById("flowers");

function createFlower() {

    const f = document.createElement("div");

    f.className = "flower";

    f.innerHTML = "🏺🪷";

    f.style.left = Math.random() * 100 + "%";

    f.style.fontSize = (22 + Math.random() * 16) + "px";

    f.style.animationDuration = (8 + Math.random() * 6) + "s";

    flowers.appendChild(f);

    setTimeout(() => {
        f.remove();
    }, 14000);
}

setInterval(createFlower, 700);

// ❤️ Heart
let beat = 1;

function drawHeart(scale){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();

    for(let t=0;t<Math.PI*2;t+=0.02){

        const x = 16*Math.pow(Math.sin(t),3);

        const y = 13*Math.cos(t)
                -5*Math.cos(2*t)
                -2*Math.cos(3*t)
                -Math.cos(4*t);

        const px = canvas.width/2 + x*13*scale;
        const py = canvas.height/2 - y*13*scale;

        if(t===0){
            ctx.moveTo(px,py);
        }else{
            ctx.lineTo(px,py);
        }
    }

    ctx.closePath();

    ctx.shadowBlur = 35;
    ctx.shadowColor = "#ff1493";

    ctx.strokeStyle = "#ff5ba7";
    ctx.lineWidth = 5;
    ctx.stroke();
}

function animate(){

    beat += 0.05;

    const scale = 1 + Math.sin(beat) * 0.05;

    drawHeart(scale);

    requestAnimationFrame(animate);
}

animate();

// 🎵 Music
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {
    music.play();
    playBtn.style.display = "none";
};
