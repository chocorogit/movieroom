const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlideIndex = 0;
let autoSlideInterval;

function updateSlider() {
    const offset = currentSlideIndex * 260;
    // console.log(offset, "offset 값");
    slider.style.transform = `translateX(-${offset}px)`;
}

// 자동 슬라이딩 시작 함수
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlider();
    }, 2000);
}

slider.addEventListener("mouseover", () => {
    clearInterval(autoSlideInterval);
});

slider.addEventListener("mouseout", () => {
    startAutoSlide();
});

startAutoSlide();
