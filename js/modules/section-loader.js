window.loadSection = async function(containerId, sectionFile) {
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
};

window.initializeSection = function(sectionFile) {
    switch (sectionFile) {
        case 'contact.html':
            setupContactForm();
            break;
        case 'footer.html':
            setupNewsletterForm();
            break;
    }
};

window.setupContactForm = function() {
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
};

window.setupNewsletterForm = function() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle newsletter signup
            console.log('Newsletter form submitted');
            // Add actual newsletter signup logic here
        });
    }
};