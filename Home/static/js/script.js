const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
});

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function () {
    header.classList.toggle('active')
};

// script.js

// Initialize counters
let clientsCount = 100;
let visitorsCount = 500;
let awardsCount = 10;
let produceCount = 50;

// Function to increment counters
function incrementCounter(counter) {
    switch (counter) {
        case 'clients':
            clientsCount += 10;
            break;
        case 'visitors':
            visitorsCount += 20;
            break;
        case 'awards':
            awardsCount += 1;
            break;
        case 'produce':
            produceCount += 5;
            break;
        default:
            break;
    }
    updateCounters();
}

// Event listeners for button clicks
document.getElementById('clients-button').addEventListener('click', () => incrementCounter('clients'));
document.getElementById('visitors-button').addEventListener('click', () => incrementCounter('visitors'));
document.getElementById('awards-button').addEventListener('click', () => incrementCounter('awards'));
document.getElementById('produce-button').addEventListener('click', () => incrementCounter('produce'));
