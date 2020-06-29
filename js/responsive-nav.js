const headerContainer = document.querySelector('#header-container');
const responsiveNav = headerContainer.querySelector('#responsive-navbar');
const menuIcon = headerContainer.querySelector('#menu-icon');
const logo = headerContainer.querySelector('#header__logo');

window.onclick = e => responsiveNav.style.right = (e.target === menuIcon) ? "0" : "-280px";

window.onscroll = () => {
    if (window.pageYOffset > 260) {
        headerContainer.style.boxShadow = "0px 5px 8px rgb(0, 0, 0, 5%)";
        logo.style.width = "130px";
    }
    else {
        headerContainer.style.boxShadow = "none";
        logo.style.width = "195px";
    }
}