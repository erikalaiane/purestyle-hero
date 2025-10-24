// Animação de entrada
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.main-hero, .hero-image, .card');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Interatividade dos botões
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Efeito ripple
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Log do botão clicado
        console.log('Botão clicado:', btn.textContent);
    });
});

// Adiciona animação de ripple no CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax suave no scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});