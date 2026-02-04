let filteredProducts = [...products];

function renderProducts() {
    const container = document.getElementById("productsContainer");
    if (!container) return;

    container.innerHTML = "";

    filteredProducts.forEach(product => {
        container.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <img src="${product.image}"
                         class="card-img-top"
                         style="height:220px;object-fit:cover">

                    <div class="card-body d-flex flex-column">
                        <h6>${product.name}</h6>
                        <p>${product.description}</p>
                        <strong>₹${product.price}</strong>

                        <button class="btn btn-dark btn-sm mt-auto"
                                onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    filteredProducts =
        category === "all"
            ? [...products]
            : products.filter(p => p.category === category);

    renderProducts();
}

document.addEventListener("DOMContentLoaded", renderProducts);
