document.addEventListener('DOMContentLoaded', () => {
    const experiences = document.querySelectorAll('.experience');
    experiences.forEach(exp => {
        exp.addEventListener('mouseenter', () => {
            exp.classList.add('active');
        });
        exp.addEventListener('mouseleave', () => {
            exp.classList.remove('active');
        });
    });
});
