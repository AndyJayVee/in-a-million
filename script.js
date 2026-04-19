const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById('progress-bar').style.width = `${progress}%`;
});

const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:' + 'andy' + '@' + 'in-a-million.com';
  });
}
