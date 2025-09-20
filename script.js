// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});
const roleText = document.querySelector(".role-text");
roleText.textContent = "Software Developer | Frontend Developer"; // full text

// Fade-in effect
roleText.style.opacity = 0;
roleText.style.transition = "opacity 3s";
setTimeout(() => {
  roleText.style.opacity = 1;
}, 100); // start fade-in after 0.1s

// Toggle between short and full bio
function toggleBio() {
  const shortBio = document.getElementById('shortBio');
  const fullBio = document.getElementById('fullBio');
  const button = document.querySelector('.btn-read-more');

  if (fullBio.style.display === 'none') {
    fullBio.style.display = 'block';
    shortBio.style.display = 'none';
    button.textContent = 'Read Less';
  } else {
    fullBio.style.display = 'none';
    shortBio.style.display = 'block';
    button.textContent = 'Read More';
  }
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update the icon
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;

                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});