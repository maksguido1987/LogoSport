function burgerMenu() {
   let iconMenu = document.querySelector('.icon-menu');
   let menuIconBody = document.querySelector('.menu__body');
   let body = document.querySelector('body');
   
   iconMenu.classList.toggle('active');
   menuIconBody.classList.toggle('active');
   body.classList.toggle('lock');
}

document.querySelector('.icon-menu').onclick = burgerMenu;