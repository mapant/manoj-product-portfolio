const mainScroll = document.querySelector('main');
    const sections = Array.from(document.querySelectorAll('.slide'));
    const navLinks = Array.from(document.querySelectorAll('#nav a'));

    const setActive = () => {
      if (!mainScroll || !sections.length) return;
      const marker = mainScroll.scrollTop + (mainScroll.clientHeight * 0.34);
      let current = sections[0].id;

      for (const section of sections) {
        if (marker >= section.offsetTop) current = section.id;
      }

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const target = document.querySelector(link.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    mainScroll?.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('resize', setActive, { passive: true });
    window.addEventListener('load', setActive);
    setActive();
  