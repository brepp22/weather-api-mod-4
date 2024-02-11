let cities = [
  {
    "location": {
      "city": "San Francisco",
      "country": "United States",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "current": {
      "weather_description": "Thunderstorm",
      "apparent_temperature": 66,
      "humidity": 67,
      "wind_speed": 12,
      "temperature_max": 68,
      "temperature_min": 54,
      "precipitation_probability": 0.70
    },
    "forecast": {
      "daily": [
        {
          "date": "2023-05-25",
          "weather_description": "Cloudy",
          "temperature_max": 68,
          "temperature_min": 58,
          "precipitation_probability": 0.3,
          "humidity": 65,
          "wind_speed": 8
        },
        {
          "date": "2023-05-26",
          "weather_description": "Sunny",
          "temperature_max": 72,
          "temperature_min": 60,
          "precipitation_probability": 0.1,
          "humidity": 55,
          "wind_speed": 12
        },
        {
          "date": "2023-05-27",
          "weather_description": "Partly Cloudy",
          "temperature_max": 70,
          "temperature_min": 59,
          "precipitation_probability": 0.2,
          "humidity": 62,
          "wind_speed": 10
        }
      ]
    }
  },
  {
    "location": {
      "city": "New York",
      "country": "United States",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "current": {
      "weather_description": "Partly Cloudy",
      "apparent_temperature": 68,
      "humidity": 62,
      "wind_speed": 8,
      "temperature_max": 78,
      "temperature_min": 61,
      "precipitation_probability": 0.2
    },
    "forecast": {
      "daily": [
        {
          "date": "2023-05-25",
          "weather_description": "Sunny",
          "temperature_max": 85,
          "temperature_min": 73,
          "precipitation_probability": 0.2,
          "humidity": 75,
          "wind_speed": 7
        },
        {
          "date": "2023-05-26",
          "weather_description": "Sunny",
          "temperature_max": 78,
          "temperature_min": 67,
          "precipitation_probability": 0.1,
          "humidity": 60,
          "wind_speed": 10
        },
        {
          "date": "2023-05-27",
          "weather_description": "Partly Cloudy",
          "temperature_max": 75,
          "temperature_min": 62,
          "precipitation_probability": 0.3,
          "humidity": 65,
          "wind_speed": 9
        }
      ]
    }
  },
  {
    "location": {
      "city": "Detroit",
      "country": "United States",
      "latitude": 42.3314,
      "longitude": -83.0458
    },
    "current": {
      "weather_description": "Rainy",
      "apparent_temperature": 61,
      "humidity": 80,
      "wind_speed": 7,
      "temperature_max": 64,
      "temperature_min": 54,
      "precipitation_probability": 0.7
    },
    "forecast": {
      "daily": [
        {
          "date": "2023-05-25",
          "weather_description": "Cloudy",
          "temperature_max": 64,
          "temperature_min": 54,
          "precipitation_probability": 0.3,
          "humidity": 70,
          "wind_speed": 9
        },
        {
          "date": "2023-05-26",
          "weather_description": "Partly Cloudy",
          "temperature_max": 68,
          "temperature_min": 57,
          "precipitation_probability": 0.2,
          "humidity": 65,
          "wind_speed": 6
        },
        {
          "date": "2023-05-27",
          "weather_description": "Sunny",
          "temperature_max": 72,
          "temperature_min": 60,
          "precipitation_probability": 0.1,
          "humidity": 60,
          "wind_speed": 8
        }
      ]
    }
  },
  {
    "location": {
      "city": "Honolulu",
      "country": "United States",
      "latitude": 21.3069,
      "longitude": -157.8583
    },
    "current": {
      "weather_description": "Sunny",
      "apparent_temperature": 84,
      "humidity": 65,
      "wind_speed": 10,
      "temperature_max": 84,
      "temperature_min": 75,
      "precipitation_probability": 0.1
    },
    "forecast": {
      "daily": [
        {
          "date": "2023-05-25",
          "weather_description": "Sunny",
          "temperature_max": 84,
          "temperature_min": 75,
          "precipitation_probability": 0.1,
          "humidity": 70,
          "wind_speed": 12
        },
        {
          "date": "2023-05-26",
          "weather_description": "Partly Cloudy",
          "temperature_max": 85,
          "temperature_min": 77,
          "precipitation_probability": 0.4,
          "humidity": 75,
          "wind_speed": 8
        },
        {
          "date": "2023-05-27",
          "weather_description": "Rainy",
          "temperature_max": 80,
          "temperature_min": 72,
          "precipitation_probability": 0.8,
          "humidity": 80,
          "wind_speed": 10
        }
      ]
    }
  }
]

function getWeather(city) {
  return cities.find(c => c.location.city === city)
}

module.exports = { getWeather }
