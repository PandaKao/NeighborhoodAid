import express from 'express';
import multer from 'multer';
import Issue from '../models/reportCommunity.js';
import axios from 'axios';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Ensure uploads directory exists for image uploads
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Ensure unique filenames
  }
});

const upload = multer({ storage: storage });

/** 
 This route allows users to submit reports for community issues, including image uploads 
 **/
router.post('/api/community-issues', upload.single('picture'), async (req, res) => {
  const { title, description, location, contacted, username, phone, email, status } = req.body;

  try {
    const newIssue = await Issue.create({
      title,
      description,
      location: JSON.parse(location), // Parse the JSON string to object
      contacted,
      username,
      phone,
      email,
      status,
      picture: req.file ? req.file.path : null, // Save the file path if an image was uploaded
    });

    res.status(201).json(newIssue);
  } catch (error) {
    console.error('Error creating community issue:', error);
    res.status(500).json({ message: 'Failed to create community issue' });
  }
});

router.post('/api/issues', async (req, res) => {
  const { title, description, location, email, phone, contacted } = req.body;

  try {
    // Fetch weather data from OpenWeather API based on the location
    const weatherApiKey = process.env.WEATHER_API_KEY;
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${weatherApiKey}&units=imperial`
    );

    const weatherData = weatherResponse.data;

    // Create a new issue with weather data
    const newIssue = await Issue.create({
      title,
      description,
      location: JSON.stringify(location),
      email,
      phone,
      contacted,
      weather: {
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].description,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
    });

    res.status(201).json(newIssue);
  } catch (error) {
    console.error('Error creating issue with weather data:', error);
    res.status(500).json({ message: 'Failed to create issue with weather data' });
  }
});

export default router;

