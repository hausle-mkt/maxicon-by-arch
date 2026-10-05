/**
 * BY ARCH | Maxicon Incorporadora
 * Interatividade & Experiência Editorial
 */

// Dados completos das Residências Autorais da Coleção
const residencesData = [
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
});

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
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
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
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
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
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMsg}`;

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
