// charts.js - Chart management using Chart.js
const chartManager = {
    charts: {},

    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    },

    createTemperatureChart(hourlyData) {
        const ctx = document.getElementById('tempChart').getContext('2d');
        if (this.charts.temp) this.charts.temp.destroy();

        this.charts.temp = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hourlyData.map(h => utils.formatTime(h.time)),
                datasets: [{
                    label: 'Temperature (°C)',
                    data: hourlyData.map(h => h.temp_c),
                    borderColor: '#E74C3C',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Feels Like (°C)',
                    data: hourlyData.map(h => h.feelslike_c),
                    borderColor: '#F39C12',
                    borderDash: [5, 5],
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    },

    createHumidityChart(hourlyData) {
        const ctx = document.getElementById('humidityChart').getContext('2d');
        if (this.charts.humidity) this.charts.humidity.destroy();

        this.charts.humidity = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: hourlyData.map(h => utils.formatTime(h.time)),
                datasets: [{
                    label: 'Humidity (%)',
                    data: hourlyData.map(h => h.humidity),
                    backgroundColor: 'rgba(52, 152, 219, 0.6)',
                    borderColor: '#3498DB',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    },

    createWindChart(hourlyData) {
        const ctx = document.getElementById('windChart').getContext('2d');
        if (this.charts.wind) this.charts.wind.destroy();

        this.charts.wind = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hourlyData.map(h => utils.formatTime(h.time)),
                datasets: [{
                    label: 'Wind Speed (km/h)',
                    data: hourlyData.map(h => h.wind_kph),
                    borderColor: '#1ABC9C',
                    backgroundColor: 'rgba(26, 188, 156, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },

    createRainChart(hourlyData) {
        const ctx = document.getElementById('rainChart').getContext('2d');
        if (this.charts.rain) this.charts.rain.destroy();

        this.charts.rain = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: hourlyData.map(h => utils.formatTime(h.time)),
                datasets: [{
                    label: 'Rain Chance (%)',
                    data: hourlyData.map(h => h.chance_of_rain),
                    backgroundColor: 'rgba(155, 89, 182, 0.6)',
                    borderColor: '#9B59B6',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    },

    renderAllCharts(forecastData) {
        const hourlyData = forecastData.forecast.forecastday[0].hour.filter((_, idx) => idx % 2 === 0);
        
        this.createTemperatureChart(hourlyData);
        this.createHumidityChart(hourlyData);
        this.createWindChart(hourlyData);
        this.createRainChart(hourlyData);
    }
};