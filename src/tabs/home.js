function loadHome() {

  const content = document.getElementById('content');
  content.innerHTML =
  `
  <h2 class="title-content">Kebab—Kitchen</h2>
  <p class="description">
   Kebab Kitchen is a vibrant celebration of Middle Eastern street food,
   offering a modern twist on the timeless kebab.
   At Kebab Kitchen, we pride ourselves on serving flavorful,
   freshly prepared kebabs crafted with the finest ingredients,
   from tender, marinated meats to crisp vegetables and homemade sauces.
   Our menu reflects the rich culinary traditions of the region,
   blending authentic spices and contemporary cooking techniques to create a truly unique dining experience. Whether you're enjoying a classic lamb kebab, a zesty chicken shawarma, or a satisfying vegetarian wrap, Kebab Kitchen invites you to savor the bold and inviting flavors of the Middle East in a relaxed, welcoming atmosphere.
  </p>
  <h3 class="title-content">Operating Hours</h3>
  <ul class="operating-hours">
    <li>Monday - Friday: 08:00am - 9:00pm</li>
    <li>Saturday: 6:00am - 10:00pm</li>
  </ul>
  `;
}

export default loadHome;