const slider = document.getElementById('slider');
const testimonials = Array.from(slider.children);
let autoScrollInterval;

// Duplica os itens para criar a rolagem infinita
testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    slider.appendChild(clone);
});

testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    slider.appendChild(clone);
});

function scrollTestimonials(direction) {
    const scrollAmount = slider.offsetWidth * 0.8;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
    });
}

testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    slider.appendChild(clone);
});

testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    slider.appendChild(clone);
});

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const maxScrollLeft = slider.scrollWidth / 2; // Metade do conteúdo duplicado
        if (slider.scrollLeft >= maxScrollLeft) {
            slider.scrollLeft = 0; // Reinicia no início
        }
        slider.scrollBy({ left: slider.offsetWidth * 0.8, behavior: 'smooth' });
    }, 3000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

slider.addEventListener('mouseover', stopAutoScroll);
slider.addEventListener('mouseout', startAutoScroll);

// Inicia o carrossel automático
startAutoScroll();