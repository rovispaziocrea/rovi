class AnimationManager {
    constructor() {
        this.animatedElements = document.querySelectorAll('.animate');
        this.init();
    }

    init() {
        this.setupObserver();
        this.handleInitialAnimations();
    }

    setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    handleInitialAnimations() {
        document.querySelectorAll('.animate-on-load').forEach(element => {
            element.classList.add('animated');
        });
    }
}

// Initialize
new AnimationManager();