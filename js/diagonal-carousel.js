/**
 * ==============================================================================
 * CARROSSEL 3D EM TRAJETÓRIA DIAGONAL — BY ARCH MAXICON
 * Catálogo de Escritórios de Arquitetura
 * ==============================================================================
 * - Cinemática tridimensional em curva diagonal ascendente/descendente
 * - Suporte a mouse drag, touch swipe, setas de teclado e botões de controle
 * - Transição fluida de 650ms com aceleração por GPU (transform3d)
 * - Sincronização de contador (01/12), barra de progresso e metadados
 * - Prevenção de clique acidental no CTA durante arraste
 * - Respeito a prefers-reduced-motion
 */

(function () {
  'use strict';

  function initDiagonalCarousel() {
    const stage = document.querySelector('.arch-diagonal-stage');
    if (!stage) return;

    const track = stage.querySelector('.arch-track');
    const cards = Array.from(stage.querySelectorAll('.arch-card'));
    const prevBtn = stage.querySelector('.arch-nav-btn.prev');
    const nextBtn = stage.querySelector('.arch-nav-btn.next');
    const currentNumEl = stage.querySelector('.arch-counter-current');
    const totalNumEl = stage.querySelector('.arch-counter-total');
    const progressBar = stage.querySelector('.arch-progress-fill');
    const activeLabelEl = stage.querySelector('.arch-active-name');

    if (!track || cards.length === 0) return;

    const total = cards.length;
    let activeIndex = 0;
    let isAnimating = false;
    const animationDuration = 650; // ms

    // Preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Atualiza o total no contador
    if (totalNumEl) {
      totalNumEl.textContent = String(total).padStart(2, '0');
    }

    /**
     * Calcula as propriedades 3D para cada offset relativo ao card ativo
     */
    function getCardStyle(offset, viewportWidth) {
      const isMobile = viewportWidth < 768;
      const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

      // Parâmetros geométricos adaptados à viewport
      let xStep, yStep, zStep, maxVisible;

      if (isMobile) {
        xStep = Math.min(viewportWidth * 0.44, 185);
        yStep = 28;
        zStep = -90;
        maxVisible = 1; // apenas ±1 visível para manter a tela limpa e sem cortes
      } else if (isTablet) {
        xStep = 240;
        yStep = 55;
        zStep = -120;
        maxVisible = 2; // ±2 visíveis
      } else {
        // Desktop
        xStep = 330;
        yStep = 75;
        zStep = -140;
        maxVisible = 3; // ±3 visíveis na trajetória diagonal
      }

      const absOffset = Math.abs(offset);

      // Cards além do limite visível ficam ocultos
      if (absOffset > maxVisible) {
        const sign = offset < 0 ? -1 : 1;
        const x = sign * (xStep * (maxVisible + 1));
        const y = sign * (yStep * (maxVisible + 1));
        return {
          transform: `translate3d(${x}px, ${y}px, -450px) scale(0.5)`,
          opacity: 0,
          filter: 'blur(8px)',
          zIndex: 1,
          pointerEvents: 'none',
          visibility: 'hidden'
        };
      }

      // Cinemática da trajetória diagonal ascendente/descendente
      const x = offset * xStep;
      // Curva diagonal com leve elevação orgânica
      const y = offset * yStep;
      const z = offset === 0 ? 0 : absOffset * zStep;

      // Escala progressiva
      let scale;
      if (offset === 0) {
        scale = isMobile ? 1.0 : 1.05;
      } else if (absOffset === 1) {
        scale = isMobile ? 0.84 : 0.87;
      } else if (absOffset === 2) {
        scale = 0.72;
      } else {
        scale = 0.58;
      }

      // Rotação diagonal sutil para reforçar tridimensionalidade
      const rotZ = isMobile ? 0 : offset * 1.8; // graus

      // Opacidade e Desfoque cinematográfico
      let opacity, blur;
      if (offset === 0) {
        opacity = 1;
        blur = 0;
      } else if (absOffset === 1) {
        opacity = isMobile ? 0.45 : 0.82;
        blur = isMobile ? 1.5 : 1;
      } else if (absOffset === 2) {
        opacity = 0.45;
        blur = 3;
      } else {
        opacity = 0.18;
        blur = 6;
      }

      const zIndex = 20 - absOffset * 3;

      return {
        transform: `translate3d(${x}px, ${y}px, ${z}px) scale3d(${scale}, ${scale}, 1) rotateZ(${rotZ}deg)`,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        zIndex,
        pointerEvents: offset === 0 ? 'auto' : 'auto', // permite clicar para focar
        visibility: 'visible'
      };
    }

    /**
     * Aplica o layout atual aos cards e sincroniza controles
     */
    function updateCarousel(immediate = false) {
      const vw = window.innerWidth;

      cards.forEach((card, index) => {
        // Distância cíclica
        let offset = (index - activeIndex) % total;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        const style = getCardStyle(offset, vw);

        card.style.transition = immediate || prefersReducedMotion
          ? 'none'
          : `transform ${animationDuration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${animationDuration}ms ease, filter ${animationDuration}ms ease`;

        card.style.transform = style.transform;
        card.style.opacity = style.opacity;
        card.style.filter = style.filter;
        card.style.zIndex = style.zIndex;
        card.style.pointerEvents = style.pointerEvents;
        card.style.visibility = style.visibility;

        // Atributos de acessibilidade e estados
        if (offset === 0) {
          card.classList.add('is-active');
          card.setAttribute('aria-hidden', 'false');
          card.setAttribute('tabindex', '0');
        } else {
          card.classList.remove('is-active');
          card.setAttribute('aria-hidden', 'true');
          card.setAttribute('tabindex', '-1');
        }

        // Armazena o offset atual no card para cliques direcionados
        card.dataset.offset = offset;
      });

      // Sincroniza contador numérico (ex: 01)
      if (currentNumEl) {
        currentNumEl.textContent = String(activeIndex + 1).padStart(2, '0');
      }

      // Sincroniza barra de progresso linear
      if (progressBar) {
        const progressPercent = ((activeIndex + 1) / total) * 100;
        progressBar.style.width = `${progressPercent}%`;
      }

      // Sincroniza nome do escritório ativo
      const activeCard = cards[activeIndex];
      if (activeCard) {
        const name = activeCard.dataset.name || '';

        if (activeLabelEl && activeLabelEl.textContent !== name) {
          activeLabelEl.style.opacity = '0';
          setTimeout(() => {
            activeLabelEl.textContent = name;
            activeLabelEl.style.opacity = '1';
          }, 180);
        }
      }
    }

    /**
     * Navegação para índice específico
     */
    function goToIndex(newIndex) {
      if (isAnimating) return;
      isAnimating = true;

      // Normaliza índice cíclico
      activeIndex = (newIndex % total + total) % total;
      updateCarousel();

      setTimeout(() => {
        isAnimating = false;
      }, prefersReducedMotion ? 50 : animationDuration);
    }

    function next() {
      goToIndex(activeIndex + 1);
    }

    function prev() {
      goToIndex(activeIndex - 1);
    }

    // ==========================================================================
    // LISTENERS DE BOTÕES
    // ==========================================================================
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        next();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prev();
      });
    }

    // Clique em cards laterais traz o card para o centro
    cards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        // Se o clique foi no botão/link do CTA do card ativo, deixa abrir normalmente
        if (e.target.closest('.arch-card-cta') && index === activeIndex) {
          return;
        }

        const offset = parseInt(card.dataset.offset, 10);
        if (offset !== 0) {
          e.preventDefault();
          goToIndex(index);
        }
      });
    });

    // ==========================================================================
    // NAVEGAÇÃO POR TECLADO
    // ==========================================================================
    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    });

    // ==========================================================================
    // ARRASTE POR MOUSE (DESKTOP) E TOUCH SWIPE (MOBILE)
    // ==========================================================================
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;
    let hasMoved = false;
    let startTime = 0;
    const dragThreshold = 40; // pixels para disparar troca

    function onPointerDown(clientX, clientY) {
      startX = clientX;
      startY = clientY;
      currentX = clientX;
      isDragging = true;
      hasMoved = false;
      startTime = Date.now();
      track.classList.add('is-dragging');
    }

    function onPointerMove(clientX, clientY, e) {
      if (!isDragging) return;
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      // Se o usuário estiver rolando verticalmente a página no mobile, não bloqueia
      if (!hasMoved && Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        isDragging = false;
        track.classList.remove('is-dragging');
        return;
      }

      if (Math.abs(deltaX) > 8) {
        hasMoved = true;
        if (e && e.cancelable) {
          e.preventDefault(); // trava rolagem horizontal indesejada
        }
      }
      currentX = clientX;
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('is-dragging');

      const deltaX = currentX - startX;
      const elapsed = Date.now() - startTime;

      // Gestor rápido (< 300ms com deslocamento >= 25px) ou arraste padrão (>= 40px)
      if (Math.abs(deltaX) >= dragThreshold || (elapsed < 300 && Math.abs(deltaX) >= 25)) {
        if (deltaX < 0) {
          next();
        } else {
          prev();
        }
      }
    }

    // Eventos de Mouse
    track.addEventListener('mousedown', (e) => {
      // Ignora clique com botão direito
      if (e.button !== 0) return;
      onPointerDown(e.clientX, e.clientY);

      function onMouseMove(moveEvent) {
        onPointerMove(moveEvent.clientX, moveEvent.clientY, moveEvent);
      }

      function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        onPointerUp();
      }

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });

    // Supressão de clique acidental em links se houve arraste com o mouse
    track.addEventListener('click', (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        hasMoved = false;
      }
    }, true);

    // Eventos de Toque (Mobile/Tablet)
    track.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      onPointerDown(touch.clientX, touch.clientY);
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      onPointerMove(touch.clientX, touch.clientY, e);
    }, { passive: false });

    track.addEventListener('touchend', () => {
      onPointerUp();
    }, { passive: true });

    track.addEventListener('touchcancel', () => {
      isDragging = false;
      track.classList.remove('is-dragging');
    }, { passive: true });

    // ==========================================================================
    // REDIMENSIONAMENTO DE JANELA
    // ==========================================================================
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateCarousel(true);
      }, 100);
    });

    // Inicialização
    updateCarousel(true);
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagonalCarousel);
  } else {
    initDiagonalCarousel();
  }
})();
