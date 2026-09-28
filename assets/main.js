// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

// Dropdown toggle on mobile tap
document.querySelectorAll('.nav-dropdown > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth <= 640) {
      e.preventDefault();
      e.stopPropagation();
      a.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// Close nav and dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.navbar')) {
    if (navLinks) { navLinks.classList.remove('open'); }
    if (hamburger) { hamburger.setAttribute('aria-expanded', 'false'); }
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// Close nav when a leaf link is tapped on mobile
if (navLinks) {
  navLinks.querySelectorAll('a:not(.nav-dropdown > a)').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ===== EMAILJS =====
const EMAILJS_SERVICE    = 'service_tqvce7p';
const EMAILJS_CONTACT    = 'template_g10gjam';
const EMAILJS_NEWSLETTER = 'template_ynrnrhp';

(function(){
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = function(){ emailjs.init({ publicKey: 'LZd1RA5HBREo5mSjS' }); };
  document.head.appendChild(s);
})();

function setBtn(btn, text, disabled) {
  btn.textContent = text;
  btn.disabled = disabled;
}

// ===== POPUP =====
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
  overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });
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

// Contact form
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      setBtn(btn, 'Sending…', true);
      const params = {
        from_name:    contactForm.querySelector('[name="from_name"]').value,
        from_email:   contactForm.querySelector('[name="from_email"]').value,
        phone:        contactForm.querySelector('[name="phone"]').value,
        organisation: contactForm.querySelector('[name="organisation"]').value,
        enquiry_type: contactForm.querySelector('[name="enquiry_type"]').value,
        district:     contactForm.querySelector('[name="district"]').value,
        country:      contactForm.querySelector('[name="country"]').value,
        message:      contactForm.querySelector('[name="message"]').value,
        formatted_body: [
          'New Contact Enquiry — Bulimi',
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
      emailjs.send(EMAILJS_SERVICE, EMAILJS_CONTACT, params)
        .then(() => {
          setBtn(btn, 'Send Message', false);
          contactForm.reset();
          showPopup('Message received!', 'Thank you for reaching out. The Bulimi team will be in touch with you shortly.');
        })
        .catch(() => {
          setBtn(btn, 'Failed – Try Again', false);
        });
    });
  }

  // Newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn  = form.querySelector('button[type="submit"]');
      const name  = form.querySelector('[name="subscriber_name"]');
      const email = form.querySelector('[name="subscriber_email"]');
      setBtn(btn, '…', true);
      emailjs.send(EMAILJS_SERVICE, EMAILJS_NEWSLETTER, {
        subscriber_name:  name ? name.value : '',
        subscriber_email: email.value,
        formatted_body: [
          'New Newsletter Subscriber — Bulimi',
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
          showPopup('You’re subscribed!', 'Thanks for signing up. We’ll keep you updated on Bulimi’s progress.');
        })
        .catch(() => {
          setBtn(btn, 'Retry', false);
        });
    });
  });

  // Farmer registration and partnership enquiry forms
  function bindEmailForm(formId, buildParams, successTitle, successMessage) {
    const form = document.getElementById(formId);

    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');

      if (!btn) return;

      const originalLabel = btn.textContent.trim();

      setBtn(btn, 'Sending…', true);

      emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_CONTACT,
        buildParams(form)
      )
        .then(() => {
          setBtn(btn, originalLabel, false);
          form.reset();
          showPopup(successTitle, successMessage);
        })
        .catch(error => {
          console.error(`${formId} submission failed:`, error);
          setBtn(btn, 'Failed – Try Again', false);

          setTimeout(() => {
            setBtn(btn, originalLabel, false);
          }, 3000);
        });
    });
  }


  bindEmailForm(
    'farmer-registration-form',

    form => {
      const fullName = form.querySelector('[name="full_name"]').value;
      const phone = form.querySelector('[name="phone"]').value;
      const villageParish = form.querySelector('[name="village_parish"]').value;
      const district = form.querySelector('[name="district"]').value;
      const acres = form.querySelector('[name="acres"]').value;
      const landArrangement = form.querySelector('[name="land_arrangement"]').value;
      const message = form.querySelector('[name="message"]').value;

      return {
        from_name: fullName,
        from_email: '',
        phone,
        organisation: '',
        enquiry_type: 'Farmer Registration',
        district,
        country: 'Uganda',
        message,

        formatted_body: [
          'New Farmer Registration — Bulimi',
          '--------------------------------',
          'Name:             ' + fullName,
          'Phone / WhatsApp: ' + phone,
          'Village / Parish: ' + villageParish,
          'District:         ' + district,
          'Available Acres:  ' + acres,
          'Land Arrangement: ' + landArrangement,
          '',
          'Questions / Additional Information:',
          message || 'None provided',
          '',
          'Submitted from: ' + location.pathname,
          'Date: ' + new Date().toLocaleDateString('en-GB'),
        ].join('\n'),
      };
    },

    'Registration received!',
    'Thank you for registering your interest. The Bulimi team will contact you with the next steps.'
  );


  bindEmailForm(
    'partner-enquiry-form',

    form => {
      const fullName = form.querySelector('[name="full_name"]').value;
      const organisation = form.querySelector('[name="organisation"]').value;
      const email = form.querySelector('[name="email"]').value;
      const phone = form.querySelector('[name="phone"]').value;
      const partnershipInterest = form.querySelector('[name="partnership_interest"]').value;
      const message = form.querySelector('[name="message"]').value;

      return {
        from_name: fullName,
        from_email: email,
        phone,
        organisation,
        enquiry_type: 'Partnership Enquiry',
        district: '',
        country: '',
        message,

        formatted_body: [
          'New Partnership Enquiry — Bulimi',
          '--------------------------------',
          'Name:         ' + fullName,
          'Organisation: ' + organisation,
          'Email:        ' + email,
          'Phone:        ' + (phone || 'Not provided'),
          'Interest:     ' + partnershipInterest,
          '',
          'Message:',
          message || 'None provided',
          '',
          'Submitted from: ' + location.pathname,
          'Date: ' + new Date().toLocaleDateString('en-GB'),
        ].join('\n'),
      };
    },

    'Enquiry received!',
    'Thank you for your interest in partnering with Bulimi. Our team will review your enquiry and get back to you.'
  );
});

// ===== SCROLL REVEALS =====
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

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initFlowSteps();
  initTestimonials();
  initStats();
  initLightbox();
});

// ===== HERO SLIDER START =====

(() => {
  function initHeroSlider() {
    const slider = document.querySelector(".hero-slider");

    if (!slider) {
      return;
    }

    // Prevent duplicate initialization.
    if (slider.dataset.sliderReady === "true") {
      return;
    }

    slider.dataset.sliderReady = "true";

    const slides = [
      ...slider.querySelectorAll(".hero-slide")
    ];

    const dots = [
      ...slider.querySelectorAll(".hero-slider-dot")
    ];

    const previousButton =
      slider.querySelector(".hero-slider-prev");

    const nextButton =
      slider.querySelector(".hero-slider-next");

    if (slides.length === 0) {
      return;
    }

    let currentIndex = 0;
    let autoplayId = null;
    let touchStartX = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function normalizeIndex(index) {
      return (
        (index % slides.length)
        + slides.length
      ) % slides.length;
    }

    function showSlide(index) {
      currentIndex = normalizeIndex(index);

      slides.forEach((slide, slideIndex) => {
        const isActive =
          slideIndex === currentIndex;

        slide.classList.toggle(
          "active",
          isActive
        );

        slide.setAttribute(
          "aria-hidden",
          isActive ? "false" : "true"
        );
      });

      dots.forEach((dot, dotIndex) => {
        const isActive =
          dotIndex === currentIndex;

        dot.classList.toggle(
          "active",
          isActive
        );

        dot.setAttribute(
          "aria-selected",
          isActive ? "true" : "false"
        );

        dot.setAttribute(
          "tabindex",
          isActive ? "0" : "-1"
        );
      });
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function previousSlide() {
      showSlide(currentIndex - 1);
    }

    function stopAutoplay() {
      if (autoplayId !== null) {
        window.clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();

      if (
        reducedMotion
        || slides.length < 2
        || document.hidden
      ) {
        return;
      }

      autoplayId = window.setInterval(
        nextSlide,
        6000
      );
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (previousButton) {
      previousButton.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          previousSlide();
          restartAutoplay();
        }
      );
    }

    if (nextButton) {
      nextButton.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          nextSlide();
          restartAutoplay();
        }
      );
    }

    dots.forEach((dot, index) => {
      dot.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          showSlide(index);
          restartAutoplay();
        }
      );
    });

    slider.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();

          previousSlide();
          restartAutoplay();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();

          nextSlide();
          restartAutoplay();
        }
      }
    );

    slider.addEventListener(
      "mouseenter",
      stopAutoplay
    );

    slider.addEventListener(
      "mouseleave",
      startAutoplay
    );

    slider.addEventListener(
      "touchstart",
      (event) => {
        if (!event.changedTouches.length) {
          return;
        }

        touchStartX =
          event.changedTouches[0].clientX;
      },
      {
        passive: true
      }
    );

    slider.addEventListener(
      "touchend",
      (event) => {
        if (!event.changedTouches.length) {
          return;
        }

        const touchEndX =
          event.changedTouches[0].clientX;

        const distance =
          touchStartX - touchEndX;

        if (Math.abs(distance) < 45) {
          return;
        }

        if (distance > 0) {
          nextSlide();
        } else {
          previousSlide();
        }

        restartAutoplay();
      },
      {
        passive: true
      }
    );

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.hidden) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      }
    );

    showSlide(0);
    startAutoplay();

    console.info(
      `Bulimi hero slider ready: ${slides.length} slides`
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initHeroSlider,
      {
        once: true
      }
    );
  } else {
    initHeroSlider();
  }
})();

// ===== HERO SLIDER END =====
