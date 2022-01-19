
import './header_style.css';

function createHeader() {
    const div = document.body.querySelector('#content');

    const container = document.createElement('div');
        container.classList.add('header_container');

    const title_box = document.createElement('div');
        title_box.classList.add('title');
        title_box.innerText = 'Bear Grillz';

    const nav_bar = document.createElement('ul');
        nav_bar.classList.add('nav_bar');

    const home = document.createElement('li');
        home.innerText = 'Home';
        //addEventListener('click', goToHomePage());
    const menu = document.createElement('li');
        menu.innerText = 'Menu';
        //addEventListener('click', goToMenu());
    const booking = document.createElement('li');
        booking.innerText = 'Booking';
        //addEventListener('click', goToReveiws());

    nav_bar.append(home, menu, booking);
    container.append(title_box, nav_bar);
    div.appendChild(container);

    return div;
}

document.body.appendChild(createHeader());
