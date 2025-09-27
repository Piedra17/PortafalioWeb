document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');
  let isOpen = false;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('rotate');
    toggle.innerHTML = isOpen ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    isOpen = !isOpen;
  });

  const textElement = document.getElementById("typing-text");
  if (textElement) {
    textElement.style.width = "0";
    textElement.style.animation = "none";
    setTimeout(() => {
      textElement.style.animation = "typing 4s steps(30, end) forwards, blink 0.7s step-end infinite";
    }, 100);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll(".cuadro, .titulo").forEach(el => {
    observer.observe(el);
  });
});
