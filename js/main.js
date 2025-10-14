document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });


  const animatedElements = document.querySelectorAll(
    '.me, .projects, .skills, .certificates, .project-item, .certificate-item'
  );

  animatedElements.forEach(el => observer.observe(el));
});