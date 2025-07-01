document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");
  const slideCount = slides.length;

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active-dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll(".dot");

  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[currentIndex].classList.add("active-dot");
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
  }

  document.querySelector(".next").addEventListener("click", showNextSlide);
  document.querySelector(".prev").addEventListener("click", showPrevSlide);

  // Auto-play
  let autoPlay = setInterval(showNextSlide, 4000);

  // Pause on hover
  slidesContainer.addEventListener("mouseover", () => clearInterval(autoPlay));
  slidesContainer.addEventListener("mouseout", () => autoPlay = setInterval(showNextSlide, 4000));

  // Touch/swipe support
  let startX = 0;

  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) showNextSlide(); // swipe left
    else if (diff < -50) showPrevSlide(); // swipe right
  });
});
