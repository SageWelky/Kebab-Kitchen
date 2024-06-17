import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';


const content = document.querySelector("#content");

let navBar = document.querySelector("#nav-bar");

navBar.addEventListener( "click", (event) => {
  if (event.target.id === "#nav-bar") {
    return;
  }
  let selectedTab = event.target;
  content.replaceChildren();
  if (selectedTab.textContent === "HOME") {
    loadHome(content);
  }
  if (selectedTab.textContent === "ABOUT") {
    loadAbout(content);
  }
  if (selectedTab.textContent === "MENU") {
    loadMenu(content);
  }
});