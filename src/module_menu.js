import Burger from './hamburger.png';


const switchToMenu = (() => {
    const createContent = () => {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu');
        menuContainer.innerHTML =`
        <div class="menu-item">
            <img src=${Burger} alt="">
            <div class="item-content">
            <h4>Hamburger: <span>$2.49</span></h4>
            <p>
                Buns, patty, tomato, onions, lettuce, and our secret family
                recipe.
            </p>
            </div>
        </div>
        <div class="menu-item">
            <img src=${Burger} alt="">
            <div class="item-content">
            <h4>Cheeseburger: <span>$2.99</span></h4>
            <p>Similar to our hamburger, but with cheese.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src=${Burger} alt="">
            <div class="item-content">
            <h4>Double Cheeseburger: <span>$3.49</span></h4>
            <p>Similar to our cheeseburger, but with an extra patty.</p>
            </div>
        </div>
        <div class="menu-item">
            <img src=${Burger} alt="">
            <div class="item-content">
            <h4>French Fries: <span>$1.99</span></h4>
            <p>
                Sometimes you don't want to eat your burger alone, why not add
                some french fries?
            </p>
            </div>
        </div>
        `;
        return menuContainer;
    };

    return {createContent}
})();

export {switchToMenu}