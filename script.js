// Add event listener to window load
window.addEventListener('load', function() {
    // Get all images with class fade-in
    const images = document.querySelectorAll('.fade-in');
    
    // Add event listener to window scroll
    window.addEventListener('scroll', function() {
        // Check if image is in viewport
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Add class animated to image
                image.classList.add('animated');
            }
        });
    });
});