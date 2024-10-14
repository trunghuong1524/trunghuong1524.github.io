// Confetti Animation using Canvas
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confetti = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Confetti class
class ConfettiPiece {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 7 + 5;
        this.weight = Math.random() * 0.5 + 0.5;
        this.angle = Math.random() * 360;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    }

    update() {
        this.y += this.weight;
        this.angle += Math.random() * 2;
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Initialize confetti
function initConfetti() {
    for (let i = 0; i < 300; i++) {
        confetti.push(new ConfettiPiece());
    }
}

// Animate confetti
function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

initConfetti();
animateConfetti();

// Send Email Function
document.getElementById('sendEmailBtn').addEventListener('click', () => {
    window.location.href = 'mailto:emailcuabạn@example.com?subject=Xin lỗi&body=Anh muốn xin lỗi em vì...';
});
