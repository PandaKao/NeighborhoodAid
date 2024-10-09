# NeighborhoodAid

## License
MIT License

## Description

NeighborhoodAid is a **RESTful API** and **React-based** platform designed to empower citizens to report local issues such as potholes, streetlight outages, or vandalism. The platform provides a seamless user experience where individuals can track the progress of their reports, receive real-time updates when issues are resolved, and engage with others in their community. By bringing communities together, NeighborhoodAid aims to foster civic engagement, transparency, and collaboration in solving local problems.

## Motivation

We were motivated to create NeighborhoodAid to provide a practical and comprehensive solution for civic engagement and local issue resolution. Our goal was to streamline the process of reporting, tracking, and managing community issues while fostering community interaction and collaboration. We believe that when communities work together, they become stronger and more resilient, and our platform serves as a bridge to facilitate that collaboration.

NeighborhoodAid encourages users to:
- **Empower their community** by addressing small problems before they escalate.
- **Engage collaboratively** with neighbors on larger projects.
- **Maintain transparency** by tracking issue resolution in real time.
- **Stay informed** with up-to-date weather and location information that is contextually relevant to their reports.

## Core Features

- **Reporting System**: Users can report various local issues, including potholes, streetlight outages, and more, using an interactive map and real-time weather data.
- **Progress Tracking**: Users receive updates on the status of their reports, such as when issues are in progress or resolved, promoting transparency.
- **Community Engagement**: A community feed where users can create posts, like, comment, and engage with others about neighborhood updates and events.
- **Weather Information**: Real-time weather updates are provided based on the user's location, ensuring that users have the latest information when submitting reports or planning events.
- **Authentication**: Secure login and registration functionalities using JWT, bcrypt, and social media integrations for a seamless user experience.

## What We Learned

During the development of NeighborhoodAid, we gained a deep understanding and hands-on experience with various technologies and concepts:

### 1. **Frontend Development with React, Tailwind CSS, and Vite**
   - Learned to structure and manage a component-based architecture efficiently using React and TypeScript.
   - Utilized Tailwind CSS for consistent, responsive, and mobile-friendly designs, maintaining a unified visual identity across the platform.
   - Developed reusable components like Modals, Forms, and Navigation bars to optimize development speed and maintain code reusability.
   - Used Vite for fast, efficient frontend development and bundling.

### 2. **Backend Development with Node.js, Express.js, and Sequelize**
   - Implemented a RESTful API using Express.js, managing routes for user authentication, feed management, reporting, and weather data retrieval.
   - Gained experience with Sequelize and Sequelize CLI for database modeling, migrations, and associations, ensuring data integrity and relationship consistency across models.
   - Configured middlewares such as CORS and logger to secure and monitor API requests, improving server reliability and performance.

### 3. **Authentication and Security Techniques**
   - Implemented secure authentication mechanisms using bcrypt for password hashing and JWT for session management, ensuring data security and user privacy.
   - Integrated social login options (e.g., Facebook and Google) to enhance the user experience and streamline the registration process.

### 4. **API Integration and State Management**
   - Integrated multiple APIs, including:
     - **OpenWeather API** for weather data.
     - **OpenWeather Geolocation API** for retrieving weather data based on coordinates.
     - **OpenStreetMap** and **Nominatim** for location-based services (both client-side and server-side usage).
     - **Browser Geolocation API** for fetching user location client-side.

   - **OpenStreetMap Integration**:
     - Utilized **React Leaflet**, a React wrapper for Leaflet, to create an interactive map component using OpenStreetMap tiles.
     - Developed functionality to add dynamic markers on the map:
       - Markers are placed based on user interactions (e.g., clicking on the map) or by fetching user coordinates from the Browser Geolocation API.
       - The map updates in real-time, displaying markers that represent specific locations tied to user reports or user interactions.
       - The component ensures that the map remains responsive and interactive across different devices, providing a seamless user experience for reporting and visualizing issues.

   - **Nominatim Integration**:
     - **Nominatim** uses OpenStreetMap data to find locations on Earth by name and address (geocoding). It also supports reverse geocoding, where it converts latitude and longitude coordinates into readable addresses or city names.
     - For user-submitted reports:
       - Used Nominatim to convert location names or addresses into coordinates, which are then displayed as markers on the OpenStreetMap component.
     - For weather data and user location:
       - Implemented reverse geocoding using the latitude and longitude obtained from the **OpenWeather Geolocation API** or the **Browser Geolocation API**.
       - If Nominatim shows an unknown city or fails to provide an address, the **OpenWeather Geolocation API** is used as a fallback. This API retrieves the latitude and longitude of the user's location and provides the city name based on these coordinates, ensuring the platform consistently delivers accurate and relevant location information to the user.

   - **API Workflow**:
     - The application first attempts to use the **Browser Geolocation API** for client-side location fetching, allowing for precise user positioning and weather updates.
     - If the user denies permission for the browser to access their location:
       - The platform falls back to the **OpenWeather Geolocation API**, which uses the user's IP address to provide an approximate latitude and longitude for weather information.
     - For location details:
       - Nominatim is used for reverse geocoding to convert the latitude and longitude coordinates into a readable city name or address.
       - If Nominatim fails to retrieve the city name or shows an unknown city, the platform uses the **OpenWeather Geolocation API** as a fallback to provide the city name and address based on the coordinates.
     - Once the coordinates are obtained, the **OpenWeather API** displays the weather information based on these coordinates, ensuring users always receive accurate and up-to-date weather details.

### 5. **Full-Stack Development and Deployment**
   - Gained proficiency in full-stack development by connecting the frontend and backend using RESTful principles, ensuring smooth communication between components.
   - Configured the backend server for production deployment, ensuring compatibility with client-side routing for the React application.
   - Implemented environment management using dotenv to securely handle API keys, database credentials, and other sensitive information.

### 6. **Database Management and Migrations**
   - Developed database models and migrations using Sequelize and Sequelize CLI, focusing on ensuring data integrity and relationships between users, reports, and comments.
   - Created seed files for testing and development purposes, allowing realistic simulation of database data during development cycles.

### 7. **Responsive and Accessible Design**
   - Ensured that all components, from forms to interactive maps, were responsive and accessible across different devices and screen sizes using Tailwind CSS utilities.
   - Focused on accessibility standards by using semantic HTML elements and keyboard navigation.

### 8. **Collaboration and Version Control**
   - Used Git and GitHub for collaborative development, managing feature branches, pull requests, and resolving merge conflicts efficiently.
   - Ensured code quality through peer reviews and implemented testing strategies for both frontend and backend components.
## Getting Started


## Technologies Used

- **Frontend**: React, Vite, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, Sequelize, Sequelize CLI
- **Database**: PostgreSQL
- **APIs**: OpenWeather API, OpenWeather Geolocation API, OpenStreetMap, Nominatim, Browser Geolocation API
- **Testing**: Postman for backend testing
- **Deployment**: Vite for frontend, Node.js for backend

## Features

- **Dynamic Issue Reporting**: Users can report and track the status of community issues.
- **Interactive Maps**: Integration with OpenStreetMap and Nominatim API for precise geolocation and visualization.
- **Weather Updates**: Real-time weather information for reported locations using OpenWeather API.
- **Community Engagement**: Comment system and community playlist powered by Spotify API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [Walkthrough Video](#walkthrough-video)

## Installation

1. Clone the repository: `git clone https://github.com/mirasoldavila13/NeighborhoodAid.git`
2. Navigate to the project directory: `cd NeighborhoodAid`
3. Install the required dependencies: `npm install`
4. Run the application:
   - For development: `npm run start:dev`
   - For production: `npm start`

## Usage

NeighborhoodAid allows users to report community issues, track their progress, and engage with others in their neighborhood. To get started:
1. Clone the repository and install dependencies as described above.
2. Run the application using `npm start`.
3. Access the platform through your browser at `http://localhost:3001`.

> **Note**: Ensure that all required API keys are set up in your environment variables.

## Credits

This project was developed by **Mirasol Davila** in collaboration with:
## Mirasol Davila Contribution Summary

| **Component/Feature**        | **Description**                                                                                                                                                       | **Details**                                                                                                                                                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **LandingPage.tsx**         | Developed as the main entry point for the Neighborhood Aid platform.                                                                                                  | Integrated child components (Nav, Hero, Features, FAQ, Testimonials, Newsletter, Footer) using React and TypeScript for a cohesive, maintainable, and responsive design with Tailwind CSS.                  |
| **Nav.tsx**                 | Designed and developed the navigation component for desktop and mobile views.                                                                                         | Implemented dynamic menu state management, responsive design with Tailwind CSS, accessibility enhancements using semantic HTML, and consistent visual styling for hover and interaction states.               |
| **Newsletter.tsx**          | Created a subscription section to encourage user engagement and sign-ups.                                                                                             | Developed responsive form elements, incorporated Tailwind CSS for consistent styling, and ensured accessibility with semantic structuring and clear placeholder texts.                                        |
| **FAQ.tsx**                 | Built an interactive FAQ section using an accordion-style interface.                                                                                                  | Managed state with `useState`, implemented dynamic styling for active states using Tailwind CSS, and ensured accessibility with semantic HTML and screen reader support.                                     |
| **Features.tsx**            | Showcased platform features using an interactive tab system.                                                                                                          | Developed dynamic feature panels with React, integrated SVG assets, and used Tailwind CSS for responsiveness and consistent styling.                                                                          |
| **Pricing.tsx**             | Developed the Pricing component highlighting different subscription plans.                                                                                            | Designed tiered pricing cards with Tailwind CSS, integrated navigation components, ensured responsive behavior across devices, and included interactive CTAs to drive user engagement.                       |
| **Testimonials.tsx**        | Built the Testimonials component to showcase user feedback.                                                                                                           | Implemented a responsive grid layout, applied Tailwind CSS for consistent styling, and created a dynamic testimonial display system with hover effects and interactive design elements.                       |
| **MapWithAddress.tsx**      | Developed an interactive map component using React, TypeScript, and React Leaflet.                                                                                   | Integrated OpenStreetMap, Nominatim, and OpenWeather APIs for robust geolocation capabilities and developed dynamic marker handling and state management for a user-friendly experience.                     |
| **ReportPage.tsx**          | Created the Report page for users to submit detailed reports about local issues.                                                                                      | Integrated `MapWithAddress` for location selection, weather data fetching, and developed a comprehensive form with Tailwind CSS for a streamlined reporting experience.                                      |
| **authService.ts**          | Enhanced the authentication service to include registration, login, and Spotify API integration.                                                                       | Developed robust JWT token management, error handling, and session management functionalities. Implemented Spotify API calls for fetching user playlists and managing authentication tokens.                  |
| **Middleware Implementations** | Added critical middlewares to manage and secure server requests.                                                                                                       | Implemented CORS for cross-origin requests, logger for monitoring and debugging, and error handling middleware for consistent API responses.                                                                 |
| **Database Migrations**     | Developed migrations for essential tables such as Users, Issues, Feeds, and Comments using Sequelize.                                                                 | Applied up and down migrations to manage schema changes, implemented validation rules, and ensured schema alignment with project requirements.                                                               |
| **Database Modeling**       | Defined and managed associations between Sequelize models for Feeds, Comments, and Users.                                                                             | Implemented relationships (`belongsTo`, `hasMany`) and ensured proper model initialization for data integrity.                                                                                               |
| **API Routes Contributions**| Developed robust API routes for managing authentication, community feeds, and reporting issues.                                                                        | Implemented routes for creating, updating, deleting, and fetching feed posts. Integrated report submission routes with weather and geolocation APIs for enhanced context and error handling mechanisms.       |
| **Database Seeding Contribution** | Created seed scripts for populating authority reports for testing and development purposes.                                                                     | Developed seed files using Sequelize’s bulkCreate with error handling and structured sample data for realistic testing scenarios.                                                                            |
| **.sequelizerc Configuration** | Customized the `.sequelizerc` file to ensure organized paths for migrations, models, and seeders.                                                                  | Configured paths for models, seeders, and migrations, ensuring consistent file structuring and ease of access for development and database management.                                                        |
| **Server Configuration**    | Enhanced the `server.js` file with middleware integration, route organization, and production setup.                                                                   | Integrated CORS, logger, and error handling middleware, structured routes for clarity, and set up production configuration for serving the client-side application.                                           |
| **Modal.tsx**               | Developed a reusable modal component for displaying dynamic messages.                                                                                                 | Implemented flexible props for type safety, dynamic rendering based on state, and used Tailwind CSS for styling. Ensured reusability and accessibility across modules.                                        |
| **Weather.tsx**             | Developed a component to provide real-time weather updates.                                                                                                           | Integrated multiple APIs (browser geolocation, OpenWeather) and used Axios for API calls. Styled with Tailwind CSS for a clean and responsive display. Included error handling for user feedback.            |
| **Hero.tsx**                | Designed the hero section for the platform’s landing page.                                                                                                            | Structured a visually engaging layout with responsive flex settings, integrated SVG images, and styled text for emphasis. Ensured the component is responsive and accessible.                                 |
| **DashboardNav.tsx**        | Developed the dashboard navigation component for logged-in users.                                                                                                     | Included navigation links, integrated authentication checks, and implemented logout functionality. Styled with Tailwind CSS for responsive behavior and user experience.                                      |
| **Dashboard.tsx**           | Developed the Dashboard page, providing an interactive community feed and weather updates.                                                                             | Implemented authentication checks, dynamic post management (like, comment, edit, delete), and integrated the Weather component. Styled for consistency using Tailwind CSS.                                   |
| **Login.tsx & UserRegistration.tsx** | Created the login and registration pages for secure user authentication.                                                                                              | Integrated form validation, used `authService` for login and registration functionality, implemented a modal for feedback, and styled with Tailwind CSS for a professional and responsive design.             |
| **RESTful API Implementation** | Built the backend API using Express.js to follow RESTful principles for efficient and organized data handling.                                                         | Developed routes for CRUD operations across various models (e.g., user registration, feeds, reporting), ensuring data integrity and secure interactions with authentication middleware.                      |
| **Full-Stack Development**  | Combined frontend and backend technologies to create a seamless and integrated platform.                                                                               | Utilized React and TypeScript for frontend development and Express.js with Sequelize for the backend, connecting components using Axios for RESTful API interactions and state management.                     |


### Collaborators

- **[Justin Kao](https://github.com/PandaKao)**: 
  - Added the PostGIS extension for geometry support for storing longitude and latitude coordinates in `server/db/schema.sql`.
  
- **Database Models**:
  - Created `server/models/issue.js` to define the Issue model with fields such as `id`, `description`, `location`, `status`, and `assignedUserId`.
  - Created `server/models/user.js` to define the User model, including password hashing functionality before saving the user in the database.
  
- **Database Seeding**:
  - Developed `server/seeds/index.js` to handle database seeding with users and issues data.
  - Developed `server/seeds/user-seeds.js` to seed user data into the database using the User model.
  
- **Database Migration**:
  - Created migration file `migrations/20241001203053-create-users.js` to set up the issues table schema with necessary fields and constraints.
  
- **Authentication Service**:
  - Developed `client/src/services/authService.ts` to handle JWT-based authentication, including token retrieval, expiration checking, and profile decoding.
  
- **User Registration Page**:
  - Updated `client/src/pages/UserRegistration.tsx` to store the JWT token in localStorage upon successful user registration.
  - 14 Merge Pull Request
  
- **[Sammy Kordi](https://github.com/thepeoplesengineer)**:
    - **Community Report Page**:
        - Developed `client/src/pages/CommunityReportPage.tsx` to display the community report page where users can view and submit reports in the early stages of the project.
    - **Database Model for Community Reports**:
        - Created `server/models/reportCommunity.js` to define the model for community reports, including fields for title, description, location (stored as JSON), and other relevant information in the early stages of the project.
    - Contributed 1 pull request.  
    - *Initially contributed in the early stages but later chose not to continue further involvement or collaboration. We appreciate their early efforts.*

- **[Isaiah Skidmore](https://github.com/IsaiahSkidmore)**:
    - Assisted in selecting the logo for the project in the early stages.
    - Contributed 1 pull request.  
    - *Initially contributed in the early stages but later chose not to continue further involvement or collaboration. We appreciate their early efforts.*



## License

This project is licensed under the MIT license.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-green.svg) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=white&style=flat-square)]
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white&style=flat-square)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.x-52B0E7?logo=sequelize&logoColor=white&style=flat-square)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.x-336791?logo=postgresql&logoColor=white&style=flat-square)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.x-06B6D4?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![RESTful API](https://img.shields.io/badge/API-RESTful-FF6F00?style=flat-square)](https://restfulapi.net/)
[![Axios](https://img.shields.io/badge/Axios-0.21.1-5A29E4?logo=axios&logoColor=white&style=flat-square)](https://axios-http.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.x-199900?logo=leaflet&logoColor=white&style=flat-square)](https://leafletjs.com/)
[![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=flat-square)](https://openweathermap.org/)
[![Nominatim](https://img.shields.io/badge/Nominatim-API-blue?style=flat-square)](https://nominatim.org/)
[![Spotify API](https://img.shields.io/badge/Spotify-API-1DB954?logo=spotify&logoColor=white&style=flat-square)](https://developer.spotify.com/)
![GitHub issues](https://img.shields.io/github/issues/mirasoldavila13/NeighborhoodAid)
![GitHub closed issues](https://img.shields.io/github/issues-closed/mirasoldavila13/NeighborhoodAid)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mirasoldavila13/NeighborhoodAid)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/mirasoldavila13/NeighborhoodAid)
![GitHub stars](https://img.shields.io/github/stars/mirasoldavila13/NeighborhoodAid?style=social)
![GitHub forks](https://img.shields.io/github/forks/mirasoldavila13/NeighborhoodAid?style=social)
![LOC](https://img.shields.io/tokei/lines/github/mirasoldavila13/NeighborhoodAid)
![GitHub last commit](https://img.shields.io/github/last-commit/mirasoldavila13/NeighborhoodAid)
![GitHub contributors](https://img.shields.io/github/contributors/mirasoldavila13/NeighborhoodAid)


## Features

- **Dynamic Issue Reporting**: Users can report and track the status of community issues.
- **Interactive Maps**: Integration with OpenStreetMap and Nominatim API for precise geolocation and visualization.
- **Weather Updates**: Real-time weather information for reported locations using OpenWeather API.
- **Community Engagement**: Comment system and community playlist powered by Spotify API.
- **AI Sentiment Analysis**: Analyzes user sentiment in discussions and offers personalized recommendations using OpenAI.

## How to Contribute

Contributions are welcome! To contribute to NeighborhoodAid, follow these steps:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create a copy of this repository under your GitHub account.
2. **Clone Your Fork**: Use `git clone` to download the forked repository to your local machine.
3. **Create a Branch**: Create a new branch for your feature or fix using `git checkout -b branch-name`.
4. **Make Your Changes**: Implement your changes or additions to the project.
5. **Commit Your Changes**: Use `git commit -m "Description of changes"` to commit your changes.
6. **Push to Your Fork**: Use `git push origin branch-name` to push your changes to your forked repository.
7. **Create a Pull Request**: Navigate to the original repository and click the 'New Pull Request' button. Provide a detailed description of your changes in the pull request.

## Tests

To test the NeighborhoodAid platform, follow these steps:

- **Manual Testing**: Run the application (`npm start`) and test features such as issue reporting, commenting, and map visualization.
- **Review the Output**: Verify the issue statuses, user interactions, and API integrations for accuracy and responsiveness.

## Questions

If you have any questions about the project, you can contact me via my GitHub profile at [mirasoldavila13](https://github.com/mirasoldavila13) 
## Walkthrough Video
