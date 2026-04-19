const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
});

const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:' + 'andy' + '@' + 'in-a-million.com';
  });
}
