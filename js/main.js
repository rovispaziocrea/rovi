import { BlurGradientBg } from "./BlurGradientBg.module.js";

// Initialize background
const bg = new BlurGradientBg({
    dom: "bg-container",
    colors: ['#101e19', '#2e3a36', '#4c5754', '#ffffff'],
    loop: true
});

// Load all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load modules
    loadModules();
});

async function loadModules() {
    try {
        // Load section content
        await Promise.all([
            loadScript('js/modules/navbar.js'),
            loadScript('js/modules/animations.js'),
            loadScript('js/modules/scroll.js'),
            loadScript('js/modules/about-loader.js'),
            loadScript('js/modules/services-loader.js'),
            loadScript('js/modules/spaces-loader.js'),
            loadScript('js/modules/events-loader.js'),
            loadScript('js/modules/contact-loader.js'),
            loadScript('js/modules/footer-loader.js')
        ]);

        console.log('All modules loaded successfully');
    } catch (error) {
        console.error('Error loading modules:', error);
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
    });
}