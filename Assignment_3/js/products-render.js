function renderProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";

    products.forEach(product => {
        const card = `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card product-card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="product-price">₹${product.price}</div>
                        <button class="btn btn-primary btn-sm mt-auto"
                            onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}
