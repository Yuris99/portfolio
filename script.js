function setLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}

function toggleLanguage() {
    const currentLang = document.querySelector('[data-lang-en]').textContent === 'About' ? 'en' : 'ko';
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    setLanguage(newLang);
}

function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'dark-mode.css') {
        themeStyle.setAttribute('href', 'light-mode.css');
    } else {
        themeStyle.setAttribute('href', 'dark-mode.css');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeStyle = document.getElementById('theme-style');
    const themeIcon = document.getElementById('theme-toggle').querySelector('i');
    if (themeStyle.getAttribute('href') === 'dark-mode.css') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    updateThemeIcon();
});
