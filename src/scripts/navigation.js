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

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActive(visible.target.id);
    },
    {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: [0.1, 0.25, 0.5, 0.75]
    }
  );

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) setActive(target.id);
    });
  });

  setActive(sections[0].id);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioNavigation, { once: true });
} else {
  initPortfolioNavigation();
}
