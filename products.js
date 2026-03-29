/*
  products.js - Populates the products page with available items.
  Generates DOM cards for each product and appends them to the #products container.
*/

// Product catalog data used for the products page
const products = [
{ name:"Golden Evening Dress", price:"$250", image:"Asset/Images/Product 6.JPG" },
{ name:"Classic Native Outfit", price:"$170", image:"Asset/Images/Product 7.JPG" },
{ name:"Modern Ankara Style", price:"$190", image:"Asset/Images/Product 3.JPG" },
{ name:"Wedding Cultural Dress", price:"$300", image:"Asset/Images/Product 4.JPG" },
{ name:"Luxury Blue Gown", price:"$220", image:"Asset/Images/Product 5.JPG" },
{ name:"Traditional Ankara Dress", price:"$160", image:"Asset/Images/Product 1.JPG" }
];

// Render all products onto the products page grid
const prodContainer = document.getElementById("products");
products.forEach(p => {
    // Create one catalog card per product entry
    let card = document.createElement("div");
    card.innerHTML = `<img src="${p.image}"><h3>${p.name}</h3><p>${p.price}</p><button>Buy</button>`;
    prodContainer.appendChild(card);
});

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.nav-toggle');
    if (!navLinks || !toggle) return;
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

    const toggle = document.querySelector('.nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleNav);
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const toggle = document.querySelector('.nav-toggle');
            if (navLinks && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });