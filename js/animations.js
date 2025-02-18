// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.speed = 1.5;
        this.intensity = 1;

        this.initialize();
        window.addEventListener('resize', () => this.initialize());

        // Increase intensity over time
        setInterval(() => {
            this.intensity = Math.min(this.intensity + 0.1, 2);
            this.speed = Math.min(this.speed + 0.1, 3);
        }, 10000);
    }

    initialize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];

        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }

        this.draw();
    }

    draw() {
        this.ctx.fillStyle = `rgba(0, 0, 0, ${0.1 / this.intensity})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#0F0';
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));

            // Random color variations
            const green = Math.floor(Math.random() * 155 + 100);
            this.ctx.fillStyle = `rgb(0, ${green}, 0)`;

            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            this.drops[i] += this.speed;
        }

        requestAnimationFrame(() => this.draw());
    }
}

// Initialize Matrix Rain
const matrixRain = new MatrixRain();

// Enhanced Glitch Text Effect
function createGlitchText(element) {
    const text = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let intensity = 1;

    setInterval(() => {
        if (Math.random() < 0.1 * intensity) {
            const glitchedText = text.split('').map(char => {
                return Math.random() < 0.2 * intensity ? 
                    glitchChars[Math.floor(Math.random() * glitchChars.length)] : 
                    char;
            }).join('');

            element.textContent = glitchedText;
            element.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #ff0000,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px #0000ff
            `;

            setTimeout(() => {
                element.textContent = text;
                element.style.textShadow = '';
            }, 100 * intensity);

            // Randomly increase intensity
            if (Math.random() < 0.1) {
                intensity = Math.min(intensity + 0.2, 3);
            }
        }
    }, 2000);
}

// Apply enhanced glitch effect to headings and terminal
document.querySelectorAll('h1, h2, h3, .terminal').forEach(element => {
    createGlitchText(element);
});

// Warning Flash Effect
function createWarningFlash() {
    const flash = document.createElement('div');
    flash.className = 'warning-flash';
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 200);
}

// Random warning flashes
setInterval(() => {
    if (Math.random() < 0.05) {
        createWarningFlash();
    }
}, 5000);

// Smooth scroll with glitch effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Add temporary glitch effect during scroll
        document.body.classList.add('glitch-scroll');

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        setTimeout(() => {
            document.body.classList.remove('glitch-scroll');
        }, 1000);
    });
});

// Enhance cursor movement with trail effect
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = Array.from({ length: 5 }, () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    return trail;
});

let cursorPos = { x: 0, y: 0 };
let trailPositions = Array(5).fill({ x: 0, y: 0 });

document.addEventListener('mousemove', (e) => {
    cursorPos = { x: e.clientX, y: e.clientY };
});

function updateCursorTrail() {
    cursor.style.left = `${cursorPos.x}px`;
    cursor.style.top = `${cursorPos.y}px`;

    trailPositions = trailPositions.map((pos, i) => {
        const targetPos = i === 0 ? cursorPos : trailPositions[i - 1];
        return {
            x: pos.x + (targetPos.x - pos.x) * 0.3,
            y: pos.y + (targetPos.y - pos.y) * 0.3
        };
    });

    cursorTrail.forEach((trail, i) => {
        const pos = trailPositions[i];
        trail.style.left = `${pos.x}px`;
        trail.style.top = `${pos.y}px`;
        trail.style.opacity = 1 - (i / cursorTrail.length);
    });

    requestAnimationFrame(updateCursorTrail);
}

updateCursorTrail();
