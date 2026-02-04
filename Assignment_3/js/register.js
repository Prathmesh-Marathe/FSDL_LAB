document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const country = document.getElementById("country").value;
    const zip = document.getElementById("zip").value.trim();
    const address = document.getElementById("address").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms").checked;

    if (!username || username.length < 5 || username.length > 10)
        return alert("Username must be 5–10 characters");

    if (!email.includes("@")) return alert("Invalid email");
    if (password.length < 6) return alert("Password min 6 chars");
    if (!country || !zip || !address || !gender)
        return alert("All fields required");
    if (!terms) return alert("Accept terms");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        return alert("User already registered. Please login.");
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "login.html";
});
