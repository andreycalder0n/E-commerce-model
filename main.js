const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle('inactive');
}