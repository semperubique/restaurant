import { switchToHome } from "./module_home";

const pageHandler = (() => {
    const initializePage = () => {
        const content = document.querySelector('#content');
    
        const header = document.createElement('header');
        const main = document.createElement('main');
        const footer = document.createElement('footer');
    
        const navigationBar = document.createElement('nav');
        navigationBar.innerHTML = `
        <ul>
            <li id='home'>HOME</li>
            <li id='menu'>MENU</li>
            <li id='contact'>CONTACT</li>
        </ul>
        `;
        header.appendChild(navigationBar);
    
        // main.innerHTML = `
        // <p>Wow amazing website</p>
        // `;
        main.id = 'main_content';
    
        footer.innerHTML = `
        <p>Made by Murad Ildarov</p>
        `;
    
        content.appendChild(header);
        content.appendChild(main);
        content.appendChild(footer);

        const homeTab = document.querySelector('#home');
        homeTab.classList.add('active-tab');
        const homeContent = switchToHome.createContent();
        main.appendChild(homeContent);
    };   

    return {initializePage} 
})();

export {pageHandler}