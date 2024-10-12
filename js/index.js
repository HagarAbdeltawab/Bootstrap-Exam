document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar'); 
    const homeSection = document.getElementById('home');
    const links = document.querySelectorAll('.nav-link');
    const brand = document.querySelector('.navbar-brand');
    const btn = document.querySelector('.navbar-toggler-icon');

    window.addEventListener('scroll', function () {
        if (window.scrollY > homeSection.offsetHeight) {
            navbar.classList.add('scrolled');
            brand.classList.add('scrolled'); 
            btn.classList.remove('scrolled');
            links.forEach(link => {
                link.classList.add('scrolled');
            });
        } else {
            navbar.classList.remove('scrolled');
            brand.classList.remove('scrolled'); 
            btn.classList.add('scrolled');
            links.forEach(link => {
                link.classList.remove('scrolled');
            });
        }
    });
});