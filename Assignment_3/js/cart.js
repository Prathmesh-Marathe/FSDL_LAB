let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = document.getElementById("cartCount");
    if (count) count.innerText = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
