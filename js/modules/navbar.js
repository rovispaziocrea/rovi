document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    let isMenuOpen = false;

    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        navLinks.classList.toggle('show');
        menuToggle.innerHTML = isMenuOpen ? '✕' : '☰';
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuToggle.innerHTML = '☰';
            isMenuOpen = false;
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navbar.contains(e.target)) {
            navLinks.classList.remove('show');
            menuToggle.innerHTML = '☰';
            isMenuOpen = false;
            document.body.style.overflow = '';
        }
    });

    // Prevent clicks inside menu from closing it
    navLinks.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Handle scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Handle resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            navLinks.classList.remove('show');
            menuToggle.innerHTML = '☰';
            isMenuOpen = false;
            document.body.style.overflow = '';
        }
    });

    // Aggiorna la funzione di smooth scrolling
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if(href === "#") return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if(target) {
                    // Scroll alla sezione
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Apri la scheda se è un accordion
                    if(target.classList.contains('collapsed')) {
                        const toggleBtn = target.querySelector('[data-bs-toggle="collapse"]');
                        if(toggleBtn) toggleBtn.click();
                    }
                }
            });
        });
    }

    // Chiama la funzione all'avvio
    initSmoothScrolling();

    // Ricarica gli eventi dopo eventuali modifiche DOM
    document.addEventListener('DOMNodeInserted', initSmoothScrolling);
});