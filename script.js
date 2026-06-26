document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  const rainContainer = document.querySelector(".rain");

  if (rainContainer) {
    for (let i = 0; i < 60; i++) {
      const drop = document.createElement("div");
      drop.classList.add("drop");

      drop.style.left = Math.random() * 100 + "vw";
      drop.style.animationDuration = (0.8 + Math.random() * 1.2) + "s";
      drop.style.opacity = Math.random() * 0.2;
      drop.style.height = (50 + Math.random() * 80) + "px";

      rainContainer.appendChild(drop);
    }
  }

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  const text = "Lautaro Casal";
  const target = document.getElementById("typed-name");

  if (target) {
    let i = 0;

    function type() {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(type, 120);
      } else {
        setTimeout(() => {
          target.textContent = "";
          i = 0;
          type();
        }, 3000);
      }
    }

    type();
  }

  const elements = document.querySelectorAll(
    "section, .project, .study-item, .item, .about-content"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "Lautt27",
        "template_emt5ngm",
        this
      ).then(() => {
        alert("Message sent successfully!");
        form.reset();
      }).catch((error) => {
        alert("Error sending message");
        console.log(error);
      });
    });
  }

});