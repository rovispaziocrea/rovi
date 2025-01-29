class SpacesLoader {
    constructor() {
        this.container = document.getElementById('spaces-container');
        this.init();
    }

    init() {
        this.loadContent();
    }

    loadContent() {
        const content = `
            <section id="spaces" class="section-spaces">
                <div class="container">
                    <div class="section-header animate fade-in">
                        <h2>La Nostra Visione</h2>
                        <p>Uno spazio ibrido che unisce lavoro, cultura e comunità</p>
                    </div>
                    <div class="spaces-grid">
                        <div class="space-card animate fade-in-up" style="animation-delay: 200ms;">
                            <div class="space-image">
                                <img src="/api/placeholder/600/400" alt="La Sfida">
                                <span class="space-type">La Sfida</span>
                            </div>
                            <div class="space-content">
                                <h3 class="space-title">Il Problema</h3>
                                <p class="space-description">Nel territorio mancano spazi di lavoro professionali e luoghi di aggregazione culturale. I professionisti sono costretti a spostarsi verso Roma, causando una perdita di talenti e risorse per la comunità locale.</p>
                                <div class="space-features">
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>50km di distanza da Roma</span>
                                    </div>
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>Assenza di spazi per smart worker</span>
                                    </div>
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>Mancanza di hub creativi</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-card animate fade-in-up" style="animation-delay: 400ms;">
                            <div class="space-image">
                                <img src="/api/placeholder/600/400" alt="La Soluzione">
                                <span class="space-type">La Soluzione</span>
                            </div>
                            <div class="space-content">
                                <h3 class="space-title">La Nostra Risposta</h3>
                                <p class="space-description">ROVI si propone come il primo hub ibrido della Valle dell'Aniene, uno spazio che integra lavoro, cultura e formazione per rivitalizzare il territorio.</p>
                                <div class="space-features">
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>Spazio di coworking professionale</span>
                                    </div>
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>Centro eventi culturali</span>
                                    </div>
                                    <div class="space-feature">
                                        <i>→</i>
                                        <span>Hub per lo sviluppo territoriale</span>
                                    </div>
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
new SpacesLoader();