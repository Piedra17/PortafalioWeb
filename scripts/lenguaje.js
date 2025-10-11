document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");

    const translations = {
        es: {
            nav: ["Home", "Sobre Mi", "Proyectos", "Contáctame"],
            heroTitle: "Hola, soy <span>Kendall Piedra</span>",
            heroText: "Me especializo en construir sitios modernos, funcionales y visualmente atractivos, combinando diseño intuitivo con código limpio. Cada proyecto es una oportunidad para aprender, innovar y superar expectativas.",
            sobreMiTitulo: "Sobre mí",
            sobreMiTexto: "Me apasiona crear experiencias digitales que conectan diseño y funcionalidad.",
            proyectosTitulo: "Proyectos",
            proyectos: [
                "Un Sitio Web Responsive de Toures en Copey",
                "Un Sitio Web Responsive de una carrera de ciclismo",
                "Un Sitio Web Responsive de un Gym que es Administrable",
                "Un Sitio Web Responsive con posibilidades de Apk"
            ],
            verProyecto: "Ver Proyecto"
        },
        en: {
            nav: ["Home", "About Me", "Projects", "Contact Me"],
            heroTitle: "Hi, I'm <span>Kendall Piedra</span>",
            heroText: "I specialize in building modern, functional, and visually appealing websites, combining intuitive design with clean code. Every project is an opportunity to learn, innovate, and exceed expectations.",
            sobreMiTitulo: "About Me",
            sobreMiTexto: "I'm passionate about creating digital experiences that blend design and functionality.",
            proyectosTitulo: "Projects",
            proyectos: [
                "A responsive website for tours in Copey De Dota",
                "A responsive website for a cycling race MTB in C.R",
                "A responsive and manageable website for a gym in C.R",
                "A responsive website with APK possibilities Play Store"
            ],
            verProyecto: "View Project"
        }
    };

    function updateLanguage(lang) {
        const t = translations[lang];

        // Navegación
        const navLinks = document.querySelectorAll(".nav-menu ul li a");
        navLinks[0].textContent = t.nav[0];
        navLinks[1].textContent = t.nav[1];
        navLinks[2].textContent = t.nav[2];
        navLinks[3].textContent = t.nav[3];

        // Hero
        document.getElementById("typing-text").innerHTML = t.heroTitle;
        document.querySelector(".hero-text p").textContent = t.heroText;

        // Sobre mí
        document.querySelector(".sobre-mi-texto").textContent = t.sobreMiTitulo;
        document.querySelector(".sobre-mi-p").textContent = t.sobreMiTexto;

        // Proyectos
        document.querySelector(".titulo").textContent = t.proyectosTitulo;
        const descriptions = document.querySelectorAll(".grid-proyectos .texto small");
        descriptions.forEach((desc, i) => {
            desc.textContent = t.proyectos[i];
        });

        const buttons = document.querySelectorAll(".boton-proyectos");
        buttons.forEach(btn => {
            btn.textContent = t.verProyecto;
        });
    }

    languageSelector.addEventListener("change", (e) => {
        updateLanguage(e.target.value);
    });

    // Inicializa con el idioma seleccionado
    updateLanguage(languageSelector.value);
});
