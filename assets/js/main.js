document.addEventListener('DOMContentLoaded', () => {
    // Reveal On Scroll
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Header Scroll Effect
    const header = document.querySelector('header');
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header?.classList.add('bg-background-dark/80', 'py-4');
            header?.classList.remove('py-6');
        } else {
            header?.classList.remove('bg-background-dark/80', 'py-4');
            header?.classList.add('py-6');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    menuClose?.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu on link click
    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
