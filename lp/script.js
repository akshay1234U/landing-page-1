document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! We will get back to you soon.');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
