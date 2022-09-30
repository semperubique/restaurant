import Home from './background.jpg';

const switchToHome = (() => {
    const createContent = () => {
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home');
        homeContainer.innerHTML =`
        <p>Best burgers accross the globe</p>
        <img src=${Home}/>
        <p>Order online or come visit us!</p>
        `;
        return homeContainer;
    };

    return {createContent}
})();

export {switchToHome}