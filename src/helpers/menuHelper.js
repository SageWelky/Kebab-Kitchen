function menuItemConstructor(image, name, price, description) {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');

    const dishImage = document.createElement('img');
    dishImage.classList.add('dish-image');
    dishImage.src = image;

    const menuTextSection = document.createElement('div');
    menuTextSection.classList.add('menu-text-section');

    const menuPrice = document.createElement('p');
    menuPrice.textContent = price;
    const menuName = document.createElement('span');
    menuName.textContent = name;
    const menuDescription = document.createElement('p');
    menuDescription.textContent = description;

    menuItemContainer.appendChild(dishImage);
    menuItemContainer.appendChild(menuTextSection);
    menuTextSection.appendChild(menuName);
    menuTextSection.appendChild(menuPrice);
    menuTextSection.appendChild(menuDescription);

    return menuItemContainer;
}

export default menuItemConstructor