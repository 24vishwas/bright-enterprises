function openTab(event, tabId) {
    // Get all elements with class="tab-content" and hide them
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Get all elements with class="tab-button" and remove the class "active"
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function populateAllTab() {
    const allTabGallery = document.querySelector('#all .gallery');
    const galleries = document.querySelectorAll('.tab-content .gallery');

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        images.forEach(img => {
            const imgClone = img.cloneNode();
            allTabGallery.appendChild(imgClone);
        });
    });
     addLightboxToImages();
}

// Populate the "All" tab when the page loads
document.addEventListener('DOMContentLoaded', populateAllTab);

function addLightboxToImages() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            console.log(this.dataset.srcset);
            openLightbox(this.dataset.srcset);
        });
    });
}

function openLightbox(src) {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxModal.style.display = 'flex';
    lightboxImage.src = src;
}

function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.style.display = 'none';
}


// carousel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const slideCount = slideImages.length;
    let currentIndex = 0;

    // Set the width of the slides container dynamically
    // slides.style.width = `${slideCount * 100}%`;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slideImages.length) {
            currentIndex = 0;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3500);
});
