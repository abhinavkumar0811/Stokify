// Toggle Navbar on Mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Login/Logout Functionality
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

loginBtn.addEventListener('click', () => {
  alert('Login functionality here!');
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
});

logoutBtn.addEventListener('click', () => {
  alert('Logout functionality here!');
  logoutBtn.style.display = 'none';
  loginBtn.style.display = 'inline-block';
});

//nav end 

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.getElementById('indicators');
let currentSlide = 0;
let intervalId;

// Create indicators
for (let i = 0; i < slides.length; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
}
const indicators = document.querySelectorAll('.indicator');
indicators[0].classList.add('active'); // Highlight the first indicator

function showSlide(n) {
    slider.style.transform = `translateX(-${n * 100}%)`;

    // Update active indicator
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000); // Adjust delay as needed
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

startAutoSlide(); // Start auto-sliding on page load

slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);

// Image Preloading (Important!)
const images = [
    "grocery_ad1.jpg",
    "grocery_ad2.jpg",
    "grocery_ad3.jpg",
];

images.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
});

