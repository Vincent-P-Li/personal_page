// shared site bootstrap  — light default
(function(){
  try{
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    // default is light (no attribute needed, CSS handles it)
  }catch(e){}
})();

document.addEventListener('DOMContentLoaded', ()=>{
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // theme toggles
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try{ localStorage.setItem('theme', next); }catch(e){}
    });
  });

  // smooth in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length > 1){
        const el = document.querySelector(id);
        if(el){
          e.preventDefault();
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
        }
      }
    });
  });

  // reveal-on-scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }});
  }, { threshold: .08 });
  document.querySelectorAll('section.block, .page-hero').forEach(el=>{ el.classList.add('reveal'); io.observe(el); });
});
