const products = [
    { id: 1, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/watch.jpg" },
    { id: 2, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/smart-watch.jpg" },
    { id: 3, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/bag.jpg" },
    { id: 4, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/perfume-for-men.jpg" },
    { id: 5, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/perfume-for-women.jpg" },
    { id: 6, name: "Sample Product", price: 29.99, description: "A high-quality product.", image: "images/shoes.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    document.querySelectorAll("#cart-count").forEach(el => {
        el.textContent = cart.length;
    });
}

function populateProducts() {
    const productList = document.getElementById("product-list");
    if (productList) {
        productList.innerHTML = products.map(product => `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `).join("");
    }
}

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    }
}

function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Product added to cart!");
    }
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    if (cartItems && cartTotal) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${item.name}</h5>
                    <p>$${item.price.toFixed(2)}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `).join("");
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
}

function displayCheckout() {
    const checkoutItems = document.getElementById("checkout-items");
    const checkoutTotal = document.getElementById("checkout-total");
    if (checkoutItems && checkoutTotal) {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${item.name}</h5>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            </div>
        `).join("");
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        checkoutTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    populateProducts();
    loadProductDetails();
    displayCart();
    displayCheckout();
});