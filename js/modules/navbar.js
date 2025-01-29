class NavbarManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        this.handleMobileMenu();
        this.handleScroll();
        this.handleLinks();
    }

    handleMobileMenu() {
        this.menuToggle.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
            this.menuToggle.classList.toggle('active');
        });
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }

    handleLinks() {
        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.navLinks.classList.remove('active');
                this.menuToggle.classList.remove('active');
            });
        });
    }
}

// Initialize
new NavbarManager();