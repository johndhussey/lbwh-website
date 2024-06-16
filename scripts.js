
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


/* IMAGE GALLERY */
let slideIndex = 0;
let slides = document.getElementsByClassName("gallery-image");
let dots = document.getElementsByClassName("dot");
let slideInterval = setInterval(nextSlide, 4000);

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n - 1;
  showSlides(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});




