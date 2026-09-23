const progress = document.querySelector('.progress');
const reveals = document.querySelectorAll('.reveal');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .12});

reveals.forEach(el => observer.observe(el));

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px';
    nav.style.background = '#0b0d12';
    nav.style.flexDirection = 'column';
    nav.style.borderBottom = '1px solid rgba(255,255,255,.1)';
  }
});
