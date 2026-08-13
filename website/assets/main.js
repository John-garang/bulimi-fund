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
