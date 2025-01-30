document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.header-background');
    
    video.addEventListener('loadeddata', function() {
        console.log('Video caricato con successo');
    });

    video.addEventListener('error', function(e) {
        console.error('Errore nel caricamento del video:', e);
    });

    // Force video reload
    video.load();
});