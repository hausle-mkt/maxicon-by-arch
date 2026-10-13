/**
 * BY ARCH | Maxicon Incorporadora
 * Controle dos Cards de Momentos (Stack Cards), Carrossel & Modal Lightbox
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initMomentsStackCards();
  initFullHouseCarousel();
  initPlantsCarousel();
  initHouseCarousel();
  initGalleryModal();
  initWhatsAppModal();
  initDownloadModal();
  initPriceTooltip();
  initContactInterestForm();
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

    // Clique: apenas ativa/expande o card (mobile/tablet), sem abrir modal
    card.addEventListener("click", () => {
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

/**
 * Modal de Atendimento Exclusivo via WhatsApp
 * Coleta Nome, E-mail e Telefone antes de abrir o chat
 */
function initWhatsAppModal() {
  const modal = document.getElementById("whatsapp-modal");
  if (!modal) return;

  const openBtns = document.querySelectorAll("#open-whatsapp-modal, .open-whatsapp-modal-trigger, #mobile-whatsapp-btn");
  const closeBtn = document.getElementById("whatsapp-modal-close");
  const form = document.getElementById("whatsapp-redirect-form");
  const phoneInput = document.getElementById("wa-phone");

  function openModal() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const firstInput = modal.querySelector("input");
    if (firstInput) setTimeout(() => firstInput.focus(), 120);
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const mobileOverlay = document.getElementById("mobile-nav-overlay");
      if (mobileOverlay && mobileOverlay.classList.contains("open")) {
        mobileOverlay.classList.remove("open");
      }
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Máscara automática de telefone (XX) XXXXX-XXXX
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)$/, "($1");
      }
      e.target.value = v;
    });
  }

  // Envio do formulário e redirecionamento para o WhatsApp da Maxicon
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("wa-name")?.value.trim() || "";
      const email = document.getElementById("wa-email")?.value.trim() || "";
      const phone = document.getElementById("wa-phone")?.value.trim() || "";

      let pageContext = "Projetos BY ARCH";
      if (document.title.includes("Casa Pinha")) {
        pageContext = "Casa Pinha (Condomínio Noah, Lote D15)";
      }

      const msg = `Olá! Gostaria de um atendimento exclusivo sobre os projetos da BY ARCH Maxicon.\n\n*Interesse:* ${pageContext}\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}`;
      const waNumber = "5554996225703";
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

      window.open(waUrl, "_blank");

      closeModal();
      form.reset();
    });
  }
}

/**
 * Modal de Cadastro para Download do Material do Projeto (PDF)
 * Capta Nome e E-mail e dispara o download automático do PDF
 */
function initDownloadModal() {
  const modal = document.getElementById("download-modal");
  if (!modal) return;

  const openBtns = document.querySelectorAll(".open-download-modal-trigger, #open-download-modal");
  const closeBtn = document.getElementById("download-modal-close");
  const form = document.getElementById("download-project-form");
  const nameInput = document.getElementById("dl-name");
  const emailInput = document.getElementById("dl-email");
  const submitBtn = document.getElementById("download-submit-btn");
  const successMsg = document.getElementById("download-success-msg");
  const hiddenUrl = document.getElementById("download-pdf-url");
  const hiddenFilename = document.getElementById("download-pdf-filename");

  let currentPdfUrl = (hiddenUrl && hiddenUrl.value) ? hiddenUrl.value : "assets/casa-pinha/apresentacao-casa-pinha.pdf";
  let currentPdfFilename = (hiddenFilename && hiddenFilename.value) ? hiddenFilename.value : "Apresentacao-Casa-Pinha.pdf";

  function openModal(triggerBtn) {
    if (triggerBtn) {
      const dataPdf = triggerBtn.getAttribute("data-pdf");
      const dataFilename = triggerBtn.getAttribute("data-filename");
      if (dataPdf) currentPdfUrl = dataPdf;
      if (dataFilename) currentPdfFilename = dataFilename;
    }
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (nameInput) setTimeout(() => nameInput.focus(), 120);
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (successMsg) successMsg.style.display = "none";
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Baixar Apresentação (PDF)</span>
        `;
      }
    }, 350);
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(btn);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput?.value.trim() || "";
      const email = emailInput?.value.trim() || "";

      if (!name || !email) return;

      // Armazenamento do Lead no LocalStorage
      try {
        const lead = {
          nome: name,
          email: email,
          projeto: document.title || "Casa Pinha",
          arquivo: currentPdfFilename,
          data: new Date().toISOString()
        };
        const leads = JSON.parse(localStorage.getItem("maxicon_leads_download") || "[]");
        leads.push(lead);
        localStorage.setItem("maxicon_leads_download", JSON.stringify(leads));
      } catch (err) {
        // Fallback silencioso se localStorage estiver inacessível
      }

      // Feedback visual no botão
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
          <span>Gerando download...</span>
        `;
      }

      // Exibir aviso de sucesso com link de contingência
      if (successMsg) {
        successMsg.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Download iniciado! Caso não comece automaticamente, <a href="${currentPdfUrl}" download="${currentPdfFilename}" target="_blank" class="download-fallback-link">clique aqui</a>.</span>
        `;
        successMsg.style.display = "flex";
      }

      // Download automático do arquivo PDF
      const downloadLink = document.createElement("a");
      downloadLink.href = currentPdfUrl;
      downloadLink.setAttribute("download", currentPdfFilename);
      downloadLink.setAttribute("target", "_blank");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Fecha o modal suavemente após 2.5s
      setTimeout(() => {
        closeModal();
        form.reset();
      }, 2500);
    });
  }
}

/**
 * Hero Slider de Imagens da Residência
 * Transição em crossfade, autoplay de 5 segundos, suporte a swipe touch e controles
 */
function initHeroSlider() {
  const slider = document.getElementById("hero-slider") || document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dots = slider.querySelectorAll(".hero-dot");
  const prevBtn = slider.querySelector(".hero-slider-prev");
  const nextBtn = slider.querySelector(".hero-slider-next");

  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    startAutoplay();
  }

  // Event Listeners dos botões
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      restartAutoplay();
    });
  }

  // Event Listeners dos dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        restartAutoplay();
      }
    });
  });

  // Pausar autoplay ao passar o cursor do mouse
  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  // Suporte a swipe no mobile / touch
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoplay();
  }, { passive: true });

  // Iniciar autoplay
  startAutoplay();
}

/**
 * Tooltip (Balãozinho) de Informação do Valor do Projeto
 * Suporte a hover no desktop e clique/toque com toggle no mobile
 */
function initPriceTooltip() {
  const triggers = document.querySelectorAll(".price-info-wrap");
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      trigger.classList.toggle("is-active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".price-info-wrap")) {
      triggers.forEach(t => t.classList.remove("is-active"));
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      triggers.forEach(t => t.classList.remove("is-active"));
    }
  });
}

/**
 * Formulário de Atendimento Exclusivo (Nome, Email, WhatsApp)
 * Máscara automática de telefone e redirecionamento para o WhatsApp da Maxicon
 */
function initContactInterestForm() {
  const form = document.getElementById("casa-pinha-form");
  if (!form) return;

  const phoneInput = document.getElementById("interest-phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)$/, "($1");
      }
      e.target.value = v;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("interest-name")?.value.trim() || "";
    const email = document.getElementById("interest-email")?.value.trim() || "";
    const phone = document.getElementById("interest-phone")?.value.trim() || "";

    if (!name || !email || !phone) return;

    let casaNome = "Casa Pinha";
    if (document.title.includes("Casa Pinha")) {
      casaNome = "Casa Pinha (Condomínio Noah, Lote D15)";
    }

    try {
      const lead = {
        nome: name,
        email: email,
        telefone: phone,
        projeto: casaNome,
        origem: "Formulário de Interesse",
        data: new Date().toISOString()
      };
      const leads = JSON.parse(localStorage.getItem("maxicon_leads_interesse") || "[]");
      leads.push(lead);
      localStorage.setItem("maxicon_leads_interesse", JSON.stringify(leads));
    } catch (err) {}

    const msg = `Olá! Tenho interesse e quero receber um atendimento exclusivo sobre a *${casaNome}*.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp:* ${phone}`;
    window.open(`https://wa.me/5554996225703?text=${encodeURIComponent(msg)}`, "_blank");
  });
}



