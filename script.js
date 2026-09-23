const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;progress.style.width=`${p}%`;},{passive:true});
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open')})}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
