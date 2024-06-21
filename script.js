function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'styles.css') {
        themeStyle.setAttribute('href', 'light-mode.css');
    } else {
        themeStyle.setAttribute('href', 'styles.css');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeStyle = document.getElementById('theme-style');
    const themeIcon = document.getElementById('theme-toggle').querySelector('i');
    if (themeStyle.getAttribute('href') === 'styles.css') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

function revealElements() {
    const reveals = document.querySelectorAll('.hidden');
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('visible');
            el.classList.remove('hidden');
        }
    });
}

window.addEventListener('scroll', revealElements);

document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
    revealElements();
});
