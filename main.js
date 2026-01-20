


/* ===== WAIT FOR DOM ===== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== HAMBURGER MENU ===== */
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (!menu || !icon) return;
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleMenu);
  }

  /* ===== TYPING EFFECT ===== */
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const text =
      "I'm a young graphic designer who loves creating clean, eye-catching visuals and bringing ideas to life through design. I enjoy experimenting with colors, layouts, and typography while building designs that actually mean something. I've worked on different projects for both digital and print, and I'm always learning new skills, improving my style, and pushing myself to get better with every design.";

    let index = 0;

    function typeText() {
      typingElement.textContent += text.charAt(index);
      index++;
      if (index < text.length) {
        setTimeout(typeText, 30);
      } else {
        typingElement.classList.add("done");
      }
    }

    typeText();
  }

  /* ===== REVEAL ON SCROLL ===== */
  const reveals = document.querySelectorAll(".reveal, .reveal-icon");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===== PROJECT CARDS POP-IN ===== */
  const cards = document.querySelectorAll(".details-container");

  if (cards.length) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }



  const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

  /* ===== CONTACT FORM (FORMSPREE) ===== */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          status.textContent = "✅ Message sent successfully!";
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = "❌ Something went wrong. Try again.";
          status.style.color = "red";
        }
      } catch (error) {
        status.textContent = "❌ Network error. Try again.";
        status.style.color = "red";
        console.error(error);
      }
    });
  }

});

/* ===== FOOTER REVEAL ===== */
const footer = document.querySelector("footer");

if (footer) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-show");
        footerObserver.unobserve(footer);
      }
    },
    { threshold: 0.2 }
  );

  footerObserver.observe(footer);
}

