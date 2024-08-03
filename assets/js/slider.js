let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentSlideIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function currentSlide(index) {
    clearInterval(slideInterval);
    showSlide(index);
    slideInterval = setInterval(nextSlide,5000);
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

let slideInterval = setInterval(nextSlide, 5000);

document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide,5000);
});
