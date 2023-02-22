const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenu = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const orderConteiner = document.querySelector('.my-order-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrderConteiner);

function toggleDesktopMenu() {
    const isOrderConteinerClose = orderConteiner.classList.contains('inactive');

    if (!isOrderConteinerClose) {
        orderConteiner.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isOrderConteinerClose = orderConteiner.classList.contains('inactive');

    if (!isOrderConteinerClose) {
        orderConteiner.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}
function toggleOrderConteiner() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    
    orderConteiner.classList.toggle('inactive');
}