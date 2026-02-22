/* ---- Internationalization (i18n) ---- */
(function () {
  var STORAGE_KEY = 'preferred-lang';
  var DEFAULT_LANG = 'en';

  function getPageId() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    if (file === '' || file === 'index.html') return 'index';
    return file.replace('.html', '');
  }

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'nl') return saved;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLang(lang) {
    var t = window.TRANSLATIONS && window.TRANSLATIONS[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    /* textContent */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* alt */
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.alt = t[key];
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    /* <title> */
    var pageId = getPageId();
    var titleKey = 'meta.' + pageId + '.title';
    if (t[titleKey]) document.title = t[titleKey];

    /* <meta description> */
    var descKey = 'meta.' + pageId + '.description';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (t[descKey] && metaDesc) metaDesc.setAttribute('content', t[descKey]);

    /* toggle active state */
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
  }

  /* Apply on load */
  var currentLang = getSavedLang();
  applyLang(currentLang);

  /* Toggle handler — attach to each option directly for broadest compatibility */
  document.querySelectorAll('.lang-option').forEach(function (opt) {
    opt.addEventListener('click', function () {
      var newLang = opt.getAttribute('data-lang');
      if (newLang && newLang !== getSavedLang()) {
        saveLang(newLang);
        applyLang(newLang);
      }
    });
  });
})();

/* ---- Mobile navigation toggle ---- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Dynamic year ---- */
const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ---- Gallery lightbox ---- */
const lightbox = document.querySelector('#lightbox');

if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  // Open lightbox when clicking a gallery image
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
