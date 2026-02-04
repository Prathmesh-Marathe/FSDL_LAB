const cityNameInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('.search-btn');

async function getCityCoordinates(cityName) {
    if (!cityName) {
        alert("Please enter a city name");
        return null;
    }

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results) {
            alert("City not found");
            return null;
        }

        const { latitude, longitude, name, country } = data.results[0];

        return {
            latitude,
            longitude,
            name,
            country
        };

    } catch (error) {
        console.error("Error fetching city coordinates:", error);
        return null;    
    }
}

searchBtn.addEventListener('click', () => {
    const cityName = cityNameInput.value.trim();
    getCityCoordinates(cityName);
});

cityNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCityCoordinates(cityNameInput.value.trim());
    }
});