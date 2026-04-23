const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
});


const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {

      entry.target.animate(
        {
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        {
          duration: 600,
          delay: i * 200,
          fill: 'forwards'
        }
      );

      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});


const workBtns = document.querySelectorAll('.work-btn');
const workCards = document.querySelectorAll('.work-card');

workBtns.forEach(workBtn => {
    workBtn.addEventListener('click', () => {

        workBtns.forEach(b => {
            b.classList.remove('active');
        });

        workCards.forEach(c => {
            c.classList.remove('active');
        });

        workBtn.classList.add('active');

        const target = document.getElementById(workBtn.dataset.target);
        if (target) {
            target.classList.add('active');
        }
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('現在はポートフォリオのため送信機能は停止しています。');
});


const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});