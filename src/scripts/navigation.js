const desktopQuery = window.matchMedia('(min-width: 1000px)');

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

function setupCanvas() {
  const viewport = document.querySelector('[data-portfolio-viewport]');
  const canvases = [...document.querySelectorAll('.slide-canvas')];
  const slides = [...document.querySelectorAll('.slide')];
  if (!viewport || !canvases.length) return;

  if (!desktopQuery.matches) {
    canvases.forEach((canvas) => {
      canvas.style.removeProperty('transform');
      canvas.style.removeProperty('width');
      canvas.style.removeProperty('height');
    });
    slides.forEach((slide) => {
      slide.style.removeProperty('height');
      slide.style.removeProperty('min-height');
    });
    viewport.style.removeProperty('height');
    return;
  }

  // One authoritative desktop presentation canvas for every portfolio section.
  // The canvas stays centered; browser zoom only changes the uniform scale.
  const designWidth = 1920;
  const designHeight = 920;
  const scale = Math.min(
    viewport.clientWidth / designWidth,
    viewport.clientHeight / designHeight,
    1
  );

  canvases.forEach((canvas) => {
    canvas.style.setProperty('width', `${designWidth}px`, 'important');
    canvas.style.setProperty('height', `${designHeight}px`, 'important');
    canvas.style.setProperty(
      'transform',
      `translate(-50%, -50%) scale(${scale})`,
      'important'
    );
  });

  slides.forEach((slide) => {
    const scaledHeight = designHeight * scale;
    slide.style.setProperty('height', `${scaledHeight}px`, 'important');
    slide.style.setProperty('min-height', `${scaledHeight}px`, 'important');
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

function boot() {
  setupCanvas();
  setupNavigation();
  setupContactForm();
}

window.addEventListener('resize', setupCanvas, { passive: true });
window.addEventListener('load', boot, { once: true });
boot();