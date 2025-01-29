class ContactLoader {
    constructor() {
        this.container = document.getElementById('contact-container');
        this.init();
    }

    init() {
        this.loadContent();
        this.setupFormHandling();
    }

    loadContent() {
        const content = `
            <section id="contact" class="section-contact">
                <div class="container">
                    <div class="section-header animate fade-in">
                        <h2>Partecipa al Progetto</h2>
                        <p>Vuoi far parte di questa iniziativa? Entra in contatto con noi</p>
                    </div>
                    
                    <div class="contact-container">
                        <div class="contact-info animate fade-in-right">
                            <h3>Perché Unirti a Noi</h3>
                            <div class="contact-points">
                                <div class="contact-point">
                                    <div class="point-icon">🌱</div>
                                    <div class="point-content">
                                        <h4>Impatto Sociale</h4>
                                        <p>Contribuisci allo sviluppo del territorio e della comunità locale</p>
                                    </div>
                                </div>
                                
                                <div class="contact-point">
                                    <div class="point-icon">💡</div>
                                    <div class="point-content">
                                        <h4>Innovazione</h4>
                                        <p>Fai parte di un progetto innovativo nel settore degli spazi di lavoro condivisi</p>
                                    </div>
                                </div>
                                
                                <div class="contact-point">
                                    <div class="point-icon">🤝</div>
                                    <div class="point-content">
                                        <h4>Network</h4>
                                        <p>Entra in una rete di professionisti e creativi con visioni comuni</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form animate fade-in-left">
                            <h3>Parliamo del Progetto</h3>
                            <p>Compila il form per ricevere la presentazione completa del progetto e parlare con il nostro team.</p>
                            
                            <form id="contactForm">
                                <div class="form-group">
                                    <label for="name">Nome e Cognome</label>
                                    <input type="text" id="name" class="form-control" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" class="form-control" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message">Il tuo interesse nel progetto</label>
                                    <textarea id="message" class="form-control" rows="5" required 
                                        placeholder="Raccontaci brevemente perché sei interessato al progetto e in che modo vorresti partecipare..."></textarea>
                                </div>

                                <button type="submit" class="submit-button">Invia Richiesta</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.container.innerHTML = content;
    }

    setupFormHandling() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Create mailto link with form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                const mailtoLink = `mailto:info@rovispazio.it?subject=Interesse nel Progetto ROVI - ${name}&body=Nome: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessaggio:%0D%0A${encodeURIComponent(message)}`;
                
                window.location.href = mailtoLink;
            });
        }
    }
}

// Initialize
new ContactLoader();