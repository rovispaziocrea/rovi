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