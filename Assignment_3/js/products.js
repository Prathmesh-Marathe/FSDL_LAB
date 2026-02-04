const products = [];

/* ========== T-SHIRT ========== */
for (let i = 1; i <= 6; i++) {
    products.push({
        id: products.length + 1,
        name: `T-Shirt ${i}`,
        price: 999,
        category: "tshirt",
        image: `assets/images/tshirt/${i}.jpg`,
        description: "Comfortable t-shirt"
    });
}

/* ========== SOFA ========== */
for (let i = 1; i <= 12; i++) {
    products.push({
        id: products.length + 1,
        name: `Sofa ${i}`,
        price: 12999,
        category: "sofa",
        image: `assets/images/sofa/${i}.jpg`,
        description: "Modern sofa"
    });
}


/* ========== JEANS ========== */
for (let i = 1; i < 12; i++) {
    products.push({
        id: products.length + 1,
        name: `Jeans ${i}`,
        price: 1999,
        category: "jeans",
        image: `assets/images/jeans/${i}.jpg`,
        description: "Stylish jeans"
    });
}

/* ========== TV ========== */
for (let i = 1; i <= 18; i++) {
    products.push({
        id: products.length + 1,
        name: `TV ${i}`,
        price: 24999,
        category: "tv",
        image: `assets/images/tv/${i}.jpg`,
        description: "Smart LED TV"
    });
}
