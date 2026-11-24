
// =================================
// GHAR KA KHANA RESTAURANT
// JavaScript Functionality
// =================================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Gallery Image Lightbox
document.querySelectorAll('.gallery-container img')
.forEach(image => {
    image.addEventListener('click', function() {
        const lightbox = document.createElement('div');

        lightbox.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            cursor: pointer;
        `;

        const img = document.createElement('img');
        img.src = this.src;

        img.style.cssText = `
            max-width: 90%;
            max-height: 85%;
            border-radius: 10px;
        `;

        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Automatic Copyright Year
const footerText = document.querySelector('footer p:last-child');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Ghar Ka Khana. All Rights Reserved.`;
}

// Welcome Message
console.log("Welcome to Ghar Ka Khana Restaurant!");
