//  counter home

    const counters = document.querySelectorAll(".counter");
    const speed = 100; // Lower = Faster

    const startCounter = (entry) => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const increment = Math.ceil(target / speed);

                    if (count < target) {
                        counter.innerText = count + increment;
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                updateCount();
            });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => startCounter(entry));
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));




// Products Data
const topSelling = [
    { id: 1, name: "Vertical Striped Shirt", price: 212, oldPrice: 232, discount: "-40%", rating: 5, image: "/img/Frame 41.png" },
    { id: 2, name: "Courage Graphic T-shirt", price: 240, oldPrice: 260, discount: "-10%", rating: 4.5, image: "/img/Frame 42.png" },
    { id: 3, name: "Loose Fit Bermuda Shorts", price: 180, oldPrice: 190, discount: "-10%", rating: 4.5, image: "/img/Frame 44.png" },
    { id: 4, name: "Faded Skinny Jeans", price: 130, oldPrice: 160, discount: "-30%", rating: 5, image: "/img/Frame 48.png" }
];

const newArrivals = [
    { id: 5, name: "Classic Denim Jacket", price: 300, oldPrice: 340, discount: "-15%", rating: 5, image: "/img/Men Patched Pocket Denim Jacket Without Tee….jpeg" },
    { id: 6, name: "Oversized Hoodie", price: 220, oldPrice: 260, discount: "-20%", rating: 4.5, image: "/img/No Days Off Oversize Hoodie.jpeg" },
    { id: 7, name: "Printed Summer Dress", price: 190, oldPrice: 230, discount: "-18%", rating: 4, image: "/img/The Floral Tie Midi Dress -Sweetheart's Neck Floral Print High Waist Dress - Green - Dresses _ RIHOAS.jpeg" },
    { id: 8, name: "T-Shirt Vintage", price: 400, oldPrice: 500, discount: "-25%", rating: 5, image: "/img/AugYew Men's Graphic Tees Shirt Unisex Cotton Oversized T-Shirt Short Sleeve Vintage Streetwear Casual Tee Top.jpeg" }
];

const bestOffers = [
    { id: 9, name: "T-SHIRT WITH TAPE DETAILS", price: 1200, oldPrice: 3000, discount: "-60%", rating: 5, image: "/img/Frame 32.png" },
    { id: 10, name: "CHECKERED SHIRT", price: 600, oldPrice: 2000, discount: "-70%", rating: 4.5, image: "/img/Frame 38.png" },
    { id: 11, name: "SLEEVE STRIPED T-SHIRT", price: 200, oldPrice: 1000, discount: "-80%", rating: 4.5, image: "/img/Frame 34.png" },
    { id: 12, name: "SKINNY FIT JEANS", price: 400, oldPrice: 800, discount: "-50%", rating: 5, image: "/img/Frame 33.png" }
];

// Generate Stars Function
function generateStars(rating) {
    let stars = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += `<i class="fas fa-star"></i>`;
    }
    if (halfStar) stars += `<i class="fas fa-star-half-alt"></i>`;

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += `<i class="far fa-star"></i>`;
    }
    return stars;
}

// Generic Display Function
function displayProducts(containerId, products) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    products.forEach(product => {
        const stars = generateStars(product.rating);
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p class="product-name">${product.name}</p>
                <div class="rating">
                    ${stars} <span>${product.rating}/5</span>
                </div>
                <div class="price">
                    $${product.price}
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
                    ${product.discount ? `<span class="discount">${product.discount}</span>` : ""}
                </div>
            </div>
        `;
    });
}

// Load Products into Sections
displayProducts("top-selling", topSelling);
displayProducts("new-arrivals", newArrivals);
displayProducts("best-offers", bestOffers);

// Show Notification Function
function showNotification(message, color = "#4caf50") {
    const notification = document.getElementById("notification");
    notification.innerText = message;
    notification.style.backgroundColor = color;

    notification.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

// View All Buttons with Notification
document.getElementById("viewAllTop").addEventListener("click", () => {
    showNotification("Loading Top Selling products...", "#4caf50");
});

document.getElementById("viewAllNew").addEventListener("click", () => {
    showNotification("Loading New Arrivals...", "#2196f3");
});

document.getElementById("viewAllOffers").addEventListener("click", () => {
    showNotification("Loading Best Offers...", "#ff9800");
});


    const reviews = [
    {
        name: "Sarah M.",
        verified: true,
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        name: "Alex K.",
        verified: true,
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        name: "James L.",
        verified: true,
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name: "Monica R.",
        verified: true,
        rating: 4,
        text: "I love the fit and feel of the clothes I ordered! Customer support was also super helpful when I had sizing questions."
    }
    ];

    const reviewsContainer = document.getElementById("reviews");

    reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";

    let stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

    card.innerHTML = `
        <div class="stars">${stars}</div>
        <div class="reviewer">
        ${review.name}
        ${review.verified ? '<span class="verified">✔</span>' : ''}
        </div>
        <div class="text">${review.text}</div>
    `;

    reviewsContainer.appendChild(card);
    });

    // Arrows functionality
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", () => {
    reviewsContainer.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
    reviewsContainer.scrollBy({ left: 320, behavior: "smooth" });
    });


const form = document.getElementById("newsletterForm");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (email.includes("@")) {
        showNotification("✅ Thank you for subscribing, " + email + "!", false);
        form.reset();
    } else {
        showNotification("❌ Please enter a valid email address.", true);
    }
    });

    function showNotification(message, isError) {
    notification.textContent = message;
    notification.className = "notification " + (isError ? "error" : "");
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
    }

