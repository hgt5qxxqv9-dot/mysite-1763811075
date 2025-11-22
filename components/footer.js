class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #111827;
                    color: #9ca3af;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    color: white;
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                
                .footer-section a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-section a:hover {
                    color: #10b981;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    text-align: center;
                }
                
                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                
                @media (min-width: 768px) {
                    .footer-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                
                @media (min-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 2fr 1fr 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h3>Luxea Blender</h3>
                            <p>Le mixeur portable révolutionnaire qui vous suit partout. Conçu pour la performance et la praticité.</p>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Navigation</h3>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <a href="index.html">Accueil</a>
                                <a href="#features">Fonctionnalités</a>
                                <a href="#paiement">Acheter</a>
                                <a href="contact.html">Contact</a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <div class="contact-info">
                                <i data-feather="mail" class="w-4 h-4"></i>
                                <a href="mailto:luxea.shopp@gmail.com">luxea.shopp@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2024 Luxea Blender. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
        
        // Initialize Feather Icons in shadow DOM
        const featherScript = document.createElement('script');
        featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        this.shadowRoot.appendChild(featherScript);
        
        featherScript.onload = () => {
            if (window.feather) {
                window.feather.replace();
            }
        };
    }
}

customElements.define('custom-footer', CustomFooter);