const links = [...document.querySelectorAll('[data-nav-id]')];
const sections = [...document.querySelectorAll('[data-section]')];

function setActive(id) {
  links.forEach((link) => {
    const active = link.dataset.navId === id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function setupNavigation() {
  if (!links.length || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { root: null, threshold: [0.35, 0.6, 0.8] });

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.getElementById(link.dataset.navId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  setActive('overview');
}

function setupCanvas() {
  const viewport = document.querySelector('[data-portfolio-viewport]');
  const canvases = [...document.querySelectorAll('.slide-canvas')];
  if (!viewport || !canvases.length) return;

  const designWidth = 1920;
  const designHeight = 920;
  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  if (!viewportWidth || !viewportHeight) return;

  const scale = Math.min(
    viewportWidth / designWidth,
    viewportHeight / designHeight
  );

  canvases.forEach((canvas) => {
    canvas.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });
}

function setupCanvasObserver() {
  const viewport = document.querySelector('[data-portfolio-viewport]');
  if (!viewport) return;

  setupCanvas();

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(setupCanvas);
    observer.observe(viewport);
  } else {
    window.addEventListener('resize', setupCanvas, { passive: true });
  }
}

function setupContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Portfolio enquiry from ${data.get('name') || 'a visitor'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Email: ${data.get('email') || ''}`,
      '',
      data.get('message') || ''
    ].join('\n');
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

setupNavigation();
setupCanvasObserver();
setupContactForm();
