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