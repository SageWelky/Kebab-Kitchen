function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = `
  <h2 class="contact-info">Contact Us</h2>
  <div class="contact-info">
    <div>Phone: (800)999-kebabs </div>
    <div>Email: kebabKitchen@kebabkichen.kebab</div>
    <div>183 Kebab Avenue, New York, NY, 10026, United States</div>
  </div>
  `;
}

export default loadContact;