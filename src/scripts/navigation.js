const nav = [...document.querySelectorAll('[data-nav-id]')];
const sections = [...document.querySelectorAll('.slide')];
const counter = document.querySelector('#counter');
const message = document.querySelector('#message');
if (message && counter) message.addEventListener('input', () => counter.textContent = `${message.value.length}/500`);
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) nav.forEach(a => a.classList.toggle('active', a.dataset.navId === entry.target.id)); }), { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
sections.forEach(s => observer.observe(s));
const form = document.querySelector('#connect-form');
if (form) form.addEventListener('submit', e => { e.preventDefault(); const button = form.querySelector('button'); button.textContent = 'Message Ready ✓'; button.disabled = true; });