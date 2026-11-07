(function(){
 var r=document.documentElement;
 try{var l=localStorage.getItem('lang');if(l)r.lang=l;var t=localStorage.getItem('theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
 if(!r.getAttribute('data-theme')){r.setAttribute('data-theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
 document.getElementById('lang').onclick=function(){r.lang=r.lang==='uk'?'en':'uk';try{localStorage.setItem('lang',r.lang)}catch(e){}};
 document.getElementById('theme').onclick=function(){
  var dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
  var n=dark?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}
 };
 var els=document.querySelectorAll('.card,.steps div,.contact,section h2,.note');
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.style.transitionDelay=''},1000)}})},{threshold:.15});
  els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=((i%3)*0.1)+'s';io.observe(el)});
 }
})();

