// JS principal do projeto Mega Pack STL
// Aqui você pode colocar os comportamentos da página.

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano no rodapé
  const yearSpan = document.getElementById("ano-atual");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Exemplo de clique no botão principal
  const btnComprar = document.getElementById("btn-comprar");
  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      // TODO: Substituir pela URL real de checkout do seu site
      alert("Aqui você pode redirecionar para a página de compra ou checkout.");
      // window.location.href = "URL_DO_CHECKOUT";
    });
  }

  const btnComprarFinal = document.getElementById("btn-comprar-final");
  if (btnComprarFinal) {
    btnComprarFinal.addEventListener("click", () => {
      // Mantém o mesmo comportamento do botão principal
      btnComprar?.click();
    });
  }

  // Botão Pacote Básico
  const btnComprarBasico = document.getElementById("btn-comprar-basico");
  if (btnComprarBasico) {
    btnComprarBasico.addEventListener("click", () => {
      // TODO: Substituir pela URL real de checkout do pacote básico
      alert("Redirecionando para checkout do Pacote Básico...");
      // window.location.href = "URL_DO_CHECKOUT_BASICO";
    });
  }

  // Botão Pacote Premium
  const btnComprarPremium = document.getElementById("btn-comprar-premium");
  if (btnComprarPremium) {
    btnComprarPremium.addEventListener("click", () => {
      // TODO: Substituir pela URL real de checkout do pacote premium
      alert("Redirecionando para checkout do Pacote Premium...");
      // window.location.href = "URL_DO_CHECKOUT_PREMIUM";
    });
  }

  // Botão Comprar com Garantia
  const btnComprarGarantia = document.getElementById("btn-comprar-garantia");
  if (btnComprarGarantia) {
    btnComprarGarantia.addEventListener("click", () => {
      // Mantém o mesmo comportamento do botão principal
      btnComprar?.click();
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
});

