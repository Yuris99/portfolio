function setLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 기본 언어 설정
    setLanguage('en');
});
