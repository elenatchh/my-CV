// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const downloadCV = document.getElementById('download-cv');
const profilePhoto = document.querySelector('.profile-photo');

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Expand Profile Photo
profilePhoto.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 1000;

    const enlargedPhoto = document.createElement('img');
    enlargedPhoto.src = profilePhoto.src;
    enlargedPhoto.style.maxWidth = '80%';
    enlargedPhoto.style.maxHeight = '80%';
    enlargedPhoto.style.borderRadius = '20px';
    enlargedPhoto.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';

    overlay.appendChild(enlargedPhoto);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
});

// Download Design as PDF
document.getElementById("download-pdf").addEventListener("click", function () {
    const element = document.body; // Ou remplace par l'ID ou classe que tu veux exporter
    const options = {
        margin: 1,
        filename: 'mon_cv.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
});

// Responsive Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});