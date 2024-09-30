import stickFree from '../assets/stickFreePlatter.jpeg';
import generic from '../assets/genericKebabs.jpeg';
import shrimpAndChicken from '../assets/shrimpAndPork.jpeg';
import menuItemConstructor from '../helpers/menuHelper';

let menuText = `<div>I am Menu page</div>`;

function loadMenu() {
  const content = document.getElementById('content');
  content.appendChild(
    menuItemConstructor(
      stickFree, 'Non-Stick', '$8.00', 'For those who don\'t like finger foods. Beef, lamb, and chicken. Custom platter available.'
    )
  );
  content.appendChild(
    menuItemConstructor(
      generic, 'House Special Mix', '$11.00', 'House selected mix of meats and veggies. Optional House Sauce included.'
    )
  );
  content.appendChild(
    menuItemConstructor(
      shrimpAndChicken, 'Sea & Sky', '$9.50', 'Shrimp and chicken, grilled and seasoned with green onion. Comes with teryaki sauce.'
    )
  );
}

export default loadMenu;