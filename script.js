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
