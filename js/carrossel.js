/**
 * BY ARCH | Maxicon Incorporadora
 * Controle do Carrossel Moderno de Fotos & Modal Lightbox da Residência
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

  // Modal Lightbox elements
  const modalOverlay = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("gallery-modal-img");
  const modalCaption = document.getElementById("gallery-modal-caption");
  const modalCloseBtn = document.getElementById("gallery-modal-close");
  const modalPrevBtn = document.getElementById("gallery-modal-prev");
  const modalNextBtn = document.getElementById("gallery-modal-next");

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

    // Se o modal estiver aberto, sincroniza a imagem
    if (modalOverlay && modalOverlay.classList.contains("active")) {
      updateModalImage(currentIndex);
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentIndex + 1);
    });
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(i);
    });
  });

  // ========================================================================
  // Modal Lightbox
  // ========================================================================
  function updateModalImage(index) {
    const activeSlide = slides[index];
    if (!activeSlide || !modalImg) return;
    const fullSrc = activeSlide.getAttribute("data-full") || activeSlide.querySelector("img")?.src;
    const title = activeSlide.getAttribute("data-title") || "";
    modalImg.src = fullSrc;
    modalImg.alt = title;
    if (modalCaption) {
      modalCaption.textContent = title;
    }
  }

  function openModal(index) {
    if (!modalOverlay) return;
    updateModalImage(index);
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (viewport) {
    viewport.addEventListener("click", (e) => {
      // Evita disparar se clicou em botões de controle
      if (e.target.closest(".carousel-btn")) return;
      openModal(currentIndex);
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentIndex - 1);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToSlide(currentIndex + 1);
    });
  }

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modalOverlay && modalOverlay.classList.contains("active")) {
        closeModal();
      }
    }
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
  });

  // Touch Swipe para Mobile no Carrossel
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

