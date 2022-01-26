import { phoneBook } from "./contact_content";

export default function createContacts() {
    const Container = document.createElement('div');
        Container.classList.add('container');
    const contactsContainer = document.createElement('div');
        contactsContainer.classList.add('contactsContainer');

    for (let contact in phoneBook) {
        const person = document.createElement('div');
            person.classList.add('person');
        const name = document.createElement('p');
            name.classList.add('name');
            name.innerText = phoneBook[contact]['name'];
        const number = document.createElement('p');
            number.classList.add('number');
            number.innerText = phoneBook[contact]['number'];
        person.append(name, number);
        contactsContainer.append(person);
    }

    Container.append(contactsContainer);
    return Container;
}