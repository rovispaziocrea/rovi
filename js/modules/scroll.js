class ScrollManager {
    constructor() {
        this.scrollLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.handleSmoothScroll();
    }

    handleSmoothScroll() {
        this.scrollLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize
new ScrollManager();