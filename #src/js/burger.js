// header burger
function burgerMenu() {
   const iconMenu = document.querySelector('.icon-menu');
   const menuIconBody = document.querySelector('.menu__body');
   const body = document.querySelector('body');
   
   iconMenu.classList.toggle('active');
   menuIconBody.classList.toggle('active');
   body.classList.toggle('lock');
}
document.querySelector('.icon-menu').onclick = burgerMenu;

// aside burger
function burgerAsideMenu() {
   const menuIconAside = document.querySelector('.menu-page__burger');
   const menuPageBody = document.querySelector('.menu-page__body');
   menuIconAside.classList.toggle('active');
   menuPageBody.classList.toggle('active');
}
document.querySelector('.menu-page__burger').onclick = burgerAsideMenu;

// aside menu
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

// search page
function pageSearch() {
   const searchPageSelect = document.querySelector('.search-page__select');
   const categoriesSearch = document.querySelector('.categories-search');

   categoriesSearch.classList.toggle('active');
   searchPageSelect.classList.toggle('active');
}
document.querySelector('.search-page__select').onclick = pageSearch;

