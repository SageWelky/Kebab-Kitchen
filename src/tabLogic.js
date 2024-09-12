import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';


const content = document.querySelector("#content");

let navBar = document.querySelector("#nav-bar");

navBar.addEventListener( "click", (event) => {

  let selectedTab = event.target;

  if (selectedTab.textContent === "HOME") {
    content.replaceChildren();
    loadHome(content);
  }
  if (selectedTab.textContent === "ABOUT") {
    content.replaceChildren();
    loadAbout(content);
  }
  if (selectedTab.textContent === "MENU") {
    content.replaceChildren();
    loadMenu(content);
  }
});