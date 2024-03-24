document.addEventListener("DOMContentLoaded", function() {
    // Dummy product data
    const products = [
        { id: 1, name: "Product 1", description: "Description 1", price: 19.99, image: "https://via.placeholder.com/300" },
        { id: 2, name: "Product 2", description: "Description 2", price: 29.99, image: "https://via.placeholder.com/300" },
        { id: 3, name: "Product 3", description: "Description 3", price: 39.99, image: "https://via.placeholder.com/300" },
        // Add more products as needed
    ];

    const productsContainer = document.getElementById("products-container");

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");

        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        `;

        return card;
    }

    // Function to display products
    function displayProducts() {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const card = createProductCard(product);
            productsContainer.appendChild(card);
        });
    }

    // Display products when the page loads
    displayProducts();
});
