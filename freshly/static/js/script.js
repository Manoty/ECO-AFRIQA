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

// JavaScript for auto-counting scroll
let count = 0;
let counterElement = document.getElementById('counter');
let metricsSection = document.querySelector('.metrics');
let isCounting = false;

function updateCounter() {
    if (isCounting) return;
    isCounting = true;
    count++;
    counterElement.innerText = count;
    setTimeout(() => {
        isCounting = false;
    }, 100); // Adjust the delay to suit your needs
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function checkScroll() {
    let metricsSectionRect = metricsSection.getBoundingClientRect();
    if (metricsSectionRect.top < window.innerHeight && metricsSectionRect.bottom >= 0) {
        updateCounter();
    }
}

window.addEventListener('scroll', throttle(checkScroll, 100));



// JavaScript for Chatbot Widget

// DOM Elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeButton = document.getElementById('close-chatbot-popup');

// Toggle Chatbot Popup
chatbotButton.addEventListener('click', () => {
    chatbotPopup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});
$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

