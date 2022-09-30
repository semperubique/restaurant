import {pageHandler} from './initial_load';
import {switchToHome} from './module_home';
import {switchToMenu} from './module_menu';
import {switchToContact} from './module_contact';

pageHandler.initializePage();

const addEventListenerToTabs = (() => {
    const mainContent = document.querySelector('#main_content');
    const homeTab = document.querySelector('#home');
    const menuTab = document.querySelector('#menu');
    const contactTab = document.querySelector('#contact');

    homeTab.addEventListener('click', () => {
        homeTab.classList.add('active-tab');
        menuTab.classList.remove('active-tab');
        contactTab.classList.remove('active-tab');
        const homeContent = switchToHome.createContent();
        mainContent.innerHTML = "";
        mainContent.appendChild(homeContent);
    });
    
    menuTab.addEventListener('click', () => {
        homeTab.classList.remove('active-tab');
        menuTab.classList.add('active-tab');
        contactTab.classList.remove('active-tab');
        const menuContent = switchToMenu.createContent();
        mainContent.innerHTML = "";
        mainContent.appendChild(menuContent);
    });
    
    contactTab.addEventListener('click', () => {
        homeTab.classList.remove('active-tab');
        menuTab.classList.remove('active-tab');
        contactTab.classList.add('active-tab');        const contactContent = switchToContact.createContent();
        mainContent.innerHTML = "";
        mainContent.appendChild(contactContent);
    });
})();