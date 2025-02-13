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
                    const scrollToSection = () => {
                        const targetRect = target.getBoundingClientRect();
                        const navHeight = document.querySelector('.navbar').offsetHeight;
                        const sectionHeader = target.querySelector('.section-header');
                        const headerHeight = sectionHeader ? sectionHeader.offsetHeight : 0;
                        
                        window.scrollTo({
                            top: window.pageYOffset + targetRect.top - navHeight - 20,
                            behavior: 'smooth'
                        });
                    };

                    // Aspetta il rendering delle animazioni
                    if(target.querySelector('.animate')) {
                        setTimeout(scrollToSection, 300);
                    } else {
                        scrollToSection();
                    }
                }
            });
        });
    }

    // Chiama la funzione all'avvio
    initSmoothScrolling();

    // Ricarica gli eventi dopo eventuali modifiche DOM
    document.addEventListener('DOMNodeInserted', initSmoothScrolling);

    // Aggiungi questo codice dopo la riga 61
    document.querySelector('.nav-logo').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Aggiungi dopo la funzione initSmoothScrolling
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if(window.innerWidth <= 768) {
            if(window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    window.addEventListener('resize', handleNavbarScroll);
});