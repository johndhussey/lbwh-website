// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
});


// Contact form submission
/* document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form submission actions here (e.g., AJAX request)
    document.getElementById('contact-notification').innerText = "Form submitted successfully!";
    document.getElementById('contact-notification').style.display = 'block';
    setTimeout(() => {
        document.getElementById('contact-notification').style.display = 'none';
    }, 3000);
}); */

// Keep-in-touch form submission
/* document.getElementById('keep-in-touch-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('keep-in-touch-email').value;

    fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            document.getElementById('keep-in-touch-notification').innerText = "Subscription successful!";
            document.getElementById('keep-in-touch-notification').style.display = 'block';
            setTimeout(() => {
                document.getElementById('keep-in-touch-notification').style.display = 'none';
            }, 3000);
        }
    });
}); */



document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling to sections
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
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

    // Contact form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-submitted").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("form-submitted").classList.add("hidden");
        }, 3000);
        form.reset();
    });
});




  