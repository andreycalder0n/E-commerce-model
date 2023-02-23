const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenu = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const orderConteiner = document.querySelector('.my-order-container');
const cardsConteiner = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrderConteiner);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

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

    closeProductDetail();
}
function toggleOrderConteiner() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isProductDeailClose = productDetailContainer.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDeailClose) {
        productDetailContainer.classList.add('inactive');
    }
    
    orderConteiner.classList.toggle('inactive');
}
function openProductDetail() {
    orderConteiner.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Garden',
    price: 100,
    image: './Products_imgs/garden.jpg'
});
productList.push({
    name: 'Shoes',
    price: 50,
    image: './Products_imgs/shoes.jpg'
});
productList.push({
    name: 'Bag',
    price: 150,
    image: './Products_imgs/bag.jpg'
});
productList.push({
    name: 'Garden',
    price: 100,
    image: './Products_imgs/garden.jpg'
});
productList.push({
    name: 'Shoes',
    price: 50,
    image: './Products_imgs/shoes.jpg'
});
productList.push({
    name: 'Bag',
    price: 150,
    image: './Products_imgs/bag.jpg'
});
productList.push({
    name: 'Garden',
    price: 100,
    image: './Products_imgs/garden.jpg'
});
productList.push({
    name: 'Shoes',
    price: 50,
    image: './Products_imgs/shoes.jpg'
});
productList.push({
    name: 'Bag',
    price: 150,
    image: './Products_imgs/bag.jpg'
});
productList.push({
    name: 'Garden',
    price: 100,
    image: './Products_imgs/garden.jpg'
});
productList.push({
    name: 'Shoes',
    price: 50,
    image: './Products_imgs/shoes.jpg'
});
productList.push({
    name: 'Bag',
    price: 150,
    image: './Products_imgs/bag.jpg'
});

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('class', 'product-img');
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoP = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoP.appendChild(productPrice);
        productInfoP.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoP);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsConteiner.appendChild(productCard);
    }
}

renderProducts(productList);