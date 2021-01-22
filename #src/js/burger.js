function burgerMenu() {
   let iconMenu = document.querySelector('.icon-menu');
   let body = document.querySelector('body');
   
   iconMenu.classList.toggle('active');
   body.classList.toggle('lock');
}

document.querySelector('.icon-menu').onclick = burgerMenu;