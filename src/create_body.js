import createMenu from './create_menu';
import createHome from './create_home';
import createContacts from './create_contacts';
import refresh from './refresh';

function createBody(target) {
    refresh();
    const div = document.querySelector('#content');
    const content = document.createDocumentFragment();
    const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('body_container');

    if (target == 'Home') {
        const homeContainer = createHome();
        bodyContainer.appendChild(homeContainer);
    } else if(target == 'Menu') {
        const menuContainer = createMenu();
            menuContainer.classList.add('menu');
        bodyContainer.appendChild(menuContainer);
    } else if(target == 'Contacts') {
        const contacts = createContacts();
            contacts.classList.add('contacts');
        bodyContainer.appendChild(contacts);
    }
        

    content.appendChild(bodyContainer);
    div.appendChild(content);
}


export default {createBody}; // appends all elements to the document.body through #content

