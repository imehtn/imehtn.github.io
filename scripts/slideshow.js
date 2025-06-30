let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // every 3 seconds
