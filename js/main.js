/**
 * BY ARCH | Maxicon Incorporadora
 * Interatividade & Experiência Editorial
 */

// Dados completos das Residências Autorais da Coleção
const residencesData = [
  {
    id: "casa-pinha",
    name: "Casa Pinha",
    architect: "Polesello + Müller Arquitetura",
    tag: "Arquitetura que abraça & Araucária Central",
    category: "3-suites",
    suites: "3 Suítes",
    area: "434,40 m²",
    land: "811,31 m²",
    garage: "3 Vagas",
    status: "Disponível para Aquisição",
    location: "Condomínio Noah, Lote D15",
    image: "assets/casa-pinha/destaque.webp",
    pageUrl: "casa-pinha.html",
    excerpt: "Uma araucária existente no terreno torna-se o coração da residência. Linhas curvas, madeira, pedra e piscina com fire pit integrado.",
    fullDescription: "A Casa Pinha nasce da reverência ao elemento natural mais nobre do sítio: uma araucária madura em torno da qual a volumetria curva se articula. O projeto de Polesello + Müller combina planos de concreto ripado, pedra natural e esquadrias de alta eficiência, integrando os ambientes sociais à área de lazer com piscina e fire pit aquecido.",
    materials: ["Madeira Natural Nobre", "Pedra Natural Bruta", "Concreto Ripado", "Esquadrias de Alta Performance", "Piscina com Fire Pit"],
    highlight: "Átrio semicircular que abraça a araucária nativa preservada no terreno."
  },
  {
    id: "casa-alva",
    name: "Casa Alva",
    architect: "Jéssika Neckel Arquitetura de Interiores",
    tag: "Luminosidade Natural, Volumes Puros & Atmosfera Silenciosa",
    category: "4-suites",
    suites: "4 Suítes",
    area: "560 m²",
    land: "1.150 m²",
    garage: "4 Vagas",
    status: "Breve Lançamento",
    location: "Condomínio Noah, Lote A08",
    image: "assets/ESCRITORIOS%20LOGO/casa%20jessica%20neckel.webp",
    pageUrl: "casa-alva.html",
    excerpt: "Com o traço elegante e acolhedor de Jéssika Neckel, privilegia a integração fluida entre áreas sociais e refúgios íntimos com marcenaria sob medida.",
    fullDescription: "A Casa Alva expressa o minimalismo acolhedor característico de Jéssika Neckel. O projeto valoriza a luz natural difusa, superfícies táteis puras, transição delicada entre os jardins e as suítes, e marcenaria autoral que envolve cada espaço em uma atmosfera de silêncio e bem-estar.",
    materials: ["Madeira Clara Natural", "Mármore Branco Rajado", "Concreto Texturizado", "Marcenaria Artesanal", "Vidros Térmicos Low-E"],
    highlight: "Conceito de luz zenital contínua com integração total ao paisagismo nativo."
  },
  {
    id: "casa-horizonte",
    name: "Casa Horizonte",
    architect: "Studio Bernardes & Parceiros",
    tag: "Volumetria em Balanço & Espelho d'Água",
    category: "4-suites",
    suites: "4 Suítes",
    area: "720 m²",
    land: "1.350 m²",
    garage: "4 Vagas",
    status: "Disponível para Aquisição",
    location: "Alameda das Sucupiras, Lote 14",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Projetada com uma imponente laje protendida em balanço sobre espelho d'água, a residência funde concreto aparente ripado e esquadrias piso-teto em um diálogo constante com a mata.",
    fullDescription: "A Casa Horizonte foi concebida a partir da topografia natural em declive suave. O Studio Bernardes desenvolveu uma estrutura onde a área social parece levitar sobre o jardim. Composta por brises verticais de madeira cumaru tratada que filtram a luz do sol poente, a residência oferece ventilação cruzada contínua e total privacidade para a ala íntima no piso superior.",
    materials: ["Concreto Aparente Ripado", "Madeira Cumaru Certificada", "Pedra Hijau na Piscina", "Esquadrias Schüco de Alta Performance", "Piso em Travertino Navona"],
    highlight: "Piscina com borda infinita de 22 metros integrada ao living social."
  },
  {
    id: "casa-terra-luz",
    name: "Casa Terra & Luz",
    architect: "FGMF Arquitetos",
    tag: "Pátio Interno & Arquitetura Biofílica",
    category: "4-suites",
    suites: "4 Suítes",
    area: "580 m²",
    land: "1.100 m²",
    garage: "3 Vagas",
    status: "Fase de Acabamentos",
    location: "Boulevard dos Ipês, Lote 08",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Organizada em torno de um generoso átrio central ajardinado com oliveira centenária, traz luz natural zenital e transição fluida entre áreas íntimas e sociais.",
    fullDescription: "A premissa da Casa Terra & Luz é a introversão poética: uma fachada discreta e escultural que se abre para o coração verde da casa. O projeto assinado pelo FGMF explora a textura da taipa de pilão contemporânea e brises metálicos perfurados com desenho paramétrico exclusivo.",
    materials: ["Paredes em Taipa Contemporânea", "Aço Corten Escovado", "Mármore Paraná", "Brises Paramétricos", "Sistema Fotovoltaico Oculto"],
    highlight: "Átrio central com pé-direito duplo e jardim interno projetado por paisagistas botânicos."
  },
  {
    id: "casa-brise-tropical",
    name: "Casa Brise Tropical",
    architect: "Jacobsen Arquitetura",
    tag: "Transparência & Paisagismo Envolvente",
    category: "5-suites",
    suites: "5 Suítes",
    area: "650 m²",
    land: "1.420 m²",
    garage: "4 Vagas",
    status: "Disponível para Aquisição",
    location: "Trilha da Reserva, Lote 22",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Uma homenagem à arquitetura moderna brasileira, com ampla varanda gourmet contínua, pilares esbeltos e beirais pronunciados que protegem a casa com leveza.",
    fullDescription: "A Casa Brise Tropical equilibra a imponência de 650 m² com uma sensação de acolhimento e leveza. Grandes painéis ripados deslizantes permitem alterar a incidência de sombra e vento ao longo do dia, garantindo eficiência térmica natural sem depender exclusivamente de climatização artificial.",
    materials: ["Freijó Natural Maciço", "Granito Rústico Apicoado", "Vidros de Controle Solar Low-E", "Deck em Itaúba", "Lareira Externa em Pedra Ferro"],
    highlight: "Varanda de 14 metros lineares totalmente aberta para a reserva florestal nativa."
  },
  {
    id: "casa-mirante-mata",
    name: "Casa Mirante da Mata",
    architect: "Studio MK27",
    tag: "Minimalismo Radical & Vão Livre de 18 Metros",
    category: "5-suites",
    suites: "5 Suítes (Master com Spa)",
    area: "840 m²",
    land: "1.800 m²",
    garage: "5 Vagas",
    status: "Última Unidade da Quadra",
    location: "Colina dos Mirantes, Lote 01",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Com um vão livre surpreendente sem apoios intermediários, a residência abre 100% de sua área social para um panorama ininterrupto do horizonte verde.",
    fullDescription: "Uma das obras mais desafiadoras de engenharia do BY ARCH. O Studio MK27 desenhou uma caixa horizontal esculpida em concreto cinza claro que se projeta sobre o terreno. O interior conta com marcenaria sob medida em nogueira e automação completa que controla iluminação, som e esquadrias motorizadas por aplicativo e comando de voz.",
    materials: ["Concreto Branco Aparente", "Madeira Nogueira Americana", "Esquadrias Embutidas no Piso", "Piso Calacatta Revestido", "Adega Climatizada para 600 Rótulos"],
    highlight: "Living com vão livre de 18 metros sem pilares e vista panorâmica permanente."
  },
  {
    id: "villa-sensoria",
    name: "Villa Sensória",
    architect: "Arthur Casas Design",
    tag: "Harmonia Sensorial & Integração Térmica",
    category: "4-suites",
    suites: "4 Suítes",
    area: "610 m²",
    land: "1.280 m²",
    garage: "4 Vagas",
    status: "Disponível para Aquisição",
    location: "Alameda das Palmeiras, Lote 05",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Desenvolvida com foco em sustentabilidade passiva, aproveitamento de brisa e texturas táteis acolhedoras que estimulam os cinco sentidos.",
    fullDescription: "A Villa Sensória traduz a união perfeita entre o desenho contemporâneo e o aconchego brasileiro. Com jardins de chuva, telhado verde com grama nativa que otimiza a temperatura interna e iluminação indireta cenográfica, cada ambiente convida à contemplação e ao descanso.",
    materials: ["Argila e Pigmentos Minerais", "Mobiliário Autoral Embutido", "Piso de Madeira de Demolição", "Painéis de Brise Pivotantes", "Vidros Duplos Laminados"],
    highlight: "Rooftop com lounge de contemplação e jardim de ervas aromáticas."
  },
  {
    id: "casa-geometria-pura",
    name: "Casa Geometria Pura",
    architect: "Metro Arquitetos",
    tag: "Linhas Claras & Ritmo Estrutural",
    category: "terrenos-amplos",
    suites: "5 Suítes",
    area: "780 m²",
    land: "2.100 m²",
    garage: "6 Vagas",
    status: "Disponível para Aquisição",
    location: "Planalto da Reserva, Lote 19",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Rigor geométrico de volumes puros sobrepostos, criando solários, terraços privativos e jogos de luz e sombra marcantes ao longo do dia.",
    fullDescription: "A Casa Geometria Pura explora a monumentalidade das linhas retas e a precisão dos encontros de materiais. Grandes aberturas para o poente com pergolados em concreto projetam sombras dinâmicas no piso e nas paredes internas, criando uma obra que se transforma com o movimento solar.",
    materials: ["Concreto Estrutural Aparente", "Aço Carbono Preto Fosco", "Mármore Nero Marquina", "Pergolados em Concreto", "Jardim de Pedras Esculpidas"],
    highlight: "Terreno exclusivo de 2.100 m² cercado por mata atlântica preservada."
  }
];

// Dados dos Pilares Interativos (Seção 01, 02, 03)
const pillarsData = [
  {
    title: "Arquitetura Autoral Única",
    subtitle: "Cada residência é concebida como uma peça de arte exclusiva, sem replicação de plantas. A forma responde ao terreno.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    badgeTitle: "01. Autoria & Exclusividade",
    badgeDesc: "Topografia respeitada e volumetria inédita assinada por mestres do traço."
  },
  {
    title: "Materialidade e Tempo",
    subtitle: "Concreto aparente, pedras naturais brutas, madeira de manejo sustentável e metais que envelhecem com nobreza e história.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
    badgeTitle: "02. Matérias Nobres",
    badgeDesc: "Materiais autênticos que valorizam a passagem do tempo e o clima tropical."
  },
  {
    title: "Biofilia & Paisagismo Envolvente",
    subtitle: "Grandes panos de vidro e pátios internos garantem que a natureza externa adentre os espaços sem qualquer barreira visual.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    badgeTitle: "03. Conexão com o Verde",
    badgeDesc: "Espelhos d'água, jardins privativos e iluminação zenital natural contínua."
  }
];

// Inicialização após o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initPillarsInteraction();
  initFilters();
  initModal();
  initContactForm();
  initWhatsAppModal();
  initScrollReveal();
  initHousesCarousel();
  initNoahAnimations();
  initNoahGallery();
  initDownloadModal();
  initTalentsMarquee();
  initFooterNavigation();
});

/* Controle do Carrossel de Casas — Infinite Loop Real (Bidirecional & Contínuo) */
function initHousesCarousel() {
  const wrapper = document.getElementById("houses-carousel-wrapper");
  const track = document.getElementById("houses-carousel-track");
  const prevBtn = document.getElementById("houses-carousel-prev");
  const nextBtn = document.getElementById("houses-carousel-next");
  if (!wrapper || !track) return;

  const originalCards = Array.from(track.querySelectorAll(".house-carousel-card"));
  const count = originalCards.length;
  if (count === 0) return;

  // Evita duplicar se já foi inicializado
  if (track.getAttribute("data-loop-initialized") === "true") return;
  track.setAttribute("data-loop-initialized", "true");

  // Cria Set 0 (clones anteriores) e Set 2 (clones posteriores)
  const fragmentBefore = document.createDocumentFragment();
  const fragmentAfter = document.createDocumentFragment();

  originalCards.forEach((card) => {
    const cloneBefore = card.cloneNode(true);
    cloneBefore.classList.add("is-clone");
    cloneBefore.setAttribute("aria-hidden", "true");
    const linkB = cloneBefore.matches("a") ? cloneBefore : cloneBefore.querySelector("a");
    if (linkB) linkB.setAttribute("tabindex", "-1");
    fragmentBefore.appendChild(cloneBefore);

    const cloneAfter = card.cloneNode(true);
    cloneAfter.classList.add("is-clone");
    cloneAfter.setAttribute("aria-hidden", "true");
    const linkA = cloneAfter.matches("a") ? cloneAfter : cloneAfter.querySelector("a");
    if (linkA) linkA.setAttribute("tabindex", "-1");
    fragmentAfter.appendChild(cloneAfter);
  });

  track.insertBefore(fragmentBefore, originalCards[0]);
  track.appendChild(fragmentAfter);

  function getSingleSetWidth() {
    const allCards = track.querySelectorAll(".house-carousel-card");
    if (allCards.length < count * 2) return 0;
    // Distância exata entre o primeiro card do Set 1 e o primeiro card do Set 0
    return allCards[count].offsetLeft - allCards[0].offsetLeft;
  }

  function getScrollStep() {
    const firstCard = track.querySelector(".house-carousel-card");
    return firstCard ? firstCard.offsetWidth + 16 : 346;
  }

  // Posição inicial no Set 1 (original)
  function initScrollPosition() {
    const setWidth = getSingleSetWidth();
    if (setWidth > 0) {
      wrapper.style.scrollBehavior = "auto";
      wrapper.scrollLeft = setWidth;
      requestAnimationFrame(() => {
        wrapper.style.scrollBehavior = "smooth";
      });
    }
  }

  initScrollPosition();

  // Normalização Silenciosa de Posição (Seamless Wrap)
  let normalizeTimer = null;
  let isDragging = false;

  function silentNormalize() {
    if (isDragging) return;
    const setWidth = getSingleSetWidth();
    if (!setWidth) return;

    // Se navegou para o Set 2 (à direita do Set 1)
    if (wrapper.scrollLeft >= 2 * setWidth) {
      wrapper.style.scrollBehavior = "auto";
      wrapper.scrollLeft -= setWidth;
      wrapper.style.scrollBehavior = "smooth";
    }
    // Se navegou para o Set 0 (à esquerda do Set 1)
    else if (wrapper.scrollLeft < setWidth) {
      wrapper.style.scrollBehavior = "auto";
      wrapper.scrollLeft += setWidth;
      wrapper.style.scrollBehavior = "smooth";
    }
  }

  function scheduleNormalize() {
    clearTimeout(normalizeTimer);
    normalizeTimer = setTimeout(silentNormalize, 140);
  }

  wrapper.addEventListener("scroll", scheduleNormalize, { passive: true });
  if ("onscrollend" in window) {
    wrapper.addEventListener("scrollend", silentNormalize, { passive: true });
  }

  // Navegação pelos Botões de Seta (ambos sempre ativos)
  if (nextBtn) {
    nextBtn.classList.remove("is-disabled");
    nextBtn.addEventListener("click", () => {
      clearTimeout(normalizeTimer);
      const setWidth = getSingleSetWidth();
      if (setWidth && wrapper.scrollLeft >= 2.5 * setWidth) {
        wrapper.style.scrollBehavior = "auto";
        wrapper.scrollLeft -= setWidth;
      }
      wrapper.style.scrollBehavior = "smooth";
      wrapper.scrollBy({ left: getScrollStep(), behavior: "smooth" });
    });
  }

  if (prevBtn) {
    prevBtn.classList.remove("is-disabled");
    prevBtn.addEventListener("click", () => {
      clearTimeout(normalizeTimer);
      const setWidth = getSingleSetWidth();
      if (setWidth && wrapper.scrollLeft <= 0.5 * setWidth) {
        wrapper.style.scrollBehavior = "auto";
        wrapper.scrollLeft += setWidth;
      }
      wrapper.style.scrollBehavior = "smooth";
      wrapper.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
    });
  }

  // Arraste com o mouse no Desktop
  let startX = 0;
  let scrollStart = 0;
  let hasMoved = false;

  wrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    hasMoved = false;
    clearTimeout(normalizeTimer);
    wrapper.classList.add("is-dragging");
    wrapper.style.scrollBehavior = "auto";
    startX = e.pageX - wrapper.offsetLeft;
    scrollStart = wrapper.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove("is-dragging");
    wrapper.style.scrollBehavior = "smooth";
    scheduleNormalize();
  });

  wrapper.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 4) {
      hasMoved = true;
      e.preventDefault();
      wrapper.scrollLeft = scrollStart - walk;
    }
  });

  // Previne clique acidental ao soltar após arrasto
  wrapper.addEventListener("click", (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
    }
  }, true);

  // Redimensionamento de tela
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initScrollPosition();
    }, 150);
  }, { passive: true });

  window.addEventListener("load", () => {
    initScrollPosition();
  });
}

/* Efeitos de Scroll Reveal (Surgimento suave ao rolar a página) */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (!revealElements.length) return;

  document.body.classList.add("reveal-ready");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  });

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-revealed");
    } else {
      observer.observe(el);
    }
  });
}

/* Efeito da Navbar ao Rolar a Página */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.08)";
      navbar.style.background = "rgba(255, 255, 255, 0.96)";
    } else {
      navbar.style.boxShadow = "var(--shadow-sm)";
      navbar.style.background = "rgba(255, 255, 255, 0.92)";
    }
  });
}

/* Menu Mobile Overlay */
function initMobileMenu() {
  const openBtn = document.getElementById("mobile-open-btn");
  const closeBtn = document.getElementById("mobile-close-btn");
  const overlay = document.getElementById("mobile-nav-overlay");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!openBtn || !overlay) return;

  openBtn.addEventListener("click", () => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  const closeMenu = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  links.forEach(l => l.addEventListener("click", closeMenu));
}

/* Interatividade dos Pilares 01, 02, 03 (Estilo VistaHaven) */
function initPillarsInteraction() {
  const cards = document.querySelectorAll(".concept-pillar-card");
  const imgElement = document.getElementById("concept-interactive-img");
  const badgeTitle = document.getElementById("concept-badge-title");
  const badgeDesc = document.getElementById("concept-badge-desc");

  if (!cards.length || !imgElement) return;

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const data = pillarsData[index];
      if (data) {
        imgElement.style.opacity = "0.4";
        setTimeout(() => {
          imgElement.src = data.image;
          imgElement.style.opacity = "1";
          if (badgeTitle) badgeTitle.textContent = data.badgeTitle;
          if (badgeDesc) badgeDesc.textContent = data.badgeDesc;
        }, 180);
      }
    });
  });
}

/* Filtros da Galeria de Residências */
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".residence-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category") || "";
        const match = filter === "all" || category.split(" ").includes(filter);
        if (match) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

/* Modal de Visualização Rápida & Memorial da Casa */
function initModal() {
  const modalOverlay = document.getElementById("residence-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const triggerBtns = document.querySelectorAll(".btn-open-memorial");

  if (!modalOverlay) return;

  const openModal = (houseId) => {
    const house = residencesData.find(h => h.id === houseId);
    if (!house) return;

    // Preenche dados no modal
    document.getElementById("modal-image").src = house.image;
    document.getElementById("modal-title").textContent = house.name;
    document.getElementById("modal-architect").textContent = `Assinado por ${house.architect}`;
    document.getElementById("modal-area").textContent = house.area;
    document.getElementById("modal-suites").textContent = house.suites;
    document.getElementById("modal-land").textContent = house.land;
    document.getElementById("modal-garage").textContent = house.garage;
    document.getElementById("modal-desc").textContent = house.fullDescription;
    document.getElementById("modal-highlight").textContent = house.highlight;

    // Tags de materiais
    const materialsContainer = document.getElementById("modal-materials");
    if (materialsContainer) {
      materialsContainer.innerHTML = house.materials
        .map(m => `<span class="material-tag">${m}</span>`)
        .join("");
    }

    // Configura botão do formulário no modal
    const modalInterestBtn = document.getElementById("modal-interest-btn");
    if (modalInterestBtn) {
      modalInterestBtn.onclick = () => {
        closeModal();
        const select = document.getElementById("input-residence");
        if (select) select.value = house.name;
        const contatoSec = document.getElementById("contato");
        if (contatoSec) {
          contatoSec.scrollIntoView({ behavior: "smooth" });
        } else {
          const waModal = document.getElementById("whatsapp-modal");
          if (waModal) {
            waModal.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        }
      };
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const houseId = btn.getAttribute("data-house-id");
      openModal(houseId);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Fechar ao clicar fora
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Fechar com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

/* Envio do Formulário de Contato e Briefing */
function initContactForm() {
  const form = document.getElementById("private-consultation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("input-name")?.value || "";
    const phone = document.getElementById("input-phone")?.value || "";
    const email = document.getElementById("input-email")?.value || "";
    const residence = document.getElementById("input-residence")?.value || "Todas / Consulta Geral";
    const notes = document.getElementById("input-notes")?.value || "";

    // Mensagem formatada para WhatsApp Concierge
    const whatsappMsg = `Olá! Gostaria de agendar uma apresentação privada do projeto BY ARCH (Maxicon Incorporadora).\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Residência de Interesse:* ${residence}\n*Mensagem:* ${notes}`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    const whatsappUrl = `https://wa.me/5554996225703?text=${encodedMsg}`;

    // Feedback visual elegante
    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span>Solicitação Encaminhada! Abrindo WhatsApp...</span>`;
    btn.style.background = "var(--accent-green)";

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      btn.innerHTML = originalText;
      btn.style.background = "";
      form.reset();
    }, 1200);
  });
}

/**
 * Modal de Atendimento Exclusivo via WhatsApp
 * Coleta Nome, E-mail e Telefone antes de abrir o chat
 */
function initWhatsAppModal() {
  const modal = document.getElementById("whatsapp-modal");
  if (!modal) return;

  const openBtns = document.querySelectorAll("#open-whatsapp-modal, .open-whatsapp-modal-trigger, #mobile-whatsapp-btn, #footer-cta-agendar");
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

      let pageContext = "Projetos e Coleção BY ARCH";
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

/* ==========================================================================
   SEÇÃO: NOAH RESERVA NATURAL (Animações de Scroll & Carrossel Interativo)
   ========================================================================== */

/**
 * Animação Cinética do Título e Faixa de Métricas (IntersectionObserver)
 * Cada palavra surge individualmente com 120ms de intervalo
 */
function initNoahAnimations() {
  const titleEl = document.getElementById("noah-title");
  const metricsEl = document.getElementById("noah-metrics");

  if (titleEl) {
    const titleObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titleEl.classList.add("is-revealed");
          obs.unobserve(titleEl);
        }
      });
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15
    });
    titleObserver.observe(titleEl);
  }

  if (metricsEl) {
    const metricsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          metricsEl.classList.add("is-revealed");
          obs.unobserve(metricsEl);
        }
      });
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15
    });
    metricsObserver.observe(metricsEl);
  }
}

/**
 * Carrossel de Fotos do Noah com Setas Laterais & Miniaturas
 */
function initNoahGallery() {
  const mainPhoto = document.getElementById("noah-main-photo");
  const prevBtn = document.getElementById("noah-gallery-prev");
  const nextBtn = document.getElementById("noah-gallery-next");
  const thumbBtns = Array.from(document.querySelectorAll(".noah-thumb-btn"));
  const wrap = document.querySelector(".noah-main-photo-wrap");

  if (!mainPhoto || thumbBtns.length === 0) return;

  let currentIndex = 0;
  const total = thumbBtns.length;

  function updateGallery(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;

    const activeBtn = thumbBtns[currentIndex];
    const nextSrc = activeBtn.getAttribute("data-src");

    mainPhoto.classList.add("is-switching");
    setTimeout(() => {
      mainPhoto.src = nextSrc;
      mainPhoto.onload = () => {
        mainPhoto.classList.remove("is-switching");
      };
      // Em caso de imagem em cache que não dispara onload de imediato
      setTimeout(() => mainPhoto.classList.remove("is-switching"), 120);
    }, 150);

    thumbBtns.forEach((btn, i) => {
      btn.classList.toggle("is-active", i === currentIndex);
    });

    // Centraliza a miniatura ativa na barra horizontal
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateGallery(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      updateGallery(currentIndex + 1);
    });
  }

  thumbBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentIndex !== index) {
        updateGallery(index);
      }
    });
  });

  // Elementos do Modal Lightbox da Galeria Noah (Mobile)
  const modalOverlay = document.getElementById("noah-gallery-modal");
  const modalImg = document.getElementById("noah-modal-img");
  const modalCounter = document.getElementById("noah-modal-counter");
  const modalCloseBtn = document.getElementById("noah-modal-close");
  const modalPrevBtn = document.getElementById("noah-modal-prev");
  const modalNextBtn = document.getElementById("noah-modal-next");
  const modalImgWrap = document.getElementById("noah-modal-img-wrap");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function updateNoahModal(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    // Sincroniza a galeria em segundo plano na página
    updateGallery(index);

    if (modalImg) {
      const activeBtn = thumbBtns[currentIndex];
      const nextSrc = activeBtn ? activeBtn.getAttribute("data-src") : "";
      const altText = activeBtn ? (activeBtn.querySelector("img")?.alt || "Foto Noah Reserva Natural") : "";

      modalImg.style.opacity = "0.4";
      modalImg.style.transform = "scale(0.98)";
      setTimeout(() => {
        modalImg.src = nextSrc;
        modalImg.alt = altText;
        modalImg.onload = () => {
          modalImg.style.opacity = "1";
          modalImg.style.transform = "scale(1)";
        };
        setTimeout(() => {
          modalImg.style.opacity = "1";
          modalImg.style.transform = "scale(1)";
        }, 120);
      }, 100);
    }

    if (modalCounter) {
      modalCounter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }
  }

  function openNoahModal(index) {
    if (!modalOverlay) return;
    updateNoahModal(index);
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeNoahModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeNoahModal();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay || e.target.classList.contains("gallery-modal-container")) {
        closeNoahModal();
      }
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      updateNoahModal(currentIndex - 1);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      updateNoahModal(currentIndex + 1);
    });
  }

  // Swipe dentro da modal no mobile
  const swipeTarget = modalImgWrap || modalOverlay;
  if (swipeTarget) {
    let mStartX = 0;
    let mStartY = 0;
    swipeTarget.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches[0]) {
        mStartX = e.touches[0].clientX;
        mStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    swipeTarget.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const mEndX = e.changedTouches[0].clientX;
        const mEndY = e.changedTouches[0].clientY;
        const mDiffX = mStartX - mEndX;
        const mDiffY = mStartY - mEndY;

        if (Math.abs(mDiffX) > Math.abs(mDiffY) && Math.abs(mDiffX) > 40) {
          if (mDiffX > 0) {
            updateNoahModal(currentIndex + 1);
          } else {
            updateNoahModal(currentIndex - 1);
          }
        }
      }
    }, { passive: true });
  }

  // Suporte a gestos touch swipe em telas móveis e abertura de modal ao clicar
  if (wrap) {
    let startX = 0;
    let startY = 0;
    let hasMoved = false;
    let justSwiped = false;

    wrap.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches[0]) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
      hasMoved = false;
    }, { passive: true });

    wrap.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        const curX = e.touches[0].clientX;
        const curY = e.touches[0].clientY;
        if (Math.abs(curX - startX) > 10 || Math.abs(curY - startY) > 10) {
          hasMoved = true;
        }
      }
    }, { passive: true });

    wrap.addEventListener("touchend", (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
          justSwiped = true;
          setTimeout(() => { justSwiped = false; }, 350);
          if (diffX > 0) {
            updateGallery(currentIndex + 1);
          } else {
            updateGallery(currentIndex - 1);
          }
        }
      }
    }, { passive: true });

    // Clique na imagem no mobile abre a modal; desktop permanece inalterado
    wrap.addEventListener("click", (e) => {
      // Ignora clique se foi nos botões de seta da galeria
      if (e.target.closest(".noah-gallery-btn")) return;
      // Ignora se o usuário estava arrastando/swiping
      if (hasMoved || justSwiped) return;

      // Abre modal EXCLUSIVAMENTE em telas mobile (<= 768px)
      if (isMobile()) {
        e.preventDefault();
        openNoahModal(currentIndex);
      }
    });
  }

  // Suporte às teclas do teclado
  document.addEventListener("keydown", (e) => {
    // Se a modal estiver aberta, o teclado controla a modal ou fecha com Escape
    if (modalOverlay && modalOverlay.classList.contains("active")) {
      if (e.key === "Escape") {
        closeNoahModal();
      } else if (e.key === "ArrowLeft") {
        updateNoahModal(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        updateNoahModal(currentIndex + 1);
      }
      return;
    }

    // Teclado na página quando a seção estiver visível
    const rect = wrap?.getBoundingClientRect();
    if (!rect) return;
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === "ArrowLeft") {
      updateGallery(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      updateGallery(currentIndex + 1);
    }
  });
}

/**
 * Modal de Cadastro para Download do Catálogo / Apresentação (PDF)
 * Capta Nome e E-mail, salva Lead e dispara download do PDF
 */
function initDownloadModal() {
  const modal = document.getElementById("download-modal");
  if (!modal) return;

  const openBtns = document.querySelectorAll(".open-download-modal-trigger, #noah-catalog-btn");
  const closeBtn = document.getElementById("download-modal-close");
  const form = document.getElementById("download-project-form");
  const nameInput = document.getElementById("dl-name");
  const emailInput = document.getElementById("dl-email");
  const submitBtn = document.getElementById("download-submit-btn");
  const successMsg = document.getElementById("download-success-msg");
  const hiddenUrl = document.getElementById("download-pdf-url");
  const hiddenFilename = document.getElementById("download-pdf-filename");

  let currentPdfUrl = (hiddenUrl && hiddenUrl.value) ? hiddenUrl.value : "assets/NOAH/Catalogo-Noah.pdf";
  let currentPdfFilename = (hiddenFilename && hiddenFilename.value) ? hiddenFilename.value : "Catalogo-Noah.pdf";

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
          <span>Baixar Catálogo (PDF)</span>
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
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";

      if (!name || !email) return;

      // Armazenamento do Lead no LocalStorage
      try {
        const lead = {
          nome: name,
          email: email,
          origem: "Catálogo Noah Reserva Natural",
          arquivo: currentPdfFilename,
          data: new Date().toISOString()
        };
        const leads = JSON.parse(localStorage.getItem("maxicon_leads_download") || "[]");
        leads.push(lead);
        localStorage.setItem("maxicon_leads_download", JSON.stringify(leads));
      } catch (err) {
        // Fallback silencioso
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
          <span>Iniciando download...</span>
        `;
      }

      // Exibir aviso de sucesso com link de contingência
      if (successMsg) {
        successMsg.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Download iniciado! Caso não inicie automaticamente, <a href="${currentPdfUrl}" download="${currentPdfFilename}" target="_blank" class="download-fallback-link">clique aqui</a>.</span>
        `;
        successMsg.style.display = "flex";
      }

      // Dispara download automático do PDF
      const downloadLink = document.createElement("a");
      downloadLink.href = currentPdfUrl;
      downloadLink.setAttribute("download", currentPdfFilename);
      downloadLink.setAttribute("target", "_blank");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Fecha o modal suavemente após 3s
      setTimeout(() => {
        closeModal();
        form.reset();
      }, 3000);
    });
  }
}

/**
 * Garante rotação contínua e fluida do Marquee de Logos dos Arquitetos (ARCH BY TALENTS) no mobile
 * Evita engasgos, pausas por toque ou atrasos de cálculo de layout de imagens
 */
function initTalentsMarquee() {
  const track = document.querySelector(".talents-marquee-track");
  if (!track) return;

  function ensureMarqueeRunning() {
    if (window.innerWidth <= 768) {
      track.style.animationPlayState = "running";
      track.style.webkitAnimationPlayState = "running";
    }
  }

  // Desperta a animação quando a seção entra em visão no mobile
  if ("IntersectionObserver" in window) {
    const marqueeWrap = document.querySelector(".talents-marquee-wrap") || track;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ensureMarqueeRunning();
        }
      });
    }, { threshold: 0.05 });
    observer.observe(marqueeWrap);
  }

  // Recalcula reflow suave caso logos terminem de carregar tardiamente
  window.addEventListener("load", () => {
    ensureMarqueeRunning();
  }, { once: true });

  window.addEventListener("resize", ensureMarqueeRunning, { passive: true });
}

/**
 * Navegação suave para links do rodapé em páginas com âncoras locais
 */
function initFooterNavigation() {
  const isIndex = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || !window.location.pathname.includes(".html");
  if (!isIndex) return;

  const footerLinks = document.querySelectorAll(".footer-link[href*=\"#\"], .footer-logo-link");
  footerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (link.classList.contains("footer-logo-link") && (href === "index.html" || href === "#hero")) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (href && href.includes("#")) {
        const hash = href.split("#")[1];
        const target = document.getElementById(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", "#" + hash);
        }
      }
    });
  });
}

