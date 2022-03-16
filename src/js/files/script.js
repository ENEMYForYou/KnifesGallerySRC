// // Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";

document.addEventListener('click', documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
        menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
    })
}

function documentActions(e) {
    const target = e.target;
    if (target.closest('[data-parent]')) {        
        const subMenuID = target.dataset.parent ? target.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuID}"]`);      
        if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');            
            if (activeLink && activeLink !== target) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }   
            document.documentElement.classList.toggle('sub-menu-open');
            target.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        } else {
            console.log('Missed');            
        }
        e.preventDefault();
    }
    if (target.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('catalog-open');
		e.preventDefault();
	}
	if (target.closest('.menu-catalog__back')) {
		document.documentElement.classList.remove('catalog-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}
	if (target.closest('.sub-menu-catalog__back')) {
		document.documentElement.classList.remove('sub-menu-open');
		document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
		document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
		e.preventDefault();
	}

    
}

