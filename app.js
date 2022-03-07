const allBtn = document.querySelectorAll('.product-hamburger');
const navMenu = document.querySelector('.nav-pc');
const mobileBtn = document.querySelector('.toggleBg');
const lateralBtn = document.querySelector('.label-mobile')
const mainBg = document.querySelector('main');
const linkProduct = document.querySelector('.link-product-mobile');
const productMenu = document.querySelector('.product-ul');
const ligneMenu = document.querySelector('.lignes-menu');

const input = document.querySelector('.input-mobile');
const fenetreNode = document.querySelector('.nav-mobile');

// Btn Menu PC
allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        navMenu.classList.toggle('active-menu')
    });
});

// Btn Menu Mobile
mobileBtn.addEventListener('click', () => {
    mainBg.classList.toggle('active');
    lateralBtn.classList.toggle('active');
})

// Btn Déroulant Mobile
linkProduct.addEventListener('click', () => {
    productMenu.classList.toggle('active');
    ligneMenu.classList.toggle('active');
})
