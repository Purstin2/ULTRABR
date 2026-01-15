// JS principal do projeto Mega Pack STL
// Aqui você pode colocar os comportamentos da página.

// Tratamento de erros global
window.addEventListener("error", (e) => {
  console.error("Erro capturado:", e.error);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado com sucesso!");
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

  const btnComprarFinal = document.getElementById("btn-comprar-final");
  if (btnComprarFinal) {
    btnComprarFinal.addEventListener("click", () => {
      // Rola até a seção de preços
      const secaoPrecos = document.getElementById("secao-precos");
      if (secaoPrecos) {
        secaoPrecos.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

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

  // Botão "Sim, quero o desconto" - Redireciona para Premium
  if (btnUpgradeYes) {
    btnUpgradeYes.addEventListener("click", () => {
      window.location.href = "https://malvoo.pay.yampi.com.br/r/PSSIREOA8O";
    });
  }

  // Botão "Não, obrigado" - Redireciona para Básico e fecha modal
  if (btnUpgradeNo) {
    btnUpgradeNo.addEventListener("click", () => {
      upgradeModal.classList.remove("active");
      window.location.href = "https://malvoo.pay.yampi.com.br/r/N2DCMXP3LP";
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
      window.location.href = "https://malvoo.pay.yampi.com.br/r/PSSIREOA8O";
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
  
  console.log("JavaScript inicializado com sucesso!");
});

