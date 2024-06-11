
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (!window.location.pathname.includes('booking.html')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the navigation panel in mobile view after selecting an item
                if (window.innerWidth <= 768) {
                    document.querySelector('.nav-menu').classList.remove('open');
                }
            } else {
                // Navigate to the actual href if the page is booking.html
                window.location.href = this.getAttribute('href');                
            }
        });
    });


    // Section reveal on scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


});




