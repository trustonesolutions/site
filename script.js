document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Theme Toggle - Função para aplicar o tema
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    // Sincronizar ambos os switches
    if (themeToggle) {
      themeToggle.checked = theme === "dark";
    }
    if (themeToggleMobile) {
      themeToggleMobile.checked = theme === "dark";
    }
  }

  // Carregar tema salvo ou usar padrão
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  // Event listener para o switch desktop
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const newTheme = themeToggle.checked ? "dark" : "light";
      applyTheme(newTheme);
    });
  }

  // Event listener para o switch mobile
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("change", () => {
      const newTheme = themeToggleMobile.checked ? "dark" : "light";
      applyTheme(newTheme);
    });
  }

  // Cookie Banner
  if (cookieBanner && cookieAccept) {
    const hasAcceptedCookies = localStorage.getItem("cookieConsent");
    if (!hasAcceptedCookies) {
      setTimeout(() => {
        cookieBanner.classList.add("show");
      }, 1000);
    }

    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      cookieBanner.classList.remove("show");
    });
  }

  // Hamburger Menu
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

  // Smooth Scroll for internal links (if any)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Stats Counter Animation
  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".stat-number").forEach((counter) => {
            const target = +counter.getAttribute("data-count");
            let current = 0;
            const increment = target / 200; // Adjust for speed

            const updateCounter = () => {
              if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 1);
              } else {
                counter.innerText = target;
              }
            };
            updateCounter();
          });
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    observer.observe(statsSection);
  }
});

