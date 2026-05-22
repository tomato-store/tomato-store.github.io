/* ===================================================================
   Tomato Store — Project Homepage
   Nav behavior · bilingual toggle · scroll reveal
   =================================================================== */
(function () {
    'use strict';

    /* ---------- Bilingual language toggle ---------- */
    var STORAGE_KEY = 'tomato-store-lang';
    var htmlEl = document.documentElement;

    function applyLanguage(lang) {
        if (lang !== 'en' && lang !== 'ko') { lang = 'en'; }
        htmlEl.setAttribute('lang', lang);

        var nodes = document.querySelectorAll('[data-en][data-ko]');
        for (var i = 0; i < nodes.length; i++) {
            var text = nodes[i].getAttribute('data-' + lang);
            if (text !== null) { nodes[i].textContent = text; }
        }
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    // restore saved language (default: English)
    var savedLang = 'en';
    try { savedLang = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
    applyLanguage(savedLang);

    var langSwitch = document.getElementById('langSwitch');
    function toggleLanguage() {
        applyLanguage(htmlEl.getAttribute('lang') === 'en' ? 'ko' : 'en');
    }
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
        langSwitch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleLanguage();
            }
        });
    }

    /* ---------- Mobile nav toggle ---------- */
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    function closeMenu() {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var open = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        // close the menu after tapping an anchor link
        var menuLinks = navMenu.querySelectorAll('ul a');
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', closeMenu);
        }
    }

    /* ---------- Navbar shadow on scroll ---------- */
    var navbar = document.getElementById('navbar');
    function onScroll() {
        if (navbar) { navbar.classList.toggle('scrolled', window.scrollY > 10); }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- Active nav link on scroll ---------- */
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-menu ul a');

    function highlightNav() {
        var pos = window.scrollY + 90;
        var currentId = '';
        sections.forEach(function (sec) {
            if (sec.offsetTop <= pos) { currentId = sec.id; }
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active',
                link.getAttribute('href') === '#' + currentId);
        });
    }
    highlightNav();
    window.addEventListener('scroll', highlightNav, { passive: true });
})();
