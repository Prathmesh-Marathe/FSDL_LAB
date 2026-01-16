// Navbar
fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// Load Navbar (on ALL pages)
fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// Load Products ONLY on index.html
const productsDiv = document.getElementById("products");
if (productsDiv) {
    fetch("components/products.html")
        .then(res => res.text())
        .then(data => {
            productsDiv.innerHTML = data;
            renderProducts();
        });
}
