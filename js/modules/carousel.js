class Carousel {
    constructor(element) {
        if (!element) return;
        
        this.carousel = element;
        this.slides = Array.from(element.parentElement.querySelectorAll('.carousel-item'));
        this.thumbs = Array.from(element.parentElement.querySelectorAll('.carousel-thumb'));
        this.prevBtn = element.querySelector('.carousel-prev');
        this.nextBtn = element.querySelector('.carousel-next');
        
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        console.log('Initializing carousel with:', {
            slides: this.slides.length,
            thumbs: this.thumbs.length,
            prevBtn: !!this.prevBtn,
            nextBtn: !!this.nextBtn
        });

        // Navigation buttons
        this.prevBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.prev();
        });

        this.nextBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            this.next();
        });
        
        // Thumbnails
        this.thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                console.log('Thumbnail clicked:', index);
                this.goToSlide(index);
            });
        });
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.isAnimating = true;
        
        // Update slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[index].classList.add('active');
        
        // Update thumbnails
        this.thumbs.forEach(thumb => thumb.classList.remove('active'));
        this.thumbs[index].classList.add('active');
        
        this.currentIndex = index;
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
});