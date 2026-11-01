// ==================== AOS Animation ====================
AOS.init({
  duration: 1000,
  once: true
});

// ==================== Typing Animation ====================
const words = ["Software Developer", "UI Designer", "Web Developer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  let display = currentWord.substring(0, j);
  document.querySelector(".typing").textContent = display;

  if (!isDeleting && j < currentWord.length) j++;
  else if (isDeleting && j > 0) j--;

  if (j === currentWord.length) isDeleting = true;
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 80 : 150);
}

type();

// ==================== BURGER MENU TOGGLE ====================
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.querySelector('i').classList.toggle('fa-xmark'); // toggle between ☰ and ✖️
});

// Close menu when clicking a navbar link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    burger.querySelector('i').classList.remove('fa-xmark');
  });
});
