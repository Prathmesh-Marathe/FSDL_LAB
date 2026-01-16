// ui.js - UI rendering components
const uiComponents = {
    showLoading() {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    },

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
    },

    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        this.hideLoading();
    },

    renderCurrentWeather(data) {
        const { location, current } = data;
        const html = `
            <div class="current-weather-card">
                <div class="location-info">
                    <i class="fas fa-map-marker-alt text-primary"></i>
                    <h2>${location.name}, ${location.country}</h2>
                </div>
                <div class="date-time">${utils.getCurrentDateTime()}</div>
                
                <div class="main-weather">
                    <div class="temperature-display">
                        <i class="fas ${utils.getWeatherIcon(current.condition.text)} weather-icon-large"></i>
                        <div>
                            <div>
                                <span class="temp-value">${Math.round(current.temp_c)}</span>
                                <span class="temp-unit">°C</span>
                            </div>
                            <div class="weather-description">${current.condition.text}</div>
                            <div class="feels-like">Feels like ${Math.round(current.feelslike_c)}°C</div>
                        </div>
                    </div>
                </div>

                <div class="weather-details">
                    <div class="detail-item">
                        <i class="fas fa-tint"></i>
                        <div class="detail-label">Humidity</div>
                        <div class="detail-value">${current.humidity}%</div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-wind"></i>
                        <div class="detail-label">Wind Speed</div>
                        <div class="detail-value">${current.wind_kph} km/h</div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-eye"></i>
                        <div class="detail-label">Visibility</div>
                        <div class="detail-value">${current.vis_km} km</div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-compress-alt"></i>
                        <div class="detail-label">Pressure</div>
                        <div class="detail-value">${current.pressure_mb} mb</div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-sun"></i>
                        <div class="detail-label">UV Index</div>
                        <div class="detail-value">${current.uv}</div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-cloud"></i>
                        <div class="detail-label">Cloud Cover</div>
                        <div class="detail-value">${current.cloud}%</div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('currentWeather').innerHTML = html;
    },

    renderForecast(forecastData) {
        const forecastDays = forecastData.forecast.forecastday;
        const html = forecastDays.map(day => `
            <div class="forecast-item">
                <div class="forecast-day">${utils.formatDate(day.date)}</div>
                <i class="fas ${utils.getWeatherIcon(day.day.condition.text)} forecast-icon"></i>
                <div class="forecast-temp">
                    <span style="color: #E74C3C;">${Math.round(day.day.maxtemp_c)}°</span> / 
                    <span style="color: #3498DB;">${Math.round(day.day.mintemp_c)}°</span>
                </div>
                <div class="forecast-condition">${day.day.condition.text}</div>
                <div class="forecast-condition">
                    <i class="fas fa-cloud-rain"></i> ${day.day.daily_chance_of_rain}%
                </div>
            </div>
        `).join('');
        document.getElementById('forecastContainer').innerHTML = html;
    }
};