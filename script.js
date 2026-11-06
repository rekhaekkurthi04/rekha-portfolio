
// Smooth navigation when clicking menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        console.log('Navigating to:', this.getAttribute('href'));
    });
});
