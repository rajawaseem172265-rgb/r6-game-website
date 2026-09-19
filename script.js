const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const backTop = document.querySelector('.back-top');

menuBtn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});

backTop.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

document.getElementById('year').textContent = new Date().getFullYear();
