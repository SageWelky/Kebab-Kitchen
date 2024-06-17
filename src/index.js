import './styles.css';
import kebabPic from './assets/kebabPic.svg';

import tabSwap from './tabLogic';

let logoContainer = document.querySelector('#logo-container');
const myIcon = new Image();
myIcon.src = kebabPic;
myIcon.classList.add("logo-icon");
logoContainer.appendChild(myIcon);
