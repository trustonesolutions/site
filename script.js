document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAccept = document.getElementById("cookie-accept");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Theme Toggle
  if (themeToggle) {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      themeToggle.checked = currentTheme === "dark";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggle.checked = false;
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
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

  // Smooth Scroll
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
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".stat-number").forEach((counter) => {
            const target = +counter.getAttribute("data-count");
            let current = 0;
            const increment = target / 200;

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
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(statsSection);
  }

  // ✅ Results Counter Animation (novo)
  const resultsSection = document.querySelector(".results-section");
  if (resultsSection) {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };

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
                counter.innerText =
                  target + (counter.dataset.suffix || "");
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
