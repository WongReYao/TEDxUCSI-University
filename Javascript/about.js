let slideIndex = 0;
let autoSlide; // Declare the variable here so both functions can see it

// 1. Function to move slides
function plusSlides(n) {
    const slides = document.querySelectorAll(".mySlide");
    const wrapper = document.getElementById("slideWrapper");
    
    slideIndex += n;

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// 2. Logic to Start/Stop the timer
function startTimer() {
    autoSlide = setInterval(() => {
        plusSlides(1);
    }, 4000);
}

function stopTimer() { //this is used to trigger built in function
    clearInterval(autoSlide);
}

// 3. Initialize the timer on page load
startTimer();

// 4. Hover Detection
const container = document.querySelector(".slideshow-container");

container.addEventListener("mouseenter", () => {
    stopTimer(); // Pause the slideshow
    console.log("Slideshow Paused");
});

container.addEventListener("mouseleave", () => {
    startTimer(); // Resume the slideshow
    console.log("Slideshow Resumed");
});