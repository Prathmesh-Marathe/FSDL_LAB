// api.js - API service for fetching weather data
const apiService = {
    async fetchCurrentWeather(city) {
        const url = `${CONFIG.BASE_URL}/current.json?key=${CONFIG.API_KEY}&q=${city}&aqi=yes`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    },

    async fetchForecast(city) {
        const url = `${CONFIG.BASE_URL}/forecast.json?key=${CONFIG.API_KEY}&q=${city}&days=7&aqi=no`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Forecast not available');
        return await response.json();
    },

    async fetchAllWeatherData(city) {
        try {
            const [current, forecast] = await Promise.all([
                this.fetchCurrentWeather(city),
                this.fetchForecast(city)
            ]);
            return { current, forecast };
        } catch (error) {
            throw error;
        }
    }
};