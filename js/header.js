document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.header-background video');
    const header = document.querySelector('.header');
    
    // Check if video element exists and has play method
    if (!video || typeof video.play !== 'function') {
        console.log('Video element not found or not a video element');
        return;
    }
    
    // Funzione per far ripartire il video dall'inizio
    function restartVideo() {
        if (video && typeof video.play === 'function') {
            video.currentTime = 0;
            video.play().catch(function(error) {
                console.log("Video restart failed:", error);
            });
        }
    }

    // Effetto parallax
    function parallaxEffect() {
        if(window.innerWidth > 768 && video) {
            const scrollPosition = window.scrollY;
            video.style.transform = `translateZ(-1px) scale(2) translateY(${scrollPosition * 0.5}px)`;
        }
    }

    // Riavvia il video quando finisce
    if (video) {
        video.addEventListener('ended', restartVideo);
    }

    // Aggiungi listener per l'effetto parallax
    window.addEventListener('scroll', parallaxEffect);
    
    // Assicurati che il video parta
    if (video && typeof video.play === 'function') {
        video.play().catch(function(error) {
            console.log("Video autoplay fallito:", error);
        });
    }
});