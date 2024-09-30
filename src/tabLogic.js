import loadHome from './tabs/home';
import loadContact from './tabs/contact';
import loadMenu from './tabs/menu';


const content = document.querySelector("#content");
let navBar = document.querySelector("#nav-bar");
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const menu = document.querySelector(".menu");


navBar.addEventListener( "click", (event) => {
  let selectedTab = event.target;

  if (selectedTab.textContent === "HOME") {
    content.replaceChildren();
    loadHome();
    menu.classList.remove("active");
    contact.classList.remove("active");
    home.classList.add("active");
  }
  if (selectedTab.textContent === "CONTACT") {
    content.replaceChildren();
    loadContact(content);
    home.classList.remove("active");
    menu.classList.remove("active");
    contact.classList.add("active");
  }
  if (selectedTab.textContent === "MENU") {
    content.replaceChildren();
    loadMenu();
    home.classList.remove("active");
    contact.classList.remove("active");
    menu.classList.add("active");
  }
});

home.classList.add("active");
loadHome();