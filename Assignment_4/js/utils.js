// utils.js - Utility functions
const utils = {
    formatTime(dateString) {
        return new Date(dateString).toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    },

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    },

    getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleDateString('en-US', { 
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    getWeatherIcon(condition) {
        const iconMap = {
            'sunny': 'fa-sun',
            'clear': 'fa-moon',
            'partly cloudy': 'fa-cloud-sun',
            'cloudy': 'fa-cloud',
            'overcast': 'fa-cloud',
            'mist': 'fa-smog',
            'patchy rain': 'fa-cloud-rain',
            'rain': 'fa-cloud-showers-heavy',
            'snow': 'fa-snowflake',
            'thunder': 'fa-bolt',
            'fog': 'fa-smog'
        };

        const conditionLower = condition.toLowerCase();
        for (let key in iconMap) {
            if (conditionLower.includes(key)) {
                return iconMap[key];
            }
        }
        return 'fa-cloud-sun';
    }
};