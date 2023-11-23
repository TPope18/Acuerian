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

