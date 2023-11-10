window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxSpeed = 0.5;
    var heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundPositionY = -(scrollPosition * parallaxSpeed) + 'px';
});


container.querySelectorAll('.scroll-container img').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        img.classList.add('hover-effect');
    });

    img.addEventListener('mouseleave', function() {
        img.classList.remove('hover-effect');
    });
});
 