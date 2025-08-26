    const products = {
        shoes: [
            {
                id: 4,
                name: "Urban Classic",
                image: "/img/SNEAKER ADIDAS VL COURT 3_0 POUR HOMME - Black _ 10.jpeg",
                description: "Classic urban style shoes",
                price: "2500 EGP"
            },
            {
                id: 5,
                name: "Street Style",
                image: "/img/Best Men Shoes Casual Sneakers Adidas Mens Fashion.jpeg",
                description: "Trendy street style sneakers",
                price: "2200 EGP"
            },
            {
                id: 6,
                name: "Retro Skate",
                image: "/img/Adidas Originals Campus Grey Skateboard Sneakers Retro Gum Sole Trainers Men 9uk.jpeg",
                description: "Retro skateboarding shoes",
                price: "2000 EGP"
            }
        ],
        jackets: [
            {
                id: 1,
                name: "Winter Denim",
                image: "/img/Huaxidairy Winter Jean Jackets Men Warm Denim Coats Fashion Cowboy Outerwear Men Liner Thicker Fleece Denim Jacket Black Blue Plus Size 6XL Retro black-S.jpeg",
                description: "Warm denim jacket for winter",
                price: "6200 EGP"
            },
            {
                id: 2,
                name: "Urban Explorer",
                image: "/img/Shopping Guides & Seasonal Product Trends.jpeg",
                description: "Stylish urban jacket",
                price: "8200 EGP"
            },
            {
                id: 3,
                name: "Business Casual",
                image: "/img/90 Duck Down Winter Men's Business Casual Light Thin Warm Down Jacket - Blue _ M.jpeg",
                description: "Lightweight warm down jacket",
                price: "9200 EGP"
            }
        ],
        tshirts: [
            {
                id: 1,
                name: "8/2 Jersey",
                image: "/img/Philippe Coutinho Fc Bayern Munich 2020 Uefa Champions Of Europe Jersey 6 Time Winner Patch R___.jpeg",
                description: "Bayern Munich kit",
                price: "8200 EGP"
            },
            {
                id: 2,
                name: "Legend Edition",
                image: "/img/Camisetas, equipaciones, t-shirt de Ronaldo - Fútbol y más en Subside Sports.jpeg",
                description: "Real Madrid Kit",
                price: "9200000 EGP"
            },
            {
                id: 3,
                name: "Future Star",
                image: "/img/Lamine Yamal Barcelona Nike 2024_25 Away Replica Player Jersey - Black.jpeg",
                description: "Barcelona kit",
                price: "29 EGP"
            }
        ]
    };

    // Function to generate product cards
    function generateProductCards() {
        // Generate shoes
        const shoesSlider = document.getElementById('shoes-slider');
        products.shoes.forEach(product => {
            shoesSlider.innerHTML += `
                <div class="slider-item">
                    <div class="card text-center">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price: </strong>${product.price}</p>
                            <a href="#" class="btn btn-dark">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        });

        // Generate jackets
        const jacketsSlider = document.getElementById('jackets-slider');
        products.jackets.forEach(product => {
            jacketsSlider.innerHTML += `
                <div class="slider-item">
                    <div class="card text-center">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price: </strong>${product.price}</p>
                            <a href="#" class="btn btn-dark">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        });

        // Generate tshirts
        const tshirtsSlider = document.getElementById('tshirts-slider');
        products.tshirts.forEach(product => {
            tshirtsSlider.innerHTML += `
                <div class="slider-item">
                    <div class="card text-center">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price: </strong>${product.price}</p>
                            <a href="#" class="btn btn-dark">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Function to handle slider navigation
    function scrollSlider(category, direction) {
        const slider = document.getElementById(`${category}-slider`);
        const scrollAmount = 330; // Width of card + margin
        slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
        generateProductCards();
    });