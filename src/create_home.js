import { heading, about } from "./home_content";

export default function create_home() {
    const content = document.getElementById('content');

    const textBox = document.createElement('div');
        textBox.classList.add('textBox');
    const parabox = document.createElement('div');
        parabox.classList.add('parabox');
    const title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = heading;    
    const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.innerText = about;

    textBox.append(title, paragraph);
    parabox.append(textBox);

    return parabox;
}

