/**
 * BY ARCH | Maxicon Incorporadora
 * Controle dos Cards de Momentos (Stack Cards), Carrossel & Modal Lightbox
 */

document.addEventListener("DOMContentLoaded", () => {
  initMomentsStackCards();
  initFullHouseCarousel();
  initPlantsCarousel();
  initHouseCarousel();
  initGalleryModal();
  initScrollReveal();
});

// Helper global para abrir o modal de galeria com qualquer foto
function openGalleryModal(src, title) {
  const modalOverlay = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("gallery-modal-img");
  const modalCaption = document.getElementById("gallery-modal-caption");
  if (!modalOverlay || !modalImg) return;
  modalImg.src = src;
  modalImg.alt = title || "";
  if (modalCaption) {
    modalCaption.textContent = title || "";
  }
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modalOverlay = document.getElementById("gallery-modal");
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * Seção: Momentos da Vida - Stack Cards com ativação por Hover e Click
 */
function initMomentsStackCards() {
  const container = document.getElementById("moments-stack");
  if (!container) return;
  const cards = container.querySelectorAll(".moment-stack-card");
  if (!cards.length) return;

  cards.forEach(card => {
    // Hover: ativa o card imediatamente ao passar o mouse
    card.addEventListener("mouseenter", () => {
      cards.forEach(c => c.classList.remove("is-active"));
      card.classList.add("is-active");
    });

    // Clique: no desktop ou mobile
    card.addEventListener("click", (e) => {
      // Se clicou no botão de zoom do card, abre o modal direto
      if (e.target.closest(".moment-zoom-btn")) {
        e.stopPropagation();
        const fullSrc = card.getAttribute("data-full");
        const title = card.getAttribute("data-title");
        openGalleryModal(fullSrc, title);
        return;
      }

      // Se já está ativo em tela mobile/tablet, clicar na imagem amplia
      if (window.innerWidth <= 991 && card.classList.contains("is-active")) {
        const fullSrc = card.getAttribute("data-full");
        const title = card.getAttribute("data-title");
        openGalleryModal(fullSrc, title);
        return;
      }

      // Caso contrário, ativa o card
      cards.forEach(c => c.classList.remove("is-active"));
      card.classList.add("is-active");
    });
  });
}

function initGalleryModal() {
  const modalOverlay = document.getElementById("gallery-modal");
  const modalCloseBtn = document.getElementById("gallery-modal-close");

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeGalleryModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeGalleryModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modalOverlay && modalOverlay.classList.contains("active")) {
        closeGalleryModal();
      }
    }
  });
}

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

/**
 * Carrossel Completo de Fotos da Casa (Fundo Preto)
 */
function initFullHouseCarousel() {
  const viewport = document.getElementById("full-carousel-viewport");
  if (!viewport) return;
  const slides = viewport.querySelectorAll(".full-carousel-slide");
  const prevBtn = document.getElementById("full-carousel-prev");
  const nextBtn = document.getElementById("full-carousel-next");

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

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

  // Clique na imagem para ampliar no Lightbox
  viewport.addEventListener("click", () => {
    const activeSlide = slides[currentIndex];
    if (!activeSlide) return;
    const fullSrc = activeSlide.getAttribute("data-full") || activeSlide.querySelector("img")?.src;
    const title = activeSlide.querySelector("img")?.alt || "Casa Pinha";
    openGalleryModal(fullSrc, title);
  });

  // Navegação por teclado quando o carrossel estiver visível
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("gallery-modal");
    if (modal && modal.classList.contains("active")) return;
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
  });

  // Touch Swipe para Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      goToSlide(currentIndex + 1);
    } else if (touchEndX > touchStartX + threshold) {
      goToSlide(currentIndex - 1);
    }
  }, { passive: true });
}

/**
 * Carrossel com Miniaturas do Álbum de Plantas da Casa
 */
function initPlantsCarousel() {
  const viewport = document.getElementById("plants-viewport");
  if (!viewport) return;

  const slides = viewport.querySelectorAll(".plants-slide");
  const thumbs = document.querySelectorAll(".plants-thumb-item");
  const prevBtn = document.getElementById("plants-prev");
  const nextBtn = document.getElementById("plants-next");

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

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
      const isActive = i === currentIndex;
      thumb.classList.toggle("active", isActive);
      if (isActive && thumb.scrollIntoView) {
        thumb.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }
    });
  }

  // Cliques nas miniaturas
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => {
      goToSlide(idx);
    });
  });

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

  // Clique na imagem para abrir em tela cheia no Lightbox
  viewport.addEventListener("click", (e) => {
    if (e.target.closest(".plants-nav-btn")) return;
    const activeSlide = slides[currentIndex];
    if (!activeSlide) return;
    const fullSrc = activeSlide.getAttribute("data-full") || activeSlide.querySelector("img")?.src;
    const title = activeSlide.getAttribute("data-title") || "Planta Arquitetônica";
    openGalleryModal(fullSrc, title);
  });

  // Touch Swipe para Mobile no Viewport
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      goToSlide(currentIndex + 1);
    } else if (touchEndX > touchStartX + threshold) {
      goToSlide(currentIndex - 1);
    }
  }, { passive: true });
}

/**
 * Animação Suave ao Rolar a Página (Scroll Reveal)
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".scroll-reveal");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -30px 0px"
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback gracioso
    elements.forEach(el => el.classList.add("is-visible"));
  }
}

