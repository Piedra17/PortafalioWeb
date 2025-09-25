    const textElement = document.getElementById("typing-text");
    textElement.style.animation = "none";
    setTimeout(() => {
        textElement.style.animation = "typing 4s steps(30, end) forwards, blink 0.7s step-end infinite";
    }, 50); // reinicia la animación si lo necesitas