function burgerMenu() {
   let iconMenu = document.querySelector('.icon-menu');
   let menuIconBody = document.querySelector('.menu__body');
   let body = document.querySelector('body');
   
   iconMenu.classList.toggle('active');
   menuIconBody.classList.toggle('active');
   body.classList.toggle('lock');
}

document.querySelector('.icon-menu').onclick = burgerMenu;


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