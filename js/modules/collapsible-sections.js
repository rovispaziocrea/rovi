document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    
    function scrollToCard(card) {
        const cardRect = card.getBoundingClientRect();
        const absoluteCardTop = cardRect.top + window.pageYOffset;
        const scrollTarget = absoluteCardTop - navHeight - 20; // 20px di margine extra
        
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    }
    
    function toggleCard(card, shouldScroll = true) {
        const isMinimized = card.classList.contains('minimized');
        
        // Prima minimizza tutte le altre cards
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add('minimized');
            }
        });
        
        // Poi gestisci questa card
        if (isMinimized) {
            card.classList.remove('minimized');
            if (shouldScroll) {
                // Piccolo delay per assicurarsi che la card sia espansa
                setTimeout(() => scrollToCard(card), 50);
            }
        } else {
            card.classList.add('minimized');
        }
    }

    // Event listeners per le cards
    cards.forEach(card => {
        const toggleBtn = card.querySelector('.toggle-btn');
        
        // Click sulla card
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.toggle-btn')) {
                toggleCard(card);
            }
        });
        
        // Click sul bottone toggle
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCard(card);
            });
        }
    });

    // Gestione click sui link della navbar
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            let targetCard;

            switch(href) {
                case '#about':
                    targetCard = document.querySelector('.card:nth-child(1)');
                    break;
                case '#research':
                    targetCard = document.querySelector('.card:nth-child(2)');
                    break;
                case '#services':
                    targetCard = document.querySelector('.card:nth-child(3)');
                    break;
                case '#spaces':
                    targetCard = document.querySelector('.card:nth-child(4)');
                    break;
                case '#events':
                    targetCard = document.querySelector('.card:nth-child(5)');
                    break;
            }

            if (targetCard) {
                toggleCard(targetCard, true);
            }
        });
    });

    // Apri la prima card all'avvio
    const firstCard = document.querySelector('.card');
    if (firstCard) {
        toggleCard(firstCard, false);
    }
});