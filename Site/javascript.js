// Efeito de Aurora que segue o mouse
document.addEventListener('mousemove', (e) => {
    const aurora = document.getElementById('aurora');
    aurora.style.setProperty('--x', e.clientX + 'px');
    aurora.style.setProperty('--y', e.clientY + 'px');
});

// Inicialização da biblioteca AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Duração da animação
    once: true,    // Animação acontece apenas uma vez
    offset: 50,    // "Gatilho" da animação um pouco antes do elemento aparecer
});

// Scroll suave (mantido do seu código original)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão apenas para links internos
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- LÓGICA PARA FAQ INTERATIVO (ACORDEÃO) ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Se o item clicado não estava aberto, abre ele
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});