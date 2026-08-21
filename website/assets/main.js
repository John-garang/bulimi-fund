// ============================================================
// BULIMI - Interactive Features
// Language toggle, testimonials, stats, reveals, gallery, forms
// ============================================================

(function () {
  'use strict';

  /* ===== TRANSLATIONS ===== */
  const I18N = {
    en: {
      nav: {
        home: 'Home',
        about: 'About Us',
        ourModel: 'Our Model',
        ourImpact: 'Our Impact',
        farmerServices: 'Farmer Services',
        marketAccess: 'Market Access',
        news: 'News',
        contact: 'Contact',
        careers: 'Careers',
        donate: 'Donate',
        gallery: 'Gallery',
        langSwitch: 'Luganda',
      },
      hero: {
        tag: 'Uganda',
        title: 'A cocoa opportunity built around the farmer',
        subtitle:
          'A productive cocoa garden takes more than planting material. Farmers need the right knowledge, healthy seedlings, regular technical support and a dependable buyer. Bulimi organizes these services into one practical pathway so farming families can build a long-term livelihood asset.',
        cta1: 'Register Interest',
        cta2: 'Donate Now',
      },
      journey: {
        title: 'From Registration to Market',
        steps: [
          'Register',
          'Train',
          'Prepare Land',
          'Plant Quality Seedlings',
          'Receive Extension & Inputs',
          'Dry & Sell Cocoa',
          'Grow Household Opportunity',
        ],
      },
      services: {
        label: 'What We Provide',
        title: 'End-to-end support for every farmer',
        intro:
          'Bulimi brings together the services farming families need to succeed, from registration to the sale of quality dried cocoa beans.',
      },
      impact: {
        label: 'HOW IT MATTERS TO FARMERS',
        title: 'Building from the ground up',
        body: "Bulimi's model is designed to support smallholder farmers to establish at least one acre of cocoa each in Western Uganda. Each acre of land represents regenerative agriculture practices through soil quality restoration, environmental conservation, quality seedlings last mile delivery, and farmer financial empowerment",
        stats: [
          { num: '100+', label: 'Nurseries established' },
          { num: '1+', label: 'Acre per farmer' },
          { num: '98%', label: 'Seedling resilience' },
          { num: '1M', label: 'Bags of in-house organic inputs distributed' },
        ],
      },
      about: {
        label: 'Our Story',
        title: 'Why Bulimi exists',
        body1:
          'Many rural families have land and the determination to build better livelihoods, but face barriers that cannot be solved by seedlings alone. They need practical knowledge, reliable planting material, continuing field support, access to appropriate inputs and a dependable route to market.',
        body2:
          'Bulimi brings these elements together in one farmer-centred system, introducing organized cocoa production in new cocoa-growing areas, beginning in Kyenjojo District.',
        cta: 'Learn More About Us',
        valuesTitle: 'Our Values',
        values: [
          { title: 'Farmer Dignity', body: 'Farmers are partners and business owners.' },
          { title: 'Integrity', body: 'Clear communication and accountable records.' },
          { title: 'Practical Support', body: 'Field-level services designed to succeed.' },
          { title: 'Sustainability', body: 'Responsible land use and long-term productivity.' },
          { title: 'Inclusion', body: 'Meaningful opportunity for women and youth.' },
          { title: 'Partnership', body: 'Coordinating farmers, buyers and communities.' },
        ],
      },
      testimonials: {
        label: 'Voices From The Field',
        title: 'What farmers are saying',
        items: [
          {
            quote:
              "Before Bulimi, I did not know cocoa could be a real path out of poverty for my family. The training gave me confidence and the seedlings gave me hope. I have planted one acre and my children now talk about the future of our farm.",
            name: 'Nakato Sarah',
            role: 'Cocoa farmer, Kyenjojo District',
          },
          {
            quote:
              'The extension officers visit my garden regularly. When my seedlings were struggling, they showed me how to manage the soil and the shade. Today my cocoa is growing strong and I can see the harvest ahead.',
            name: 'Okello Peter',
            role: 'Smallholder farmer, Western Uganda',
          },
          {
            quote:
              'Bulimi does not just give you seedlings and disappear. They walk with you from land preparation to market. That is what makes this programme different.',
            name: 'Kemigisha Grace',
            role: 'Farmer group leader, Kyenjojo',
          },
          {
            quote:
              'I joined Bulimi because I wanted a better future for my children. The training on soil and shade management changed how I see my land. Now I believe my farm can support my family for generations.',
            name: 'Birungi Agnes',
            role: 'Women farmer, Kyenjojo District',
          },
        ],
      },
      partner: {
        label: 'Work With Us',
        title: 'Partner with Bulimi',
        body:
          'Cocoa supply is shaped years before the first commercial harvest. Early partnership can improve planting material, farmer practices, traceability and buyer alignment while new gardens are being established.',
        cta: 'Partner With Us',
      },
      trust: [
        'Regenerative Agriculture',
        'Farmer Financial Empowerment',
        'Quality Last Mile Delivery',
        'Environmental Conservation',
        'Soil Restoration',
      ],
      closing: {
        title: 'Grow opportunity with Bulimi',
        body: 'Join farmers, partners and supporters building a regenerative cocoa economy in Uganda.',
        cta: 'Get In Touch',
      },
      footer: {
        tagline: 'Bulimi is building farmer capability, productive cocoa gardens and dependable market access in Uganda.',
        newsletterTitle: 'Stay updated',
        newsletterPlaceholderName: 'Your name',
        newsletterPlaceholderEmail: 'Your email address',
        newsletterBtn: 'Subscribe',
        navigate: 'Navigate',
        services: 'Services',
        follow: 'Follow Us',
        privacy: 'Privacy',
        terms: 'Terms',
        safeguarding: 'Safeguarding',
        contact: 'Contact',
        rights: '© 2026 Bulimi. All rights reserved.',
      },
      gallery: {
        label: 'Gallery',
        title: 'Life on the farms',
        intro: 'A visual journey through Bulimi farmer gardens, nurseries and communities across Western Uganda.',
      },
      lang: {
        switchLabel: 'Luganda',
      },
    },
    lg: {
      nav: {
        home: 'Wakawo',
        about: 'Ku Bufuzi Bwaffe',
        ourModel: 'Enkola Yaffe',
        ourImpact: 'Ekituufu Kyaffe',
        farmerServices: 'Obuweereza Bw’Abalimi',
        marketAccess: 'Okutuuka ku Ssitiro',
        news: 'Amawulire',
        contact: 'Okutukirira',
        careers: 'Emirimu',
        donate: 'Okuwaayo',
        gallery: 'Ekifaananyi',
        langSwitch: 'English',
      },
      hero: {
        tag: 'Uganda',
        title: 'Omukisa gwa kooko oguzimbibwa ku mulimi',
        subtitle:
          'Ennimiro ya kooko egabanga ebibala yeetaaga okumanya, entabaganyi, obukugu n’omunnyonnyozo. Bulimi eteeka wamu obuweereza buno mu kkubo limu ery’okuyamba amaka ag’abalimi okuzimba obulamu obulamu.',
        cta1: 'Oyinze Okwegatta',
        cta2: 'Waayo Kati',
      },
      journey: {
        title: 'Okuva mu Kuwandiisibwa okutuuka ku Ssitiro',
        steps: [
          'Okwewandiisa',
          'Okutendekebwa',
          'Okutegeka Etaka',
          'Okusimba Ebitoogo Ebirungi',
          'Okufuna Okuyambibwa n’Ebikozesebwa',
          'Okukalitirira n’Okutunda Kooko',
          'Okukulaakulanya Amaka',
        ],
      },
      services: {
        label: 'Kye Tuwa',
        title: 'Obuweereza obutuukiridde eri buli mulimi',
        intro:
          'Bulimi eteeka wamu obuweereza obwetaagisa amaka ag’abalimi okusobola okutuuka ku kutuuka mu kukola kooko.',
      },
      impact: {
        label: 'BWE BUKOLA KU BALIMI',
        title: 'Okuzimba okuva wansi',
        body: "Enkola ya Bulimi eteekebwa okusobozesa abalimi abato okusimba omukubo gumu ogw’ekooko mu Buggwanjuba bwa Uganda. Buli kaala egy’ettaka etegeeza enkola ey’okuzza obuggya obulamu bw’ettaka, okukuuma obutonde, okutuusa ebitoogo ebirungi n’okunyweza ensimbi z’abalimi.",
        stats: [
          { num: '100+', label: 'Eniriira ezaatandikibwawo' },
          { num: '1+', label: 'Eka ku mulimi' },
          { num: '98%', label: 'Obulamu bw’ebitoogo' },
          { num: '1M', label: 'Enyanja z’ebikozesebwa eby’obutonde ezagabibwa' },
        ],
      },
      about: {
        label: 'Emmo yaffe',
        title: 'Lwaki Bulimi ebeeo',
        body1:
          'Amaka agawerako ag’omu byalo galina ettaka n’obwagazi n’okuzimba obulamu obulungi, naye galina ebiŋŋŋendo ebitali bya kusimba ebitoogo kyokka. Beetaga okumanya, ebitoogo ebirungi, okuyambibwa mu nnimiro, n’ekkubo ery’okutuuka ku ssitiro.',
        body2:
          'Bulimi eteeka wamu ebintu bino mu nkola emu egendereddemu okukola kooko mu bitundu ebipya, nga yetandika mu Disitulikiti y’e Kyenjojo.',
        cta: 'Manyeka Ku Ffe',
        valuesTitle: 'Enfuga Zaffe',
        values: [
          { title: 'Ekitiibwa ky’Omulimi', body: 'Abalimi be bannamikago era n’abannannyini.' },
          { title: 'Obwesigwa', body: 'Okwogera mu bwangu n’okukuuma ebiwandiiko.' },
          { title: 'Okuyambibwa Okukola', body: 'Obuweereza obukoleddwa mu nnimiro.' },
          { title: 'Obulamu Bw’Ettaka', body: 'Okukozesa ettaka mu ngeri ey’obugagga n’okulima okulwanagana.' },
          { title: 'Okwawukana', body: 'Omukisa ogw’amakulu eri abakazi n’abavubuka.' },
          { title: 'Okwegatta', body: 'Okukola wamu n’abalimi, abaguzi n’abantu.' },
        ],
      },
      testimonials: {
        label: 'Eddoboozi okuva mu nnimiro',
        title: 'Kye balimi boogera',
        items: [
          {
            quote:
              "Ng’amaze okukolana ne Bulimi, nategeera nti kooko asobola okubeera ekkubo ery’okutandikawo obulamu obulungi. Okutendekebwa kwampa amaanyi, ebitoogo binyweza essuubi lyange. Nsimbye eka yange ey’ekooko.",
            name: 'Nakato Sarah',
            role: 'Mulimi wa kooko, Kyenjojo',
          },
          {
            quote:
              'Abakugu ba Bulimi bajja mu nnimiro yange buli kiseera. Bwe baali batandika, baannamba nga nsobola okulabirira ettaka. Kati kooko wange akula bulungi.',
            name: 'Okello Peter',
            role: 'Mulimi omuto, Buggwanjuba bwa Uganda',
          },
          {
            quote:
              'Bulimi tekwawaayo ebitoogo kyokka. Bakola n’abalimi okuva ku kutegeka ettaka okutuuka ku kuttunda. Ekyo kye kye nkola eno eyawukirako.',
            name: 'Kemigisha Grace',
            role: 'Omukulembeze w’ekibiina ky’abalimi, Kyenjojo',
          },
          {
            quote:
              'Nayingira Bulimi kubanga naagala okubeera n’enjawulo eri abaana bange. Okutendekebwa ku ttaka n’omwetafu kwakyusa engeri gye naba nalabirira ettaka lyange. Kati nkkiriza nti ennimiro yange esobola okuyamba amaka gange.',
            name: 'Birungi Agnes',
            role: 'Mulimi omukazi, Kyenjojo',
        ],
      },
      partner: {
        label: 'Kola Naffe',
        title: 'Gattira wamu ne Bulimi',
        body:
          'Okuweebwa kooko kutegeeza emyaka egy’amaanyi nga tannaba kukungaana. Okwegatta wamu mu kiseera kino kisobola okuzzaawo ebitoogo, enkola z’abalimi, okukebera n’okwegatta n’abaguzi.',
        cta: 'Gattira Wamu Naffe',
      },
      trust: [
        'Okulima Okuzza Obulamu',
        'Ensimbibwamu Ez’obwannannyini',
        'Okuweereza Ebirungi',
        'Okukuuma Obwakatono',
        'Okuzzaawo Obulamu Bw’Ettaka',
      ],
      closing: {
        title: 'Kulaakulanya omukisa ne Bulimi',
        body: 'Yeegatte ku balimi, abaguzi n’abanywanyi abazimba obulamu obulungi mu Uganda.',
        cta: 'Tukirire',
      },
      footer: {
        tagline: 'Bulimi ekozesezza abalimi, ennimiro za kooko ezirimu ebibala n’okutuuka ku ssitiro mu Uganda.',
        newsletterTitle: 'Funa amawulire',
        newsletterPlaceholderName: 'Erinnya lyo',
        newsletterPlaceholderEmail: 'E-mail yo',
        newsletterBtn: 'Wandiisa',
        navigate: 'Tembeera',
        services: 'Obuweereza',
        follow: 'Tukwatagane',
        privacy: 'Okukuuma ebyama',
        terms: 'Amateeka',
        safeguarding: 'Okukuuma obulamu',
        contact: 'Okutukirira',
        rights: '© 2026 Bulimi. Eddembe lyonna liggwaawo.',
      },
      gallery: {
        label: 'Ekifaananyi',
        title: 'Obulamu mu nnimiro',
        intro: 'Olugendo olw’okulaba ennimiro za kooko, eniriira n’ebitundu eby’abalimi mu Buggwanjuba bwa Uganda.',
      },
      lang: {
        switchLabel: 'English',
      },
    },
  };

  /* ===== LANGUAGE ===== */
  let currentLang = 'en';

  function translate() {
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = dict;
      for (const p of parts) {
        if (!val) break;
        val = val[p];
      }
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const parts = key.split('.');
      let val = dict;
      for (const p of parts) {
        if (!val) break;
        val = val[p];
      }
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    // Dynamic lists
    const journeySteps = document.querySelectorAll('.flow-step-label');
    const journey = dict.journey.steps;
    journeySteps.forEach((el, i) => {
      if (journey[i]) el.textContent = journey[i];
    });

    const serviceTitles = document.querySelectorAll('[data-service-title]');
    if (serviceTitles.length && dict.services) {
      const serviceLabels = {
        en: [
          'Farmer Registration & Organization',
          'Training & Garden Establishment',
          'Quality Seedlings',
          'Extension & Farm Support',
          'Affordable Last-Mile Inputs',
          'Market Access',
        ],
        lg: [
          'Okwewandiisa n’Okuteeka Abalimi',
          'Okutendekebwa n’Okusimba Ennimiro',
          'Ebitoogo Ebirungi',
          'Okuyambibwa mu Nnimiro',
          'Ebikozesebwa Eby’omu Kkubo',
          'Okutuuka ku Ssitiro',
        ],
      };
      serviceTitles.forEach((el, i) => {
        if (serviceLabels[currentLang][i]) el.textContent = serviceLabels[currentLang][i];
      });
    }

    const valueItems = document.querySelectorAll('.value-item');
    const values = dict.about.values;
    valueItems.forEach((el, i) => {
      if (values[i]) {
        const strong = el.querySelector('strong');
        const p = el.querySelector('p');
        if (strong) strong.textContent = values[i].title;
        if (p) p.textContent = values[i].body;
      }
    });

    // Stats
    const statNumbers = document.querySelectorAll('.stat-card .number');
    const statLabels = document.querySelectorAll('.stat-card .label');
    const stats = dict.impact.stats;
    statNumbers.forEach((el, i) => {
      if (stats[i] && el.getAttribute('data-static') !== 'true') el.textContent = stats[i].num;
    });
    statLabels.forEach((el, i) => {
      if (stats[i]) el.textContent = stats[i].label;
    });

    // Testimonials
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonials = dict.testimonials.items;
    testimonialSlides.forEach((el, i) => {
      if (testimonials[i]) {
        const quote = el.querySelector('.testimonial-quote');
        const name = el.querySelector('.testimonial-name');
        const role = el.querySelector('.testimonial-role');
        if (quote) quote.textContent = testimonials[i].quote;
        if (name) name.textContent = testimonials[i].name;
        if (role) role.textContent = testimonials[i].role;
      }
    });

    // Trust strip
    const trustItems = document.querySelectorAll('.trust-item span:last-child');
    const trust = dict.trust;
    trustItems.forEach((el, i) => {
      if (trust[i]) el.textContent = trust[i];
    });

    // Set html lang
    document.documentElement.lang = currentLang;
  }

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'lg' : 'en';
    try {
      localStorage.setItem('bulimi_lang', currentLang);
    } catch (e) {}
    translate();
    // Re-run reveals for dynamic content
    initReveals();
  }

  /* ===== NAVBAR ===== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Dropdown toggle on mobile
  document.querySelectorAll('.nav-dropdown > a').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 && a.closest('.nav-dropdown')) {
        e.preventDefault();
        a.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  // Close mobile menu + dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach((d) => d.classList.remove('open'));
    }
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
      if (navLinks) navLinks.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
    }
  });

  // Active nav link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href && (href === currentPage || (href === '/' && currentPage === 'index.html'))) {
      a.classList.add('active');
    }
  });

  /* ===== LANGUAGE TOGGLE BUTTONS ===== */
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', toggleLanguage);
  });

  /* ===== SCROLL REVEALS ===== */
  let revealObserver = null;

  function initReveals() {
    if (revealObserver) revealObserver.disconnect();

    const elements = document.querySelectorAll('.reveal:not(.visible)');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => revealObserver.observe(el));

    // Stagger parents
    const staggerParents = document.querySelectorAll('.stagger-parent');
    staggerParents.forEach((parent) => {
      if (!parent.dataset.observed) {
        parent.dataset.observed = 'true';
        revealObserver.observe(parent);
      }
    });
  }

  // Stagger parent when visible
  document.addEventListener('DOMContentLoaded', () => {
    const staggerParents = document.querySelectorAll('.stagger-parent');
    if ('IntersectionObserver' in window) {
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      staggerParents.forEach((el) => staggerObserver.observe(el));
    } else {
      staggerParents.forEach((el) => el.classList.add('visible'));
    }
  });

  // Flow steps visibility
  function initFlowSteps() {
    const steps = document.querySelectorAll('.flow-step');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      steps.forEach((el) => obs.observe(el));
    } else {
      steps.forEach((el) => el.classList.add('visible'));
    }
  }

  /* ===== TESTIMONIALS ROTATOR ===== */
  function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (!slides.length) return;

    let current = 0;
    const interval = 5000; // 5 seconds

    function showSlide(index) {
      slides.forEach((s) => s.classList.remove('active'));
      dots.forEach((d) => d.classList.remove('active'));
      slides[index].classList.add('active');
      if (dots[index]) dots[index].classList.add('active');
    }

    showSlide(0);

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, interval);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        current = i;
        showSlide(current);
      });
    });
  }

  /* ===== ANIMATED STATS ===== */
  function initStats() {
    const statNumbers = document.querySelectorAll('.stat-card .number[data-count]');

    if (!statNumbers.length) return;

    function animateNumber(el) {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const duration = 1800;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const value = Math.round(target * eased);
        el.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateNumber(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      statNumbers.forEach((el) => obs.observe(el));
    } else {
      statNumbers.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        el.textContent = target + suffix;
      });
    }
  }

  /* ===== LIGHTBOX ===== */
  function initLightbox() {
    const items = document.querySelectorAll('.gallery-item[data-src]');
    if (!items.length) return;

    // Create lightbox container
    let lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'gallery-lightbox';
      lightbox.className = 'lightbox';
      lightbox.innerHTML =
        '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="Gallery image" />';
      document.body.appendChild(lightbox);
    }

    const imgEl = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    items.forEach((item) => {
      item.addEventListener('click', () => {
        imgEl.src = item.getAttribute('data-src');
        lightbox.classList.add('active');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ===== EMAILJS ===== */
  const EMAILJS_SERVICE = 'service_tqvce7p';
  const EMAILJS_CONTACT = 'template_g10gjam';
  const EMAILJS_NEWSLETTER = 'template_ynrnrhp';

  (function () {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function () {
      emailjs.init({ publicKey: 'LZd1RA5HBREo5mSjS' });
    };
    document.head.appendChild(s);
  })();

  function setBtn(btn, text, disabled) {
    btn.textContent = text;
    btn.disabled = disabled;
  }

  /* ===== POPUP ===== */
  function createPopup() {
    if (document.getElementById('success-popup')) return;
    const overlay = document.createElement('div');
    overlay.id = 'success-popup';
    overlay.className = 'popup-overlay';
    overlay.innerHTML = `
      <div class="popup-box">
        <button class="popup-close" aria-label="Close">&times;</button>
        <div class="popup-icon">&#10003;</div>
        <h3 id="popup-title"></h3>
        <p id="popup-msg"></p>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.popup-close').addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup();
    });
  }

  function showPopup(title, msg) {
    createPopup();
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-msg').textContent = msg;
    document.getElementById('success-popup').classList.add('active');
  }

  function closePopup() {
    const p = document.getElementById('success-popup');
    if (p) p.classList.remove('active');
  }

  /* ===== FORMS ===== */
  document.addEventListener('DOMContentLoaded', () => {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        setBtn(btn, 'Sending...', true);
        const params = {
          from_name: contactForm.querySelector('[name="from_name"]').value,
          from_email: contactForm.querySelector('[name="from_email"]').value,
          phone: contactForm.querySelector('[name="phone"]').value,
          organisation: contactForm.querySelector('[name="organisation"]').value,
          enquiry_type: contactForm.querySelector('[name="enquiry_type"]').value,
          district: contactForm.querySelector('[name="district"]').value,
          country: contactForm.querySelector('[name="country"]').value,
          message: contactForm.querySelector('[name="message"]').value,
          formatted_body: [
            'New Contact Enquiry - Bulimi',
            '----------------------------',
            'Name:         ' + contactForm.querySelector('[name="from_name"]').value,
            'Email:        ' + contactForm.querySelector('[name="from_email"]').value,
            'Phone:        ' + contactForm.querySelector('[name="phone"]').value,
            'Organisation: ' + contactForm.querySelector('[name="organisation"]').value,
            'Enquiry Type: ' + contactForm.querySelector('[name="enquiry_type"]').value,
            'District:     ' + contactForm.querySelector('[name="district"]').value,
            'Country:      ' + contactForm.querySelector('[name="country"]').value,
            '',
            'Message:',
            contactForm.querySelector('[name="message"]').value,
          ].join('\n'),
        };
        emailjs
          .send(EMAILJS_SERVICE, EMAILJS_CONTACT, params)
          .then(() => {
            setBtn(btn, 'Send Message', false);
            contactForm.reset();
            showPopup('Message received!', 'Thank you for reaching out. The Bulimi team will be in touch with you shortly.');
          })
          .catch(() => {
            setBtn(btn, 'Failed - Try Again', false);
          });
      });
    }

    // Newsletter forms
    document.querySelectorAll('.newsletter-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const name = form.querySelector('[name="subscriber_name"]');
        const email = form.querySelector('[name="subscriber_email"]');
        setBtn(btn, '...', true);
        emailjs
          .send(EMAILJS_SERVICE, EMAILJS_NEWSLETTER, {
            subscriber_name: name ? name.value : '',
            subscriber_email: email.value,
            formatted_body: [
              'New Newsletter Subscriber - Bulimi',
              '-----------------------------------',
              'Name:  ' + (name ? name.value : 'N/A'),
              'Email: ' + email.value,
              'Page:  ' + location.pathname,
              'Date:  ' + new Date().toLocaleDateString('en-GB'),
            ].join('\n'),
            page: location.pathname,
            date: new Date().toLocaleDateString('en-GB'),
          })
          .then(() => {
            setBtn(btn, 'Subscribe', false);
            form.reset();
            showPopup("You're subscribed!", "Thanks for signing up. We'll keep you updated on Bulimi's progress.");
          })
          .catch(() => {
            setBtn(btn, 'Retry', false);
          });
      });
    });

    // Fallback for any other plain forms
    document.querySelectorAll('form:not(#contact-form):not(.newsletter-form)').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;
        const orig = btn.textContent;
        setBtn(btn, 'Sent!', true);
        setTimeout(() => {
          setBtn(btn, orig, false);
          form.reset();
        }, 3000);
      });
    });
  });

  /* ===== INIT ===== */
  document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    try {
      const saved = localStorage.getItem('bulimi_lang');
      if (saved === 'lg' || saved === 'en') currentLang = saved;
    } catch (e) {}

    translate();
    initReveals();
    initFlowSteps();
    initTestimonials();
    initStats();
    initLightbox();
  });
})();