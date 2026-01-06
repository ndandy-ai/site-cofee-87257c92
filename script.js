document.addEventListener('DOMContentLoaded', function() {
    // --- Preloader --- //
    const preloader = document.querySelector('.preloader');
    const body = document.querySelector('body');

    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
        body.classList.add('loaded');
    });

    // --- Menu Tabs --- //
    const tabsContainer = document.querySelector('.menu-tabs');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabsContainer) {
        tabsContainer.addEventListener('click', (e) => {
            const clickedTab = e.target.closest('.tab-link');
            if (!clickedTab) return;

            e.preventDefault();
            const tabId = clickedTab.dataset.tab;

            // Deactivate all tabs and content
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab and corresponding content
            clickedTab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    }

    // --- Intersection Observer for Scroll Animations --- //
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        root: null, // relative to the viewport
        threshold: 0.1, // 10% of the item must be visible
        rootMargin: '0px 0px -50px 0px' // trigger a bit earlier
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});