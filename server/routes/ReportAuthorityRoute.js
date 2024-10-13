import express from 'express';
import reportAuthority from '../models/reportAuthority.js';
import authMiddleware from '../middleware/authMiddleware.js';  // Middleware to get user ID from auth
import setReportType from '../middleware/reportTypeMiddleware.js';
import axios from 'axios'; // Make sure to import axios

const router = express.Router();
router.use(setReportType); // Apply middlware to set report type

// Create a new report (protected route)
router.post("/authorities", authMiddleware, async (req, res) => {
  const { title, description, location, email, phone, contacted, type } = req.body;
  const userId = req.user.id; // Assuming authMiddleware adds the user's ID to req.user

  try {
    // Fetch weather data from the weather route
    const weatherResponse = await axios.get(
      "http://localhost:3001/api/weather",
      {
        params: { lat: location.lat, lon: location.lon },
      },
    );
    const weatherData = weatherResponse.data;

    // Fetch city and address from Nominatim
    const addressResponse = await axios.get(
      `https://nominatim.openstreetmap.org/reverse`,
      {
        params: {
          format: "json",
          lat: location.lat,
          lon: location.lon,
        },
        headers: {
          'User-Agent': 'NeighborhoodAid',
        }
      },
    );
    const locationData = addressResponse.data;

    // Create a new report with weather and location data
    const newReport = await reportAuthority.create({
      title,
      description,
      location: JSON.stringify(location),
      email,
      phone,
      contacted,
      type,
      weather: {
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      address: locationData.display_name, // Store full address
      city: locationData.address.city, // Store city name
      userId, // Storing the user who created the report
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Failed to create report" });
  }
});

// Fetch reports for user
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const reports = await reportAuthority.findAll({ userId }); // Searches database for reports associated with user

    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports: ", error);
    res.status(500).json({ message: "Failed to fetch reports" });
  }
})

export default router;
