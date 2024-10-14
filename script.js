// Snowfall Effect using Canvas
const snowfall = document.getElementById('snowfall');
const ctx = snowfall.getContext('2d');
let flakes = [];
const flakeCount = 100;

// Set canvas size
function setSize() {
    snowfall.width = window.innerWidth;
    snowfall.height = window.innerHeight;
}
setSize();
window.addEventListener('resize', setSize);

// Flake class
class Flake {
    constructor() {
        this.x = Math.random() * snowfall.width;
        this.y = Math.random() * snowfall.height;
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.y += this.speed;
        if (this.y > snowfall.height) {
            this.y = -this.size;
            this.x = Math.random() * snowfall.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize flakes
for (let i = 0; i < flakeCount; i++) {
    flakes.push(new Flake());
}

// Animate flakes
function animate() {
    ctx.clearRect(0, 0, snowfall.width, snowfall.height);
    flakes.forEach(flake => {
        flake.update();
        flake.draw();
    });
    requestAnimationFrame(animate);
}
animate();

// Send Email Function
document.getElementById('sendEmailBtn').addEventListener('click', () => {
    window.location.href = 'mailto:emailcuaban@example.com?subject=Xin lỗi&body=Anh muốn xin lỗi em vì...';
});
