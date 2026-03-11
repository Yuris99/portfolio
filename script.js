document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '0.5rem 0'; // Slight padding shrink
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '0';
        }
    });

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Remove active class from all links
                navLinks.forEach(nav => nav.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Calculate position with offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Scroll Spy for active nav link updating on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - navbar.offsetHeight - 50)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.card, .comp-card, .project-card, .recommendation-card');
    
    // Initial styling for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 50;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // 5. Language Toggle (Navigation)
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            const isEnglish = window.location.pathname.includes('index_en.html');
            const target = e.target;
            
            if (target.classList.contains('ko') && isEnglish) {
                window.location.href = 'index.html';
            } else if (target.classList.contains('en') && !isEnglish) {
                window.location.href = 'index_en.html';
            } else if (target.tagName.toLowerCase() === 'button' || target.classList.contains('divider')) {
                // If clicking the button itself or the slash
                window.location.href = isEnglish ? 'index.html' : 'index_en.html';
            }
        });
    }
});
