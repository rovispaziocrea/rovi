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
            initializeSection(sectionFile);
        }
    } catch (error) {
        console.error(`Error loading section ${sectionFile}:`, error);
    }
}

function initializeSection(sectionFile) {
    switch (sectionFile) {
        case 'contact.html':
            setupContactForm();
            break;
        case 'footer.html':
            setupNewsletterForm();
            break;
    }
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