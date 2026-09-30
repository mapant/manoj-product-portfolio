function setupNavigation() {
  const links = [...document.querySelectorAll('[data-nav-id]')];
  const sections = [...document.querySelectorAll('[data-section]')];
  if (!links.length || !sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.dataset.navId === id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActive(visible.target.id);
  }, {
    root: null,
    threshold: [0.35, 0.5, 0.75],
    rootMargin: '-112px 0px 0px 0px'
  });

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
  const status = document.querySelector('#contact-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Name: ${data.get('name')}\n\n${data.get('message') || ''}`;
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = 'Enquiry copied. Paste it into your preferred email or messaging channel.';
    } catch {
      status.textContent = message;
    }
  });
}

function boot() {
  setupNavigation();
  setupContactForm();
}

window.addEventListener('load', boot, { once: true });
boot();
