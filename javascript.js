// Animação de fade-in nos elementos conforme o usuário rola a página
const fadeElements = document.querySelectorAll('.about, .services, .testimonials, .contact-form');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(element => {
    observer.observe(element);
});

// Scroll suave ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
