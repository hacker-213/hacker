document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor movement
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden').forEach((element) => {
        observer.observe(element);
    });

    // Easter egg handler
    let konami = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konami.push(e.key);
        if (konami.length > konamiCode.length) {
            konami.shift();
        }
        if (JSON.stringify(konami) === JSON.stringify(konamiCode)) {
            revealContact();
        }
    });

    function revealContact() {
        const contact = document.getElementById('contact-section');
        contact.classList.remove('hidden');
        contact.innerHTML = `
            <div class="terminal">
                <div class="terminal-content">
                    <p class="typing-animation">Contact: hacker@matrix.net</p>
                </div>
            </div>
        `;
    }

    // Skill card interaction
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const skill = e.target.dataset.skill;
            createGlitchEffect(e.target);
        });
    });

    function createGlitchEffect(element) {
        element.style.animation = 'glitch 0.3s infinite';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
});