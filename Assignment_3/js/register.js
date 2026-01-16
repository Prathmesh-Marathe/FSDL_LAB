document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const zip = document.getElementById("zip").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Username validation
    if (username === "" || username.length < 5 || username.length > 10) {
        alert("Username must be between 5 and 10 characters");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email");
        return;
    }

    // Country validation
    if (country === "") {
        alert("Please select a country");
        return;
    }

    // Zip validation
    if (zip.length < 4 || isNaN(zip)) {
        alert("Please enter a valid zip code");
        return;
    }

    // Address validation
    if (address.length < 10) {
        alert("Address must be at least 10 characters long");
        return;
    }

    // Gender validation
    if (!gender) {
        alert("Please select gender");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Terms validation
    if (!terms) {
        alert("Please accept terms & conditions");
        return;
    }

    // SUCCESS
    alert("✅ Registration successful!");

    // Redirect to index page
    window.location.href = "index.html";
});
