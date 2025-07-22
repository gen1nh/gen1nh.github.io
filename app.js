
    // Efeito parallax simples para a seção de projetos
    window.addEventListener("scroll", () => {
      const parallax = document.querySelector(".parallax-section");
      let offset = window.pageYOffset;
      if (parallax) {
        parallax.style.backgroundPositionY = offset * -0.4 + "px";
      }
      // sombra no header ao rolar
      document.querySelector("header").style.boxShadow =
        window.scrollY > 20
          ? "0 4px 12px rgba(0,0,0,0.2)"
          : "none";
    });