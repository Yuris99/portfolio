document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '0';
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navLinks.forEach((nav) => nav.classList.remove('active'));
                this.classList.add('active');

                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - navbar.offsetHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const revealElements = document.querySelectorAll('.card, .comp-text-card, .project-text-card, .problem-card');

    revealElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 50;

        revealElements.forEach((el) => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            const isEnglish = window.location.pathname.includes('/en/');
            const target = e.target;
            let basePath = window.location.pathname;

            if (isEnglish) {
                basePath = basePath.replace('/en/index.html', '/').replace('/en/', '/');
            } else if (basePath.endsWith('index.html')) {
                basePath = basePath.replace('index.html', 'en/');
            } else if (!basePath.endsWith('/')) {
                basePath += '/en/';
            } else {
                basePath += 'en/';
            }

            if (target.classList.contains('ko') && isEnglish) {
                window.location.href = basePath;
            } else if (target.classList.contains('en') && !isEnglish) {
                window.location.href = basePath;
            } else if (target.tagName.toLowerCase() === 'button' || target.classList.contains('divider')) {
                window.location.href = basePath;
            }
        });
    }
});
