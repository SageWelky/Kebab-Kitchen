let menuText = `<div>I am Menu page</div>`;

function loadMenu(content) {
  content.insertAdjacentHTML("beforeend", menuText);
}

export default loadMenu;