/**
 * BY ARCH | Maxicon Incorporadora
 * Controle do Carrossel Moderno de Fotos da Residência
 */

document.addEventListener("DOMContentLoaded", () => {
  initHouseCarousel();
});

function initHouseCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const thumbs = document.querySelectorAll(".thumb-item");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const counterCurrent = document.getElementById("carousel-current");
  const counterTotal = document.getElementById("carousel-total");
  const viewport = document.querySelector(".carousel-viewport");

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  if (counterTotal) {
    counterTotal.textContent = String(totalSlides).padStart(2, "0");
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });

    if (counterCurrent) {
      counterCurrent.textContent = String(currentIndex + 1).padStart(2, "0");
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => goToSlide(i));
  });

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
  });

  // Touch Swipe para Mobile
  if (viewport) {
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 40;
      if (touchEndX < touchStartX - threshold) {
        goToSlide(currentIndex + 1);
      }
      if (touchEndX > touchStartX + threshold) {
        goToSlide(currentIndex - 1);
      }
    }
  }
}
