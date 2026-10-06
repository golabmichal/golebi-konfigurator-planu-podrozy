(function () {
  var nav = document.querySelector('nav.spis');
  if (!nav || !('IntersectionObserver' in window)) return;
  var lista = nav.querySelector('ol');
  var linki = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sekcje = linki.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var widac = {};
  var obs = new IntersectionObserver(function (wpisy) {
    wpisy.forEach(function (w) { widac[w.target.id] = w.isIntersecting; });
    var nr = -1;
    for (var i = 0; i < sekcje.length; i++) if (sekcje[i] && widac[sekcje[i].id]) { nr = i; break; }
    if (nr < 0) return;
    linki.forEach(function (a, i) {
      if (i !== nr) { a.removeAttribute('aria-current'); return; }
      a.setAttribute('aria-current', 'location');
      if (lista.scrollWidth > lista.clientWidth) lista.scrollLeft = a.parentNode.offsetLeft - 16;
    });
  }, { rootMargin: '-72px 0px -55% 0px' });
  sekcje.forEach(function (s) { if (s) obs.observe(s); });
})();
