import { loadHeader } from './header'
import { loadInitialPage } from './initial-page'
import { loadMenuPage } from './menu';
import "./main.css";
import { loadContactPage } from './contact';

loadHeader();
loadInitialPage()

const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

const clearPage = () => {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

home.addEventListener('click', () => displayPage(home));
menu.addEventListener('click', () => displayPage(menu));
contact.addEventListener('click', () => displayPage(contact));

const displayPage = (page) => {
    clearPage()
    home.style.textDecoration = 'none'
    menu.style.textDecoration = 'none'
    contact.style.textDecoration = 'none'
    if(page == home) {
        loadInitialPage()
        home.style.textDecoration = 'underline'
    } else if (page == menu) {
        loadMenuPage()
        menu.style.textDecoration = 'underline'
    } else if (page == contact) {
        loadContactPage()
        contact.style.textDecoration = 'underline'
    }
}

