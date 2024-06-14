function setLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}

function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'dark-mode.css') {
        themeStyle.setAttribute('href', 'light-mode.css');
    } else {
        themeStyle.setAttribute('href', 'dark-mode.css');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 기본 언어 설정
    setLanguage('en');
});
