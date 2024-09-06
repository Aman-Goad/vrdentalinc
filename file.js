// Select all service cards
const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation classes when the element is in the viewport
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100', 'transform-none');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each service card
serviceCards.forEach(card => {
    observer.observe(card);
});



document.getElementById('menu-button').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}



