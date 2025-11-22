class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                .navbar {
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
                    padding: 1rem 0;
                    transition: all 0.3s ease;
                }
                
                .navbar.scrolled {
                    background-color: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                
                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #111827;
                    text-decoration: none;
                }
                
                .logo span {
                    color: #10b981;
                }
                
                .nav-links {
                    display: none;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #6b7280;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #10b981;
                }
                
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .cta-button {
                    background-color: #10b981;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .cta-button:hover {
                    background-color: #059669;
                    transform: scale(1.05);
                }
                
                .menu-toggle {
                    display: block;
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: white;
                    border-top: 1px solid #e5e7eb;
                    padding: 1rem 1.5rem;
                    display: none;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .mobile-menu.open {
                    display: flex;
                }
                
                .cart-count {
                    background-color: #ef4444;
                    color: white;
                    border-radius: 9999px;
                    width: 1.25rem;
                    height: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                
                @media (min-width: 768px) {
                    .nav-links {
                        display: flex;
                    }
                    
                    .menu-toggle {
                        display: none;
                    }
                    
                    .mobile-menu {
                        display: none !important;
                    }
                }
            </style>
            
            <nav class="navbar">
                <div class="container">
                    <div class="nav-content">
                        <a href="index.html" class="logo">
                            Luxea<span>Blender</span>
                        </a>
                        
                        <div class="nav-links">
                            <a href="#features">Fonctionnalités</a>
                            <a href="#paiement">Acheter</a>
                            <a href="contact.html">Contact</a>
                        </div>
                        
                        <div class="nav-actions">
                            <div class="relative">
                                <i data-feather="shopping-cart" class="w-6 h-6"></i>
                                <div class="cart-count absolute -top-2 -right-2 hidden">0</div>
                            </div>
                            
                            <button class="menu-toggle md:hidden">
                                <i data-feather="menu" class="w-6 h-6"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="mobile-menu">
                        <a href="#features" class="py-2">Fonctionnalités</a>
                                <a href="#paiement" class="py-2">Acheter</a>
                                <a href="contact.html" class="py-2">Contact</a>
                    </div>
                </div>
            </nav>
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
        
        // Mobile menu toggle
        const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                mobileMenu.classList.remove('open');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);