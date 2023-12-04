const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.about');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.upcoming-events');
hiddenElements2.forEach((el) => observer2.observe(el));


var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;

    // Reset index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide with a fade-in effect
    slides[slideIndex - 1].style.display = "block";
    fadeIn(slides[slideIndex - 1], 2500); // Adjust the duration as needed

    // Set timeout for the next slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds (adjust as needed)
}

// Function to apply fade-in effect
function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 50; // Interval for opacity change
    var delta = interval / duration;

    // Function to update opacity
    function increaseOpacity() {
        opacity += delta;
        element.style.opacity = opacity;

        // Check if opacity reached 1 (fully visible)
        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }
    }

    // Set interval for opacity change
    var fadeInterval = setInterval(increaseOpacity, interval);
}

// Start the auto-scrolling
showSlides();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementById('active').checked = false;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mailIcon = document.querySelector(".fa-envelope");
    if (mailIcon) {
      mailIcon.addEventListener("click", function () {
        window.open("mailto:acuerianllc@gmail.com");
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const instaIcon = document.querySelector(".fa-instagram");
    if (instaIcon) {
      instaIcon.addEventListener("click", function () {
        window.open("https://www.instagram.com/acuerian/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==", "_blank");
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const tiktok = document.querySelector(".fa-tiktok");
    if (tiktok) {
      tiktok.addEventListener("click", function () {
        window.open("https://www.tiktok.com/@acuerian?is_from_webapp=1&sender_device=pc", "_blank");
      });
    }
  });
