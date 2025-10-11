//menu con efecto glass que se active al hacer scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('reduce-header');
    } else {
      header.classList.remove('reduce-header');
    }
  });

//menu responsive con movimiento

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

function restartTyping() {
  textElement.style.animation = "none";
  textElement.offsetHeight; 
  textElement.style.animation = "typingLoop 30s steps(60, end), blink 0.7s step-end infinite";
}

restartTyping();
setInterval(restartTyping, 25000);



//paralx para los proyectos

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



//skills
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('visible');
      const percent = el.dataset.percent;
      el.querySelector('.percent-bar span').style.width = percent + '%';
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));


function animatePercentText(el, target) {
  let count = 0;
  const step = Math.ceil(target / 30); // velocidad
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = count + '%';
  }, 30);
}

entries.forEach(entry => {
  if (entry.isIntersecting) {
    const el = entry.target;
    el.classList.add('visible');
    const percent = parseInt(el.dataset.percent);
    el.querySelector('.percent-bar span').style.width = percent + '%';
    animatePercentText(el.querySelector('.percent-text'), percent);
    observer.unobserve(el);
  }
});
