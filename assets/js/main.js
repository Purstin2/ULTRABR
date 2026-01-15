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

  // Botão Pacote Básico
  const btnComprarBasico = document.getElementById("btn-comprar-basico");
  if (btnComprarBasico) {
    btnComprarBasico.addEventListener("click", () => {
      window.location.href = "https://malvoo.pay.yampi.com.br/r/N2DCMXP3LP";
    });
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

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    };

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto-play opcional (descomente se quiser)
    // setInterval(nextSlide, 5000);
  }
  
  console.log("JavaScript inicializado com sucesso!");
});

