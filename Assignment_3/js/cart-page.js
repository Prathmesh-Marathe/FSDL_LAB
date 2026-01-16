let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCartPage() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItemsDiv.innerHTML = "";

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
        cartTotal.innerText = 0;
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsDiv.innerHTML += `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" width="80" height="80" style="object-fit: cover;">
                        <div>
                            <h6 class="mb-1">${item.name}</h6>
                            <small>₹${item.price}</small>
                        </div>
                    </div>
                    <button class="btn btn-danger btn-sm"
                        onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
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

    alert("✅ Your order has been placed successfully!");
    localStorage.removeItem("cart");
    cart = [];
    renderCartPage();
}

renderCartPage();
