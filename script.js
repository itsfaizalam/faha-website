document.addEventListener('DOMContentLoaded', () => {
    console.log('FAHA Footwear website loaded');

    const navMenu = document.getElementById('nav-menu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    function toggleMenu() {
        if (navMenu && iconMenu && iconClose) {
            navMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        }
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navMenu && !navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    toggleMenu();
                }
            }
        });
    });
    // FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            // Toggle current item
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');

            // Optional: Close other items
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherContent = otherButton.nextElementSibling;
                    const otherIcon = otherButton.querySelector('svg');

                    if (!otherContent.classList.contains('hidden')) {
                        otherContent.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });
        });
    });
});


// ========== FAQ Accordion Logic ==========
// simple accordion behaviour
document.querySelectorAll('[data-accordion]').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const panel = btn.parentElement.querySelector('[data-panel]');
        const open = panel.style.maxHeight && panel.style.maxHeight !== '0px';

        // close all panels in the same container
        btn.closest('.divide-y').querySelectorAll('[data-panel]').forEach(function (p) {
            p.style.maxHeight = null;
            p.parentElement.querySelector('[data-accordion] svg').style.transform = '';
        });

        if (!open) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            btn.querySelector('svg').style.transform = 'rotate(180deg)';
        } else {
            panel.style.maxHeight = null;
            btn.querySelector('svg').style.transform = '';
        }
    });
});

// open first item by default
(function () {
    const firstPanel = document.querySelector('[data-panel]');
    if (firstPanel) { firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px'; }
})();