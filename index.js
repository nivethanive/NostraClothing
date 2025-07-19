const slider = document.querySelector('.slider-image-container');
const slides = slider.children;
const totalSlides = slides.length;
let currentSlide = 0;

// Set the width of the slider container to fit all images side-by-side
slider.style.width = `${totalSlides * 100}%`;
slider.style.display = 'flex';

function updateSlider() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}

// Left button: move back
document.querySelector('.slider-left-button').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Right button: move forward
document.querySelector('.slider-right-button').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});


  // SMOOTH SCROLL TO NEW ARRIVAL & MOST WANTED
  const navLinks = document.querySelectorAll('nav a');
  const sections = {
    'New Arrival': document.querySelector('.new-arrival'),
    'Most Wanted': document.querySelector('.most-wanted')
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const text = e.target.textContent.trim();
      if (sections[text]) {
        e.preventDefault();
        sections[text].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // SCROLL ANIMATION ON VIEW
  const faders = document.querySelectorAll('.new-arrival-box1, .most-wanted-box1, .service-container-2 > div');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700', 'ease-in-out');
    appearOnScroll.observe(fader);
  });

 



