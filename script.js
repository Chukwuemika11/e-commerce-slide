const slider = document.querySelector('.slider');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100;
  slider.style.transform = `translateX(${translateValue}%)`;
}

// Auto advance slides every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);
