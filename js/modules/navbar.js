class NavbarManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.navLogo = document.querySelector('.nav-logo');
        this.init();
    }

    init() {
        this.handleMobileMenu();
        this.handleScroll();
        this.handleLinks();
        this.handleLogoClick();
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

    handleLogoClick() {
        this.navLogo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize
new NavbarManager();