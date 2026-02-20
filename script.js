document.addEventListener('DOMContentLoaded', () => {
    console.log('FAHA Footwear website loaded');

    // NAV MENU AND MOBILE MENU
    const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const overlay = document.getElementById("overlay");
        const bars = document.querySelectorAll(".bar");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("-translate-x-full");
            overlay.classList.toggle("hidden");

            // Animate hamburger
            bars[0].classList.toggle("rotate-45");
            bars[0].classList.toggle("translate-y-3");

            bars[1].classList.toggle("opacity-0");

            bars[2].classList.toggle("-rotate-45");
            bars[2].classList.toggle("-translate-y-3");
        });

        // Close when overlay clicked
        overlay.addEventListener("click", () => {
            mobileMenu.classList.add("-translate-x-full");
            overlay.classList.add("hidden");

            bars[0].classList.remove("rotate-45", "translate-y-3");
            bars[1].classList.remove("opacity-0");
            bars[2].classList.remove("-rotate-45", "-translate-y-3");
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