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
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.6);
                    width: 100px;
                    height: 100px;
                    margin-left: -50px;
                    margin-top: -50px;
                    animation: ripple 0.6s;
                    pointer-events: none;
                `;
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
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