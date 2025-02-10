document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const delay = Array.from(card.parentElement.children).indexOf(card) * 100;
                setTimeout(() => {
                    card.classList.add('animate');
                }, delay);
                observer.unobserve(card);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.research-card').forEach(card => {
        observer.observe(card);
    });
});

function initializeCarousel() {
    const carousels = document.querySelectorAll('.spaces-carousel .carousel');
    
    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prev = carousel.querySelector('.carousel-prev');
        const next = carousel.querySelector('.carousel-next');
        let currentIndex = 0;

        function showSlide(index) {
            inner.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            
            // Update thumbnails
            document.querySelectorAll('.carousel-thumb').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }

        prev?.addEventListener('click', () => {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            showSlide(newIndex);
        });

        next?.addEventListener('click', () => {
            const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            showSlide(newIndex);
        });

        // Thumbnail clicks
        document.querySelectorAll('.carousel-thumb').forEach((thumb, index) => {
            thumb.addEventListener('click', () => showSlide(index));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
});