/* Layout-mode + uniform desktop scaling.
       innerWidth * devicePixelRatio equals the physical window width and does NOT change with
       browser zoom (zoom divides innerWidth and multiplies devicePixelRatio), so a desktop at any
       zoom stays "desktop". Touch-first devices (tablets/phones) report a coarse pointer and keep
       the responsive layout. */
    (function () {
      var W = 1440, H = 900, root = document.documentElement;
      var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
      function apply() {
        var phys = window.innerWidth * (window.devicePixelRatio || 1);
        var desktop = fine.matches && phys >= 1000;
        if (desktop) {
          var s = Math.min(window.innerWidth / W, window.innerHeight / H);
          root.style.setProperty('--ds', s);
          root.style.setProperty('--ds-x', ((window.innerWidth - W * s) / 2) + 'px');
          root.style.setProperty('--ds-y', ((window.innerHeight - H * s) / 2) + 'px');
          root.setAttribute('data-layout', 'desktop');
        } else {
          root.setAttribute('data-layout', 'responsive');
          ['--ds', '--ds-x', '--ds-y'].forEach(function (p) { root.style.removeProperty(p); });
        }
      }
      apply();
      window.addEventListener('resize', apply);
      if (fine.addEventListener) fine.addEventListener('change', apply);
    })();
