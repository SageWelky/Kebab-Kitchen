let homeText = `<div>I am Home page</div>`;

function loadHome(content) {
  content.insertAdjacentHTML("beforeend", homeText);
}

export default loadHome;