let aboutText = `<div>I am About page</div>`;

function loadAbout(content) {
  content.insertAdjacentHTML("beforeend", aboutText);
}

export default loadAbout;