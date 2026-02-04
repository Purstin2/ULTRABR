// JS principal do projeto Mega Pack STL
// Aqui você pode colocar os comportamentos da página.

// Tratamento de erros global
window.addEventListener("error", (e) => {
  console.error("Erro capturado:", e.error);
});

// Função para capturar UTMs e adicionar à URL de destino
function getUtmParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();

  // Lista de parâmetros UTM para capturar
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'];

  // 1ª PRIORIDADE: UTMs da URL atual
  utmKeys.forEach(key => {
    if (urlParams.has(key)) {
      utmParams.set(key, urlParams.get(key));
    }
  });

  // 2ª PRIORIDADE: Se não encontrou na URL, pega do sessionStorage (capturadas no carregamento)
  if (utmParams.toString() === '') {
    try {
      const capturedUtms = sessionStorage.getItem('captured_utms');
      if (capturedUtms) {
        const parsed = JSON.parse(capturedUtms);
        utmKeys.forEach(key => {
          if (parsed[key]) {
            utmParams.set(key, parsed[key]);
          }
        });
      }
    } catch (e) {
      console.log('Erro ao ler UTMs do sessionStorage:', e);
    }
  }

  // 3ª PRIORIDADE: Tenta pegar do localStorage (onde Utmify pode salvar)
  if (utmParams.toString() === '') {
    try {
      const utmifyData = localStorage.getItem('utms');
      if (utmifyData) {
        const parsed = JSON.parse(utmifyData);
        utmKeys.forEach(key => {
          if (parsed[key]) {
            utmParams.set(key, parsed[key]);
          }
        });
      }
    } catch (e) {
      console.log('Erro ao ler UTMs do localStorage:', e);
    }
  }

  return utmParams.toString();
}

// Função para redirecionar com UTMs
function redirectWithUtm(url) {
  const utmString = getUtmParams();
  const separator = url.includes('?') ? '&' : '?';
  const finalUrl = utmString ? `${url}${separator}${utmString}` : url;
  console.log('Redirecionando para:', finalUrl);
  window.location.href = finalUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado com sucesso!");

  // Log das UTMs detectadas (DEBUG)
  const utms = getUtmParams();
  console.log('========== DEBUG UTMs ==========');
  console.log('URL atual:', window.location.href);
  console.log('Parâmetros UTM que serão enviados:', utms || 'NENHUM');

  // Verificar sessionStorage (captura imediata)
  try {
    const capturedUtms = sessionStorage.getItem('captured_utms');
    console.log('UTMs capturadas (sessionStorage):', capturedUtms || 'NENHUM');
  } catch (e) {
    console.log('Erro ao ler sessionStorage:', e);
  }

  // Verificar localStorage do Utmify
  try {
    const utmifyData = localStorage.getItem('utms');
    console.log('Dados Utmify (localStorage):', utmifyData || 'NENHUM');
  } catch (e) {
    console.log('Erro ao ler localStorage:', e);
  }

  console.log('================================');

  // Alerta visual se UTMs foram detectadas (apenas para testes - remova depois)
  if (utms) {
    console.log('%c✓ UTMs DETECTADAS E SERÃO PROPAGADAS!', 'color: green; font-size: 16px; font-weight: bold;');
  } else {
    console.log('%c⚠ NENHUMA UTM DETECTADA - Verifique se está acessando com ?utm_source=...', 'color: orange; font-size: 14px;');
  }

  // Atualiza automaticamente o ano no rodapé
  const yearSpan = document.getElementById("ano-atual");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Botão principal - rola até a seção de preços
  const btnComprar = document.getElementById("btn-comprar");
  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      const secaoPrecos = document.getElementById("secao-precos");
      if (secaoPrecos) {
        secaoPrecos.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Botão btn-comprar-final foi removido do HTML
  // const btnComprarFinal = document.getElementById("btn-comprar-final");
  // if (btnComprarFinal) {
  //   btnComprarFinal.addEventListener("click", () => {
  //     // Rola até a seção de preços
  //     const secaoPrecos = document.getElementById("secao-precos");
  //     if (secaoPrecos) {
  //       secaoPrecos.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   });
  // }

  // Botão Pacote Básico - Abre modal de upgrade
  const btnComprarBasico = document.getElementById("btn-comprar-basico");
  const upgradeModal = document.getElementById("upgrade-modal");
  const btnUpgradeYes = document.getElementById("btn-upgrade-yes");
  const btnUpgradeNo = document.getElementById("btn-upgrade-no");

  if (btnComprarBasico && upgradeModal) {
    btnComprarBasico.addEventListener("click", (e) => {
      e.preventDefault();
      upgradeModal.classList.add("active");
    });
  }

  // Botão "Sim, quero o desconto" - Interceptar clique para adicionar UTMs
  if (btnUpgradeYes) {
    btnUpgradeYes.addEventListener("click", (e) => {
      e.preventDefault();
      redirectWithUtm("https://seguro.blorati.com/checkout/206784115:1");
    });
  }

  // Botão "Não, obrigado" - Redireciona para Básico e fecha modal
  if (btnUpgradeNo) {
    btnUpgradeNo.addEventListener("click", () => {
      upgradeModal.classList.remove("active");
      redirectWithUtm("https://seguro.blorati.com/checkout/206784115:1");
    });
  }

  // Fechar modal ao clicar no overlay
  if (upgradeModal) {
    const overlay = upgradeModal.querySelector(".upgrade-modal__overlay");
    if (overlay) {
      overlay.addEventListener("click", () => {
        upgradeModal.classList.remove("active");
      });
    }
  }

  // Botão Pacote Premium
  const btnComprarPremium = document.getElementById("btn-comprar-premium");
  if (btnComprarPremium) {
    btnComprarPremium.addEventListener("click", () => {
      redirectWithUtm("https://seguro.blorati.com/checkout/206784115:1");
    });
  }

  // Botão Comprar com Garantia
  const btnComprarGarantia = document.getElementById("btn-comprar-garantia");
  if (btnComprarGarantia) {
    btnComprarGarantia.addEventListener("click", () => {
      // Rola até a seção de preços
      const secaoPrecos = document.getElementById("secao-precos");
      if (secaoPrecos) {
        secaoPrecos.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Carrossel da Galeria
  const carousel = document.querySelector(".gallery-carousel");
  if (carousel) {
    const track = carousel.querySelector(".gallery-carousel__track");
    const slides = carousel.querySelectorAll(".gallery-carousel__slide");
    const prevBtn = carousel.querySelector(".gallery-carousel__btn--prev");
    const nextBtn = carousel.querySelector(".gallery-carousel__btn--next");
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;

    const updateCarousel = () => {
      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    };

    const nextSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    };

    const prevSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    };

    // Inicializa o carrossel
    updateCarousel();

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  }

  // Carrossel de Depoimentos WhatsApp
  const whatsappCarousel = document.querySelector(".whatsapp-carousel");
  if (whatsappCarousel) {
    const whatsappTrack = whatsappCarousel.querySelector(".whatsapp-carousel__track");
    const whatsappSlides = whatsappCarousel.querySelectorAll(".whatsapp-carousel__slide");
    const whatsappPrevBtn = whatsappCarousel.querySelector(".whatsapp-carousel__btn--prev");
    const whatsappNextBtn = whatsappCarousel.querySelector(".whatsapp-carousel__btn--next");
    
    let whatsappCurrentIndex = 0;
    const whatsappTotalSlides = whatsappSlides.length;
    let whatsappIsTransitioning = false;

    const updateWhatsappCarousel = () => {
      if (whatsappTrack) {
        whatsappTrack.style.transform = `translateX(-${whatsappCurrentIndex * 100}%)`;
      }
    };

    const whatsappNextSlide = () => {
      if (whatsappIsTransitioning) return;
      whatsappIsTransitioning = true;
      whatsappCurrentIndex = (whatsappCurrentIndex + 1) % whatsappTotalSlides;
      updateWhatsappCarousel();
      setTimeout(() => {
        whatsappIsTransitioning = false;
      }, 400);
    };

    const whatsappPrevSlide = () => {
      if (whatsappIsTransitioning) return;
      whatsappIsTransitioning = true;
      whatsappCurrentIndex = (whatsappCurrentIndex - 1 + whatsappTotalSlides) % whatsappTotalSlides;
      updateWhatsappCarousel();
      setTimeout(() => {
        whatsappIsTransitioning = false;
      }, 400);
    };

    // Inicializa o carrossel
    updateWhatsappCarousel();

    if (whatsappNextBtn) whatsappNextBtn.addEventListener("click", whatsappNextSlide);
    if (whatsappPrevBtn) whatsappPrevBtn.addEventListener("click", whatsappPrevSlide);
  }
  
  // Timer de contagem regressiva
  const countdownTimer = document.getElementById("countdown-timer");
  if (countdownTimer) {
    let minutes = 13;
    let seconds = 22;
    
    const updateTimer = () => {
      countdownTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      
      if (seconds === 0) {
        if (minutes === 0) {
          // Reset para 13:22 quando chegar em 00:00
          minutes = 13;
          seconds = 22;
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
    };
    
    // Atualiza a cada segundo
    setInterval(updateTimer, 1000);
    // Atualiza imediatamente
    updateTimer();
  }
  
  // ========== PROTEÇÕES ANTI-INSPEÇÃO ==========
  const redirectAntiInspecionar = () => {
    window.location.href = "https://www.google.com/";
  };

  // Bloqueia clique com botão direito
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Bloqueia algumas teclas de atalho comuns (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S, Ctrl+P)
  document.addEventListener("keydown", (e) => {
    const key = e.key?.toLowerCase();

    // F12
    if (e.key === "F12") {
      e.preventDefault();
      redirectAntiInspecionar();
      return;
    }

    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
      e.preventDefault();
      redirectAntiInspecionar();
      return;
    }

    // Ctrl+U (ver código-fonte), Ctrl+S (salvar), Ctrl+P (imprimir)
    if (e.ctrlKey && ["u", "s", "p"].includes(key)) {
      e.preventDefault();
      redirectAntiInspecionar();
      return;
    }
  });

  // Bloqueia evento de cópia
  document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData?.setData("text/plain", "");
  });

  // Tentativa simples de detectar DevTools aberto por diferença de tamanho da janela
  setInterval(() => {
    const threshold = 160;
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      redirectAntiInspecionar();
    }
  }, 1000);

  // Atualizar TODOS os links para checkout automaticamente com UTMs
  function updateAllCheckoutLinks() {
    const checkoutLinks = document.querySelectorAll('a[href*="ggcheckout.com"]');
    checkoutLinks.forEach(link => {
      // Se ainda não tem evento click customizado
      if (!link.dataset.utmUpdated) {
        link.dataset.utmUpdated = "true";
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const originalUrl = link.getAttribute("href");
          redirectWithUtm(originalUrl);
        });
      }
    });
  }

  // Atualiza os links quando a página carrega
  updateAllCheckoutLinks();

  // Atualiza novamente após 1 segundo (caso algum elemento seja carregado dinamicamente)
  setTimeout(updateAllCheckoutLinks, 1000);

  console.log("JavaScript inicializado com sucesso! (proteções ativas)");
});



