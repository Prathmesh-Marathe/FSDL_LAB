let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCartPage() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = 0;
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-img">

                <div class="cart-info">
                    <h6>${item.name}</h6>
                    <span>₹${item.price}</span>
                </div>

                <button class="btn btn-outline-dark btn-sm"
                        onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    cartTotal.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartPage();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("✅ Your order has been placed!");
    localStorage.removeItem("cart");
    cart = [];
    renderCartPage();
}

renderCartPage();
