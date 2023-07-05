//import functions
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const content = document.getElementById('content');

homePage(content);
const homebtn = document.getElementById('home').addEventListener('click', ()=>{switchTabs('home');});
const menubtn = document.getElementById('menu').addEventListener('click', ()=>{switchTabs('menu');});
const contactbtn = document.getElementById('contact').addEventListener('click', ()=>{switchTabs('contact')});
const switchTabs = (tab) => {
    content.innerHTML = '';
    switch(tab){
        case 'home':
            homePage(content);
            break;
        case 'menu':
            menuPage(content);
            break;
        case 'contact':
            contactPage(content);33
            break;
    }
} 