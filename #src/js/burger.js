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


function checkboxes() {
   let pageSearchCheckboxes = document.querySelectorAll('.checkbox');
   
   for (let i = 0; i < pageSearchCheckboxes.length; i++) {
   let checkboxCategory = pageSearchCheckboxes[i];
      checkboxCategory.addEventListener('change', () => {
         checkboxCategory.classList.toggle('collect');

         let collectActiveCheckboxes = document.querySelectorAll('.checkbox.collect');
         console.log(collectActiveCheckboxes);
         if (collectActiveCheckboxes.length > 0) {
            document.querySelector('.search-page__title').classList.add('categories');
            let searchQuantity = document.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-title') + collectActiveCheckboxes.length;
         } else {
            document.querySelector('.search-page__title').classList.remove('categories');
         }
      })
      
   }
}
checkboxes();


