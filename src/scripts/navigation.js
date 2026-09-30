/**
 * Portfolio navigation
 * Native document scrolling only.
 * No canvas measurements, no transforms, no JS scaling.
 */
const initPortfolioNavigation = () => {
  const links = Array.from(document.querySelectorAll('#nav a'));
  const sections = Array.from(document.querySelectorAll('main > .slide'));

  if (!links.length || !sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const headerHeight = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h')
  ) || 0;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive(visible.target.id);
    },
    {
      root: null,
      rootMargin: `-${headerHeight}px 0px -55% 0px`,
      threshold: [0.05, 0.15, 0.35, 0.6]
    }
  );

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (target) setActive(target.id);
    });
  });

  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    if (id) setActive(id);
  });

  setActive(window.location.hash.slice(1) || sections[0].id);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioNavigation, { once: true });
} else {
  initPortfolioNavigation();
}
