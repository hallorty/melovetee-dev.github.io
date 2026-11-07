(function(){
 var r=document.documentElement;
 try{var l=localStorage.getItem('lang');if(l)r.lang=l;if(localStorage.getItem('theme')==='dark')r.setAttribute('data-theme','dark')}catch(e){}
 document.getElementById('lang').onclick=function(){r.lang=r.lang==='uk'?'en':'uk';try{localStorage.setItem('lang',r.lang)}catch(e){}};
 document.getElementById('theme').onclick=function(){
  var dark=r.getAttribute('data-theme')==='dark';
  if(dark)r.removeAttribute('data-theme');else r.setAttribute('data-theme','dark');
  try{localStorage.setItem('theme',dark?'light':'dark')}catch(e){}
 };
 var links=document.getElementById('links');
 document.getElementById('burger').onclick=function(){links.classList.toggle('open')};
 links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open')})});
 var els=document.querySelectorAll('.sec h2,.c,.step,.note,.cta');
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=((i%4)*0.08)+'s';io.observe(el)});
 }
})();
