import menu from './menu_text';

export default function createmenu() {
    const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu_container');
   
    const Menu = menu.menu;
    for(let item in Menu) {
        const row = document.createElement('div');
            row.classList.add('menu_row');
            const col_1 = document.createElement('div');
            const col_2 = document.createElement('div');
            col_1.classList.add('column');
            col_2.classList.add('column');
        const food = document.createElement('p');
        food.innerText = `${Menu[item]['food']}`;
        const price = document.createElement('p');
        price.innerText = `${Menu[item]['price']}`;

        col_1.appendChild(food);
        col_2.appendChild(price);
        row.append(col_1, col_2);
        menuContainer.append(row);
    };

    return menuContainer;
}
