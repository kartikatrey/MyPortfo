document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--percentage', `${progress}%`);
        circle.style.animation = 'fillCircle 2s ease forwards';
    });
});
