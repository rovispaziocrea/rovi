class FooterLoader {
    constructor() {
        this.container = document.getElementById('footer-container');
        this.init();
    }

    init() {
        this.loadContent();
    }

    loadContent() {
        const content = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <img src="assets/logo/logo.svg" alt="ROVI" class="footer-logo">
                            <p class="footer-description">
                                ROVI è uno spazio di coworking e centro culturale nel cuore della Valle dell'Aniene.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">FB</a>
                                <a href="#" class="social-link">IG</a>
                                <a href="#" class="social-link">IN</a>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h4>Link Utili</h4>
                            <div class="footer-links">
                                <a href="#about">Chi Siamo</a>
                                <a href="#services">Servizi</a>
                                <a href="#spaces">Spazi</a>
                                <a href="#events">Eventi</a>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h4>Contatti</h4>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <i>📍</i>
                                    <span>Via Roma 1, Roviano (RM)</span>
                                </div>
                                <div class="contact-item">
                                    <i>📧</i>
                                    <span>info@rovispazio.it</span>
                                </div>
                                <div class="contact-item">
                                    <i>📱</i>
                                    <span>+39 06 1234567</span>
                                </div>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h4>Newsletter</h4>
                            <form class="newsletter-form">
                                <div class="newsletter-input">
                                    <input type="email" placeholder="La tua email" required>
                                    <button type="submit">→</button>
                                </div>
                                <small>Iscriviti per ricevere aggiornamenti su eventi e novità.</small>
                            </form>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} ROVI Spazio Creativo. Tutti i diritti riservati.</p>
                        <div class="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Termini e Condizioni</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        this.container.innerHTML = content;
        this.setupNewsletterForm();
    }

    setupNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Handle newsletter signup
                console.log('Newsletter form submitted');
                // Add actual newsletter signup logic here
            });
        }
    }
}

// Initialize
new FooterLoader();