
import './header_style.css';
import './menu_style.css';
import './home_style.css';
import './contacts_style.css';
import createBody from './create_body';

function createHeader() {
    const div = document.body.querySelector('#content');

    const container = document.createElement('div');
        container.classList.add('header_container');

    const title_box = document.createElement('div');
        title_box.classList.add('title');
        title_box.innerText = 'Bear Grillz';

    const nav_bar = document.createElement('ul');
        nav_bar.classList.add('nav_bar');

    const home = document.createElement('button');
        home.innerText = 'Home';
        home.addEventListener('click', () => createBody.createBody(home.innerText));

    const menu = document.createElement('button');
        menu.innerText = 'Menu';
        menu.addEventListener('click', () => createBody.createBody(menu.innerText));

    const contact = document.createElement('button');
        contact.innerText = 'Contacts';
        contact.addEventListener('click', () => createBody.createBody(contact.innerText));

    nav_bar.append(home, menu, contact);
    container.append(title_box, nav_bar);
    div.appendChild(container);
    createBody.createBody('Home');
}

createHeader();
