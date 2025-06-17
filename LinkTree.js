document.addEventListener('DOMContentLoaded', () => {
    // Sistema de partículas
    const particulasContainer = document.querySelector('.particulas');
    
    document.addEventListener('click', (e) => {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.left = e.clientX + 'px';
        particula.style.top = e.clientY + 'px';
        particulasContainer.appendChild(particula);
        
        setTimeout(() => particula.remove(), 1000);
    });


    // Animação de entrada com GSAP
    gsap.from(".container", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
    });

    gsap.from(".profile-img", {
        duration: 1,
        scale: 0,
        rotation: 360,
        ease: "back.out(1.7)"
    });

    gsap.from(".link", {
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
    });
});