const skillBars = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.progress + '%';
    }
  });
});
