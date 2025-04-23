import wixWindow from 'wix-window';

$w.onReady(function () {
  const header = $w('#siteHeader');
  const logo   = $w('#logoStrip');

  function shrink() {
    const scrolled = wixWindow.scrollY > 120;
    header.background.opacity = scrolled ? 0.8 : 1;
    header.height             = scrolled ? 56  : 96;
    logo.scale                = scrolled ? 0.7 : 1;
  }

  wixWindow.onScroll(() => shrink());
  shrink();  // run once on load
});