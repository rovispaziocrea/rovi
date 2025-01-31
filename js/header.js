document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.header-background');
    const header = document.querySelector('.header');
    
    // Funzione per far ripartire il video dall'inizio
    function restartVideo() {
        video.currentTime = 0;
        video.play();
    }

    // Effetto parallax
    function parallaxEffect() {
    const scrollPosition = window.scrollY;
    video.style.transform = `translateZ(-1px) scale(2) translateY(${scrollPosition * 0.5}px)`;
    }

    // Riavvia il video quando finisce
    video.addEventListener('ended', restartVideo);

    // Aggiungi listener per l'effetto parallax
    window.addEventListener('scroll', parallaxEffect);
    
    // Assicurati che il video parta
    video.play().catch(function(error) {
        console.log("Video autoplay fallito:", error);
    });
});