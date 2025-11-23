// Multiple cities data with AQI and rain forecast
const citiesData = {
    "london": {
        "location": {
            "name": "London",
            "region": "City of London, Greater London",
            "country": "United Kingdom",
            "lat": 51.5171,
            "lon": -0.1062,
            "tz_id": "Europe/London",
            "localtime_epoch": 1757418335,
            "localtime": "2025-09-09 12:45"
        },
        "current": {
            "temp_c": 21.2,
            "condition": {
                "text": "Partly Cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
            },
            "humidity": 49,
            "wind_kph": 11.5,
            "air_quality": {
                "pm2_5": 8.88,
                "pm10": 19.61,
                "us-epa-index": 1
            }
        },
        "forecast": {
            "forecastday": [{
                "day": { "totalprecip_mm": 0.5 },
                "hour": [
                    { "time": "2025-09-09 14:00", "precip_mm": 0.1, "chance_of_rain": 20 },
                    { "time": "2025-09-09 15:00", "precip_mm": 0.2, "chance_of_rain": 30 },
                    { "time": "2025-09-09 16:00", "precip_mm": 0.0, "chance_of_rain": 10 },
                    { "time": "2025-09-09 17:00", "precip_mm": 0.3, "chance_of_rain": 40 }
                ]
            }]
        }
    },
    "newyork": {
        "location": {
            "name": "New York",
            "region": "New York",
            "country": "United States",
            "localtime": "2025-09-09 08:45"
        },
        "current": {
            "temp_c": 18.5,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
            },
            "humidity": 55,
            "wind_kph": 8.2,
            "air_quality": {
                "pm2_5": 12.3,
                "pm10": 25.4,
                "us-epa-index": 2
            }
        },
        "forecast": {
            "forecastday": [{
                "day": { "totalprecip_mm": 0.0 },
                "hour": [
                    { "time": "2025-09-09 14:00", "precip_mm": 0.0, "chance_of_rain": 5 },
                    { "time": "2025-09-09 15:00", "precip_mm": 0.0, "chance_of_rain": 10 },
                    { "time": "2025-09-09 16:00", "precip_mm": 0.0, "chance_of_rain": 5 },
                    { "time": "2025-09-09 17:00", "precip_mm": 0.0, "chance_of_rain": 15 }
                ]
            }]
        }
    },
    "tokyo": {
        "location": {
            "name": "Tokyo",
            "region": "Tokyo",
            "country": "Japan",
            "localtime": "2025-09-09 21:45"
        },
        "current": {
            "temp_c": 25.8,
            "condition": {
                "text": "Sunny",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
            },
            "humidity": 68,
            "wind_kph": 6.4,
            "air_quality": {
                "pm2_5": 15.2,
                "pm10": 28.7,
                "us-epa-index": 2
            }
        },
        "forecast": {
            "forecastday": [{
                "day": { "totalprecip_mm": 2.3 },
                "hour": [
                    { "time": "2025-09-09 14:00", "precip_mm": 0.5, "chance_of_rain": 60 },
                    { "time": "2025-09-09 15:00", "precip_mm": 0.8, "chance_of_rain": 75 },
                    { "time": "2025-09-09 16:00", "precip_mm": 0.6, "chance_of_rain": 65 },
                    { "time": "2025-09-09 17:00", "precip_mm": 0.4, "chance_of_rain": 50 }
                ]
            }]
        }
    },
    "mumbai": {
        "location": {
            "name": "Mumbai",
            "region": "Maharashtra",
            "country": "India",
            "localtime": "2025-09-09 18:15"
        },
        "current": {
            "temp_c": 32.1,
            "condition": {
                "text": "Partly Cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
            },
            "humidity": 78,
            "wind_kph": 12.8,
            "air_quality": {
                "pm2_5": 45.6,
                "pm10": 78.9,
                "us-epa-index": 3
            }
        },
        "forecast": {
            "forecastday": [{
                "day": { "totalprecip_mm": 5.2 },
                "hour": [
                    { "time": "2025-09-09 14:00", "precip_mm": 1.2, "chance_of_rain": 80 },
                    { "time": "2025-09-09 15:00", "precip_mm": 1.8, "chance_of_rain": 85 },
                    { "time": "2025-09-09 16:00", "precip_mm": 1.4, "chance_of_rain": 75 },
                    { "time": "2025-09-09 17:00", "precip_mm": 0.8, "chance_of_rain": 60 }
                ]
            }]
        }
    },
    "paris": {
        "location": {
            "name": "Paris",
            "region": "Ile-de-France",
            "country": "France",
            "localtime": "2025-09-09 13:45"
        },
        "current": {
            "temp_c": 19.3,
            "condition": {
                "text": "Overcast",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png"
            },
            "humidity": 62,
            "wind_kph": 9.7,
            "air_quality": {
                "pm2_5": 11.4,
                "pm10": 22.8,
                "us-epa-index": 1
            }
        },
        "forecast": {
            "forecastday": [{
                "day": { "totalprecip_mm": 1.2 },
                "hour": [
                    { "time": "2025-09-09 14:00", "precip_mm": 0.3, "chance_of_rain": 45 },
                    { "time": "2025-09-09 15:00", "precip_mm": 0.4, "chance_of_rain": 55 },
                    { "time": "2025-09-09 16:00", "precip_mm": 0.2, "chance_of_rain": 35 },
                    { "time": "2025-09-09 17:00", "precip_mm": 0.3, "chance_of_rain": 40 }
                ]
            }]
        }
    }
};

// DOM elements
const searchInput = document.getElementById('search');
const locationElement = document.querySelector('.location');
const dateElement = document.querySelector('.date');
const tempElement = document.querySelector('.temp');
const descriptionElement = document.querySelector('.description');
const weatherIcon = document.querySelector('.weather-icon');
const humidityElement = document.querySelector('.extra-info div:first-child');
const windElement = document.querySelector('.extra-info div:last-child');

// AQI elements
const aqiValueElement = document.getElementById('aqi-value');
const pm25Element = document.getElementById('pm25');
const pm10Element = document.getElementById('pm10');

// Rain forecast elements
const rainTodayElement = document.getElementById('rain-today');
const rainForecastElement = document.getElementById('rain-forecast');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Load default city (London)
    updateWeatherDisplay(citiesData.london);
    updateAQIDisplay(citiesData.london.current.air_quality);
    updateRainForecast(citiesData.london);
    
    // Add search functionality
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const city = searchInput.value.trim().toLowerCase();
            searchCity(city);
        }
    });
    
    // Add input event for real-time search suggestions
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 0) {
            showSearchSuggestions(searchTerm);
        }
    });
});

// Search for city
function searchCity(cityName) {
    // Check if city exists in our data
    const cityKey = findCityKey(cityName);
    
    if (cityKey && citiesData[cityKey]) {
        const cityData = citiesData[cityKey];
        updateWeatherDisplay(cityData);
        updateAQIDisplay(cityData.current.air_quality);
        updateRainForecast(cityData);
        searchInput.value = ''; // Clear search input
    } else {
        alert(`Weather data for "${cityName}" not found. Available cities: London, New York, Tokyo, Mumbai, Paris`);
    }
}

// Find city key from search term
function findCityKey(searchTerm) {
    const cityMappings = {
        'london': 'london',
        'new york': 'newyork',
        'newyork': 'newyork',
        'tokyo': 'tokyo',
        'mumbai': 'mumbai',
        'paris': 'paris'
    };
    
    return cityMappings[searchTerm] || null;
}

// Show search suggestions
function showSearchSuggestions(searchTerm) {
    const availableCities = ['london', 'new york', 'tokyo', 'mumbai', 'paris'];
    const matches = availableCities.filter(city => 
        city.toLowerCase().includes(searchTerm)
    );
    
    if (matches.length > 0) {
        console.log('Suggested cities:', matches);
        // You could implement a dropdown here for better UX
    }
}

// Update main weather display
function updateWeatherDisplay(data) {
    const location = data.location;
    const current = data.current;
    
    locationElement.textContent = `${location.name}, ${location.region}`;
    
    // Format date
    const date = new Date(location.localtime);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElement.textContent = date.toLocaleDateString('en-US', options);
    
    tempElement.textContent = `${Math.round(current.temp_c)}°C`;
    descriptionElement.textContent = current.condition.text;
    weatherIcon.src = `https:${current.condition.icon}`;
    weatherIcon.alt = current.condition.text;
    
    humidityElement.textContent = `Humidity: ${current.humidity}%`;
    windElement.textContent = `Wind: ${current.wind_kph} km/h`;
}

// Update AQI display
function updateAQIDisplay(airQuality) {
    const usEpaIndex = airQuality['us-epa-index'];
    
    // Update PM values
    pm25Element.textContent = airQuality.pm2_5.toFixed(1);
    pm10Element.textContent = airQuality.pm10.toFixed(1);
    
    // Update AQI value and styling based on EPA index
    let aqiText = '';
    let aqiClass = '';
    
    switch(usEpaIndex) {
        case 1:
            aqiText = 'Good';
            aqiClass = '';
            break;
        case 2:
            aqiText = 'Moderate';
            aqiClass = 'moderate';
            break;
        case 3:
            aqiText = 'Unhealthy for Sensitive';
            aqiClass = 'moderate';
            break;
        case 4:
        case 5:
        case 6:
            aqiText = 'Unhealthy';
            aqiClass = 'unhealthy';
            break;
        default:
            aqiText = 'Unknown';
            aqiClass = '';
    }
    
    aqiValueElement.textContent = aqiText;
    aqiValueElement.className = `aqi-value ${aqiClass}`;
}

// Update rain forecast
function updateRainForecast(data) {
    const today = data.forecast.forecastday[0];
    
    // Update today's total precipitation
    rainTodayElement.textContent = `${today.day.totalprecip_mm} mm`;
    
    // Clear previous forecast
    rainForecastElement.innerHTML = '';
    
    // Get next 4 hours of forecast
    const hourlyData = today.hour.slice(0, 4);
    
    hourlyData.forEach(hour => {
        const hourElement = document.createElement('div');
        hourElement.className = 'rain-hour';
        
        const time = new Date(hour.time);
        const timeString = time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            hour12: true 
        });
        
        hourElement.innerHTML = `
            <span class="time">${timeString}</span>
            <span class="precipitation">${hour.precip_mm} mm (${hour.chance_of_rain}%)</span>
        `;
        
        rainForecastElement.appendChild(hourElement);
    });
}
