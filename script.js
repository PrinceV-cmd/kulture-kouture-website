/*
  script.js - Populates the homepage with dynamic content.
  Creates DOM cards for categories, featured items, and product listings.
*/

// Category data used on the homepage
const categories = [
{ name:"Ankara", image:"Asset/Images/Category.JPG" },
{ name:"Native Wear", image:"Asset/Images/Category 2.JPG" },
{ name:"Evening Dress", image:"Asset/Images/Category 3.JPG" }
];

// Featured products data (homepage) 
const featured = [
{ name:"Royal Blue Gown", price:"$180", image:"Asset/Images/Product 3.JPG" },
{ name:"Red Cultural Dress", price:"$150", image:"Asset/Images/Featured 1.JPG" },
{ name:"Elegant Ankara", price:"$200", image:"Asset/Images/Product 5.JPG" }
];

// Product catalog data (homepage)
const products = [
{ name:"Golden Evening Dress", price:"$250", image:"Asset/Images/Product 6.JPG" },
{ name:"Classic Native Outfit", price:"$170", image:"Asset/Images/Product 7.JPG" },
{ name:"Modern Ankara Style", price:"$190", image:"Asset/Images/Product 3.JPG" },
{ name:"Wedding Cultural Dress", price:"$300", image:"Asset/Images/Product 4.JPG" },
{ name:"Luxury Blue Gown", price:"$220", image:"Asset/Images/Product 5.JPG" },
{ name:"Traditional Ankara Dress", price:"$160", image:"Asset/Images/Product 1.JPG" }
];

// Render category cards in the Categories section
const catContainer = document.getElementById("categories");
categories.forEach(c => {
    // Build a simple card for each category item
    let card = document.createElement("div");
    card.innerHTML = `<img src="${c.image}"><p>${c.name}</p>`;
    catContainer.appendChild(card);
});

// Render featured product cards in the Featured Products section
const featContainer = document.getElementById("featured");
featured.forEach(p => {
    // Each featured card shows product image, name, and price
    let card = document.createElement("div");
    card.innerHTML = `<img src="${p.image}"><h3>${p.name}</h3><p>${p.price}</p>`;
    featContainer.appendChild(card);
});

// Render product catalog cards in the Available Products section
const prodContainer = document.getElementById("products");
products.forEach(p => {
    // Product cards on the homepage include a call-to-action button
    let card = document.createElement("div");
    card.innerHTML = `<img src="${p.image}"><h3>${p.name}</h3><p>${p.price}</p><button>Buy</button>`;
    prodContainer.appendChild(card);
});

// Mobile nav toggle for all pages

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
