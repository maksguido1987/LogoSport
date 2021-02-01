function burgerMenu() {
   const iconMenu = document.querySelector('.icon-menu');
   const menuIconBody = document.querySelector('.menu__body');
   const body = document.querySelector('body');
   
   iconMenu.classList.toggle('active');
   menuIconBody.classList.toggle('active');
   body.classList.toggle('lock');
}
document.querySelector('.icon-menu').onclick = burgerMenu;


function burgerAsideMenu() {
   const menuIconAside = document.querySelector('.menu-page__burger');
   const menuPageBody = document.querySelector('.menu-page__body');
   menuIconAside.classList.toggle('active');
   menuPageBody.classList.toggle('active');
}
document.querySelector('.menu-page__burger').onclick = burgerAsideMenu;


function asideMenu() {
   let menuParents = document.querySelectorAll('.menu-page__parent');

   for (let i = 0; i < menuParents.length; i++) {
      menuParents[i].addEventListener('mouseenter', () => {
         menuParents[i].classList.add('active');
      })
      menuParents[i].addEventListener('mouseleave', () => {
         menuParents[i].classList.remove('active');
      })
   }
   
}

asideMenu();