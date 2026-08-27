document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteHeader = document.getElementById('siteHeader');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('nav-open');
  });
  document.querySelectorAll('.primary-nav a').forEach(link => {
    link.addEventListener('click', () => siteHeader.classList.remove('nav-open'));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
