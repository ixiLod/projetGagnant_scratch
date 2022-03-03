const allBtn = document.querySelectorAll('.product-hamburger');
const navMenu = document.querySelector('.naav');

allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        navMenu.classList.toggle('active-menu');
    });
});
