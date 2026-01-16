// ================= LOAD CART =================

// Get cart from localStorage (or empty array)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= ADD TO CART =================

function addToCart(productId) {
    if (typeof products === "undefined") return;

    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update navbar count
    updateCartCount();

    alert("Product added to cart!");
}

// ================= CART COUNT =================

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// ================= CLEAR CART =================

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();
}

// ================= INITIAL SYNC =================

// Ensure cart count is correct on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
