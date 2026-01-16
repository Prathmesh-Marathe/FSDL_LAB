// app.js - Main application logic
const weatherApp = {
    async init() {
        const cityInput = document.getElementById('cityInput');
        cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchCity();
            }
        });

        await this.loadWeather(CONFIG.DEFAULT_CITY);
    },

    async searchCity() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value.trim();
        
        if (city) {
            await this.loadWeather(city);
        }
    },

    async loadWeather(city) {
        uiComponents.showLoading();

        try {
            const data = await apiService.fetchAllWeatherData(city);
            
            uiComponents.renderCurrentWeather(data.current);
            uiComponents.renderForecast(data.forecast);
            chartManager.renderAllCharts(data.forecast);
            
            uiComponents.hideLoading();
        } catch (error) {
            uiComponents.showError('Unable to fetch weather data. Please check the city name and try again.');
            console.error('Error:', error);
        }
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    weatherApp.init();
});