// Product data
const products = {
  shoes: [
    {
        id: 1,
        name: "Urban Classic",
        brand: "PUMA",
        price: "2500 EGP",
        image: "./img/SNEAKER ADIDAS VL COURT 3_0 POUR HOMME - Black _ 10.jpeg",
        description: "Classic urban style shoes",
    },
    {
        id: 2,
        name: "Street Style",
        brand: "ADIDAS",
        price: "2200 EGP",
        image: "./img/Best Men Shoes Casual Sneakers Adidas Mens Fashion.jpeg",
        description: "Trendy street style sneakers",
    },
    {
        id: 3,
        name: "Retro Skate",
        brand: "ADIDAS",
        price: "2000 EGP",
        image:
          "./img/Adidas Originals Campus Grey Skateboard Sneakers Retro Gum Sole Trainers Men 9uk.jpeg",
        description: "Retro skateboarding shoes",
    },
    {
        id: 4,
        name: "Vans Classic",
        brand: "VANS",
        price: "890 EGP",
        image: "./img/qq.webp",
        description: "Vans Classic Sneakers, Slip-Ons, and High-Tops",
    },
  ],
  jackets: [
    {
        id: 6,
        name: "Winter Denim",
        brand: "VERSACE",
        price: "6200 EGP",
        image:
          "./img/Huaxidairy Winter Jean Jackets Men Warm Denim Coats Fashion Cowboy Outerwear Men Liner Thicker Fleece Denim Jacket Black Blue Plus Size 6XL Retro black-S.jpeg",
        description: "Warm denim jacket for winter",
    },
    {
        id: 7,
        name: "Urban Explorer",
        brand: "CANCUCCI",
        price: "8200 EGP",
        image: "./img/Shopping Guides & Seasonal Product Trends.jpeg",
        description: "Stylish urban jacket",
    },

    {
        id: 8,
        name: "Business Casual",
        brand: "PRADA",
        price: "9200 EGP",
        image:
          "./img/90 Duck Down Winter Men's Business Casual Light Thin Warm Down Jacket - Blue _ M.jpeg",
        description: "Lightweight warm down jacket",
    },
    {
        id: 10,
        name: "Bomber Jacket",
        brand: "GUCCI",
        price: "7500 EGP",
        image: "./img/lll.webp",
        description: "Trendy bomber jacket",
    },
],
tshirts: [
    {
    id: 11,
    name: "8/2 Jersey",
    brand: "ADIDAS",
    price: "820 EGP",
    image:
        "./img/Philippe Coutinho Fc Bayern Munich 2020 Uefa Champions Of Europe Jersey 6 Time Winner Patch R___.jpeg",
    description: "Bayern Munich kit",
    },
    {
    id: 12,
    name: "Legend Edition",
    brand: "ADIDAS",
        price: "920 EGP",
    image:
        "./img/Camisetas, equipaciones, t-shirt de Ronaldo - Fútbol y más en Subside Sports.jpeg",
    description: "Real Madrid Kit",
    },
    {
    id: 13,
    name: "Future Star",
    brand: "ADIDAS",
    price: "790 EGP",
    image: "./img/we.jpg",
    description: "New Real Madrid kit",
    },
    {
    id: 14,
    name: "Classic Cotton",
    brand: "PRADA",
    price: "650 EGP",
    image: "./img/co.webp",
    description: "Premium cotton t-shirt",
    },
    ],
};

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountElement = document.querySelector(".cart-count");

function updateCartCount() {
cartCountElement.textContent = cart.length;
}

function addToCart(product) {
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();

// Show notification
const notification = document.createElement("div");
notification.className = "alert alert-success position-fixed";
notification.style.top = "20px";
notification.style.right = "20px";
notification.style.zIndex = "1050";
notification.textContent = `${product.name} added to cart!`;

document.body.appendChild(notification);

// Remove notification after 3 seconds
setTimeout(() => {
notification.remove();
}, 3000);
}

// Initialize product sliders
function initializeSliders() {
for (const category in products) {
    const slider = document.getElementById(`${category}-slider`);

    products[category].forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
                <img src="${product.image}" alt="${
        product.name
    }" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <p class="product-price">${product.price}</p>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${JSON.stringify(
                        product
                        ).replace(/"/g, "&quot;")})">Add to Cart</button>
                        <button class="btn-view">View</button>
                    </div>
                </div>
            `;

    slider.appendChild(productCard);
    });
}
}

// Scroll functionality for sliders
function scrollSlider(category, direction) {
const slider = document.getElementById(`${category}-slider`);
const scrollAmount = 300;

slider.scrollBy({
  left: direction * scrollAmount,
    behavior: "smooth",
});
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
initializeSliders();
updateCartCount();
});
