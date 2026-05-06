// ===== Year =====
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// ===== Sticky nav state =====
(function(){
  const nav = document.getElementById('nav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
})();

// ===== Mobile menu =====
(function(){
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
  }));
})();

// ===== Reveal on scroll =====
(function(){
  const targets = document.querySelectorAll(
    '.display, .lede, .pillar, .cap, .commitments li, .layer, .series > div, .quote__text, .contact > div, .indexnav__list li, .cap-index li, .sub, .member, .mp__inner, .stat, .feat__card, .art, .case, .office, .award, .press__item, .time li, .role, .press-logos__list li, .page-hero h1, .page-hero p, .bio__name, .bio__lead, .bio__col p, .hero__eyebrow, .hero__title, .hero__lede, .hero__actions, .hero__meta'
  );
  targets.forEach(el => el.setAttribute('data-reveal',''));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
  targets.forEach(el => io.observe(el));
})();
