import './home_style.css';
import {about, menu, bookings} from './text_content';


function createBody() {
    const div = document.querySelector('#content');
    const page = {about: '', menu: '', booking: ''};

    const content = document.createDocumentFragment();
    const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('body_container');
        for(let item in page) {
            const div = document.createElement('div');
            div.classList.add('contents');
            div.id = `section-${item}`;
            bodyContainer.appendChild(div);
        }

    const infoContainer = document.createElement('div');
        infoContainer.classList.add('info');
        infoContainer.innerText = about;
    
        const menuContainer = createMenu();

    bodyContainer.querySelector('#section-about').append(infoContainer);
    bodyContainer.querySelector('#section-menu').append(menuContainer);
    bodyContainer.querySelector('#section-booking').innerText = 'bookings';
    content.appendChild(bodyContainer);
    div.appendChild(content);
    
    return div;
}

function createMenu() {
    const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu');
    for(let item in menu) {
        const row = document.createElement('div');
            row.classList.add('menu_row');
            const col_1 = document.createElement('div');
            const col_2 = document.createElement('div');
            col_1.classList.add('column');
            col_2.classList.add('column');
        const food = document.createElement('p');
        food.innerText = `${menu[item]['food']}`;
        const price = document.createElement('p');
        price.innerText = `${menu[item]['price']}`;

        col_1.appendChild(food);
        col_2.appendChild(price);
        row.append(col_1, col_2);
        menuContainer.append(row);
    };

    return menuContainer;
}

createBody(); // appends all elements to the document.body through #content

