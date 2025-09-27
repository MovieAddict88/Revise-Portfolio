document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Mobile menu toggle
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('sidebar-active');
            sidebar.classList.toggle('active');
        });

        // Close sidebar when a link is clicked
        const navLinks = document.querySelectorAll('.sidebar .nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sidebar.classList.contains('active')) {
                    body.classList.remove('sidebar-active');
                    sidebar.classList.remove('active');
                }
            });
        });
    }

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Update icon based on theme
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️'; // Sun icon for light mode
            } else {
                themeToggle.textContent = '🌙'; // Moon icon for dark mode
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    if (testimonials.length > 1) {
        setInterval(() => {
            if(testimonials[currentTestimonial]) {
                testimonials[currentTestimonial].style.display = 'none';
            }
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            if(testimonials[currentTestimonial]) {
                testimonials[currentTestimonial].style.display = 'block';
            }
        }, 5000); // Change every 5 seconds
    }
});