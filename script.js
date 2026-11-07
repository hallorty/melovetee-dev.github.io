(function(){
 var r=document.documentElement;
 try{var l=localStorage.getItem('lang');if(l)r.lang=l;if(localStorage.getItem('theme')==='light')r.setAttribute('data-theme','light')}catch(e){}
 var menu=document.getElementById('menu'),openBtn=document.getElementById('open');
 function setMenu(on){
  menu.classList.toggle('open',on);
  menu.setAttribute('aria-hidden',on?'false':'true');
  openBtn.setAttribute('aria-expanded',on?'true':'false');
  document.body.style.overflow=on?'hidden':'';
 }
 openBtn.onclick=function(){setMenu(true)};
 document.getElementById('close').onclick=function(){setMenu(false)};
 menu.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
 document.getElementById('lang').onclick=function(){r.lang=r.lang==='uk'?'en':'uk';try{localStorage.setItem('lang',r.lang)}catch(e){}};
 document.getElementById('theme').onclick=function(){
  var light=r.getAttribute('data-theme')==='light';
  if(light)r.removeAttribute('data-theme');else r.setAttribute('data-theme','light');
  try{localStorage.setItem('theme',light?'dark':'light')}catch(e){}
 };
 var els=document.querySelectorAll('.kicker,.intro,.ghost,.lead,.grid>div,.price,.step,.big,.note');
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=((i%3)*0.08)+'s';io.observe(el)});
 }
})();
