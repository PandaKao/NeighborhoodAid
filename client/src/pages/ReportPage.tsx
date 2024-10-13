import { useState } from "react";
import MapWithAddress from "../components/MapWithAddress"; // Uses OpenStreetMap API for the map
import axios from "axios";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import authService from "../services/authService.ts";
import { Navigate } from "react-router-dom";

const ReportPage = () => {
  // Add auth logic from your team member's code
  const authLoggedIn = authService.loggedIn(); // Check if the user is logged in

  // Keep your state and form handling logic
  const [locationDetails, setLocationDetails] = useState<{
    fullAddress: string;
    city: string;
    lat: number;
    lon: number;
  } | null>(null);

  const [weatherData, setWeatherData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [modalType, setModalType] = useState<"error" | "success">("error");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactedAuthorities, setContactedAuthorities] = useState(false);

  // Fetch weather data
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await axios.get("/api/weather", {
        params: { lat, lon },
      });
      setWeatherData(response.data);
      setModalMessage("");
      setIsModalOpen(false);
    } catch (error) {
      setModalMessage("Failed to fetch weather data");
      setModalType("error");
      setIsModalOpen(true);
    }
  };

  // Handle location selection
  const handleLocationSelected = (
    lat: number,
    lon: number,
    addressDetails: any,
  ) => {
    setLocationDetails({ ...addressDetails, lat, lon });
    fetchWeather(lat, lon);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEmail("");
    setPhone("");
    setContactedAuthorities(false);
    setModalMessage("");
    setIsModalOpen(false);
  };

  // Keep your handleSubmit function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reportData = {
      title,
      description,
      location: { lat: locationDetails?.lat, lon: locationDetails?.lon },
      weatherData: weatherData,
      contacted: contactedAuthorities,
      email,
      phone,
    };

    try {
      const response = await axios.post("/api/reportAuthority", reportData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      console.log("Report submitted successfully:", response.data);
      resetForm();
      setModalMessage("Report submitted successfully");
      setModalType("success");
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage("Failed to report the issue");
      setModalType("error");
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add auth check in the return JSX
  return (
    <>
      {!authLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>

              {/* Modal */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                message={modalMessage}
                type={modalType}
              />

              {/* Form with your handleSubmit */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Issue Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter issue title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Describe the issue"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                {/* Map Component */}
                <MapWithAddress onLocationChange={handleLocationSelected} />

                {/* Location Details */}
                {locationDetails && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">Location Details</h3>
                    <p>City: {locationDetails.city}</p>
                    <p>Address: {locationDetails.fullAddress}</p>
                  </div>
                )}

                {/* Weather Data */}
                {weatherData && (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg">
                      {locationDetails?.city} Weather
                    </h3>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} mph</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Have You Contacted Local Authorities?
                  </label>
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={contactedAuthorities}
                    onChange={() =>
                      setContactedAuthorities(!contactedAuthorities)
                    }
                  />
                  <span>Yes</span>
                </div>

                <button
                  type="submit"
                  className={`p-2 bg-blue-500 text-white rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
                </button>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportPage;
