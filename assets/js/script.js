document.addEventListener('DOMContentLoaded', function() {
    // Navbar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Lightbox Functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    if(galleryItems.length > 0) {
        // Create Lightbox Elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const lightboxImg = document.createElement('img');
        const lightboxClose = document.createElement('span');
        lightboxClose.className = 'lightbox-close';
        lightboxClose.innerHTML = '&times;';
        
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(lightboxClose);
        document.body.appendChild(lightbox);

        // Open Lightbox
        galleryItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                lightboxImg.src = item.src;
                lightbox.classList.add('active');
            });
        });

        // Close Lightbox
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
});
