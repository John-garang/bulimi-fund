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

// Form submission feedback
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sent!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; form.reset(); }, 3000);
  });
});
