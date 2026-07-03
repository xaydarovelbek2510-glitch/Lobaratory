// ===== SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');

if (slides.length > 0) {
  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    if (dotsContainer) dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    const dots = document.querySelectorAll('.slider-dot');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function changeSlide(dir) {
    let next = currentSlide + dir;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);
  }

  // Auto slide
  setInterval(() => changeSlide(1), 5000);
}

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 16px rgba(0,0,0,.2)' : '0 2px 8px rgba(0,0,0,.1)';
  }
});
