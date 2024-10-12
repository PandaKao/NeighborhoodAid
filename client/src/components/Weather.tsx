import { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  name: string; // City name
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string; // Weather condition icon
  }[];
  wind: {
    speed: number;
  };
}

interface IPResponse {
  latitude: number;
  longitude: number;
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch weather data from the backend
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      // Make the request to your backend server that handles the weather API call
      const response = await axios.get<WeatherData>("/api/weather", {
        params: { lat, lon },
      });
      setWeatherData(response.data); // Save the fetched weather data
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Failed to fetch weather data");
    }
  };

  // Fetch location using OpenWeather's geolocation API as fallback
  const fetchLocationFromOpenWeather = async () => {
    try {
      // Use IP-based geolocation as a fallback
      const response = await axios.get<IPResponse>("https://ipapi.co/json"); // Third-party service for location data
      if (response.data) {
        const { latitude, longitude } = response.data;
        fetchWeather(latitude, longitude); // Fetch weather using OpenWeather geolocation
      }
    } catch (error) {
      console.error(
        "Failed to retrieve location from OpenWeather Geolocation API:",
        error,
      );
      setError("Failed to retrieve location from OpenWeather Geolocation API");
    }
  };

  useEffect(() => {
    // Attempt to get the user's location from the browser's Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude); // Fetch weather using browser geolocation
        },
        (_) => {
          console.error(
            "Browser geolocation permission denied, using OpenWeather Geolocation API",
          );
          fetchLocationFromOpenWeather(); // Fallback to OpenWeather geolocation
        },
      );
    } else {
      console.error(
        "Browser geolocation not supported, using OpenWeather Geolocation API",
      );
      fetchLocationFromOpenWeather(); // Fallback if browser geolocation is not supported
    }
  }, []);

  return (
    <div className="weather-widget p-4 bg-white shadow-md rounded-lg">
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
          <p className="text-lg">Temperature: {weatherData.main.temp}°F</p>
          <p className="text-md capitalize">
            Condition: {weatherData.weather[0].description}
          </p>
          <p className="text-md">Wind: {weatherData.wind.speed} mph</p>
          <p className="text-md">Humidity: {weatherData.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
