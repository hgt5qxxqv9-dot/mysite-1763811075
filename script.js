// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in-up animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .bg-white, .bg-gray-50, .review-card').forEach(function(element) {
        observer.observe(element);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('custom-navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Simple cart functionality
let cart = {
    items: [],
    addItem: function(product) {
        this.items.push(product);
        this.updateCartDisplay();
    },
    updateCartDisplay: function() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = this.items.length;
            cartCount.classList.toggle('hidden', this.items.length === 0);
        }
    }
};

// Product data
const product = {
    name: "Mixeur Portable Luxea",
    price: 79,
    originalPrice: 99,
    color: "Noir Mat",
    quantity: 1
};