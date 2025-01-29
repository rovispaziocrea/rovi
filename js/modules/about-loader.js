class AboutLoader {
    constructor() {
        this.container = document.getElementById('about-container');
        this.init();
    }

    init() {
        this.loadContent();
    }

    loadContent() {
        const content = `
            <section id="about" class="section-about">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text animate fade-in-right">
                            <h2>Il Progetto</h2>
                            <p>ROVI nasce dall'esigenza di creare uno spazio di aggregazione innovativo nella Valle dell'Aniene, un territorio che cerca nuovi modi per trattenere i suoi talenti e stimolare la crescita culturale e professionale.</p>
                            <p>La nostra visione è quella di un hub che integri spazi di coworking professionali con un centro per eventi culturali e formativi, creando un ecosistema che favorisca l'innovazione e la collaborazione.</p>
                            <div class="about-features">
                                <div class="feature-item">
                                    <div class="feature-icon">📊</div>
                                    <div class="feature-content">
                                        <h4>Ricerca di Mercato</h4>
                                        <p>Il 58% dei professionisti locali lavora in ambiti compatibili con lo smart working</p>
                                    </div>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-icon">🎯</div>
                                    <div class="feature-content">
                                        <h4>Bisogni Rilevati</h4>
                                        <p>Il 53% cerca soluzioni di lavoro vicino casa e desidera incrementare lo smart working</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-stats animate fade-in-left">
                            <h3>I Numeri della Ricerca</h3>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <div class="stat-number">74%</div>
                                    <p>Età 25-45 anni</p>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">50%</div>
                                    <p>Smart/Ibrido</p>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">46%</div>
                                    <p>Interesse Eventi</p>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">41%</div>
                                    <p>Eventi Food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.container.innerHTML = content;
    }
}

// Initialize
new AboutLoader();