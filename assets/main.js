// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Dropdown toggle on mobile tap
document.querySelectorAll('.nav-dropdown > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth <= 640) {
      e.preventDefault();
      a.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ===== EMAILJS =====
// Replace <YOUR_PUBLIC_KEY> with your EmailJS public key
// Replace service/template IDs if you named them differently
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
      };
      emailjs.send(EMAILJS_SERVICE, EMAILJS_CONTACT, params)
        .then(() => {
          setBtn(btn, 'Message Sent!', true);
          contactForm.reset();
          setTimeout(() => setBtn(btn, 'Send Message', false), 4000);
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
      const btn = form.querySelector('button[type="submit"]');
      const input = form.querySelector('input[type="email"]');
      setBtn(btn, '…', true);
      emailjs.send(EMAILJS_SERVICE, EMAILJS_NEWSLETTER, {
        subscriber_email: input.value,
        page: location.pathname,
        date: new Date().toLocaleDateString('en-GB'),
      })
        .then(() => {
          setBtn(btn, '✓', true);
          form.reset();
          setTimeout(() => setBtn(btn, 'Subscribe', false), 4000);
        })
        .catch(() => {
          setBtn(btn, 'Retry', false);
        });
    });
  });

  // Fallback for any other plain forms (farmer registration etc.)
  document.querySelectorAll('form:not(#contact-form):not(.newsletter-form)').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const orig = btn.textContent;
      setBtn(btn, 'Sent!', true);
      setTimeout(() => { setBtn(btn, orig, false); form.reset(); }, 3000);
    });
  });
});
