// Load all sections when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadAllSections();
});

async function loadSection(containerId, sectionFile) {
    try {
        const response = await fetch(`sections/${sectionFile}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
            initializeSection(sectionFile, containerId);
        }
    } catch (error) {
        console.error(`Error loading section ${sectionFile}:`, error);
    }
}

async function initializeSection(sectionId, html) {
    const container = document.getElementById(sectionId);
    if (container) {
        container.innerHTML = html;
        const collapsibles = container.querySelectorAll('.collapsible');
        collapsibles.forEach(makeCollapsible);
        
        if (sectionId === 'spaces') {
            initializeCarousel();
        }
    }
}

function initializeSection(sectionFile, containerId) {
    switch (sectionFile) {
        case 'contact.html':
            setupContactForm();
            break;
        case 'footer.html':
            setupNewsletterForm();
            break;
        case 'spaces.html':
            initializeCarousel();
            break;
    }

    // Make section collapsible if needed
    if (containerId && [
        'about-project-container',
        'about-research-container',
        'services-container',
        'spaces-container',
        'events-container'
    ].includes(containerId)) {
        const container = document.getElementById(containerId);
        if (container) {
            makeCollapsible(container);
        }
    }
}

function initializeCarousel() {
    console.log('Initializing carousel after spaces section loaded');
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const mailtoLink = `mailto:info@rovispazio.it?subject=Interesse nel Progetto ROVI - ${name}&body=Nome: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessaggio:%0D%0A${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
        });
    }
}

function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle newsletter signup
            console.log('Newsletter form submitted');
        });
    }
}

async function loadAllSections() {
    try {
        await Promise.all([
            loadSection('about-project-container', 'about-project.html'),
            loadSection('about-research-container', 'about-research.html'),
            loadSection('services-container', 'services.html'),
            loadSection('spaces-container', 'spaces.html'),
            loadSection('events-container', 'events.html'),
            loadSection('contact-container', 'contact.html'),
            loadSection('footer-container', 'footer.html')
        ]);
        console.log('All sections loaded successfully');
    } catch (error) {
        console.error('Error loading sections:', error);
    }
}