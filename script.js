document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const container = document.querySelector(".testimonials-grid"); // pode ser null

  // ===== THEME TOGGLE (Desktop + Mobile sincronizado) =====
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) themeToggle.checked = theme === "dark";
    if (themeToggleMobile) themeToggleMobile.checked = theme === "dark";
  }

  // Carregar tema salvo ou padrão
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      applyTheme(themeToggle.checked ? "dark" : "light");
    });
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("change", () => {
      applyTheme(themeToggleMobile.checked ? "dark" : "light");
    });
  }

  // ===== COOKIE BANNER =====
  if (cookieBanner && cookieAccept) {
    const hasAcceptedCookies = localStorage.getItem("cookieConsent");
    if (!hasAcceptedCookies) {
      setTimeout(() => cookieBanner.classList.add("show"), 1000);
    }
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      cookieBanner.classList.remove("show");
    });
  }

  // ===== HAMBURGER MENU =====
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      })
    );
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===== FAQ ACCORDION =====
  document.querySelectorAll(".faq-item .faq-question").forEach((q) => {
    q.addEventListener("click", () =>
      q.parentElement.classList.toggle("active")
    );
  });

  // ===== TESTIMONIALS: shuffle (só se existir container) =====
  if (container) {
    const cards = Array.from(container.querySelectorAll(".testimonial-card"));
    if (cards.length > 1) {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      container.innerHTML = "";
      cards.forEach((card) => container.appendChild(card));
    }
  }

  // ===== TESTIMONIALS: scroll com roda do mouse =====
  const testimonialsGrid = document.querySelector(".testimonials-grid");
  if (testimonialsGrid) {
    testimonialsGrid.addEventListener(
      "wheel",
      (evt) => {
        if (evt.deltaY !== 0) {
          evt.preventDefault();
          testimonialsGrid.scrollBy({
            left: evt.deltaY < 0 ? -100 : 100, // move 100px por "tic"
            behavior: "smooth",
          });
        }
      },
      { passive: false }
    );
  }

  // ===== TESTIMONIALS: scroll-dots =====
  const dotsContainer = document.querySelector(".scroll-dots");
  if (testimonialsGrid && dotsContainer) {
    const cards = testimonialsGrid.querySelectorAll(".testimonial-card");

    // Cria as bolinhas automaticamente
    cards.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active"); // primeira ativa
      dotsContainer.appendChild(dot);

      // clique na bolinha -> scroll até o card
      dot.addEventListener("click", () => {
        testimonialsGrid.scrollTo({
          left: cards[index].offsetLeft,
          behavior: "smooth",
        });
      });
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    // Atualiza bolinha ativa conforme o scroll
    testimonialsGrid.addEventListener("scroll", () => {
      let scrollLeft = testimonialsGrid.scrollLeft;
      let cardWidth = cards[0].offsetWidth + 20; // 20px = gap aproximado
      let index = Math.round(scrollLeft / cardWidth);

      dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === index)
      );
    });
  }

  // ===== RESULTS COUNTER ANIMATION (Desktop + Mobile) =====
  const resultsSection = document.querySelector(".results-section");
  if (resultsSection) {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.2 }; // 20% visível

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".result-number").forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let current = 0;
            const increment = target / 200;

            const updateCounter = () => {
              if (current < target) {
                current += increment;
                counter.innerText =
                  Math.ceil(current) + (counter.dataset.suffix || "");
                setTimeout(updateCounter, 15);
              } else {
                counter.innerText = target + (counter.dataset.suffix || "");
              }
            };

            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(resultsSection);
  }
});
