import { useState } from "react";
import reportImage from "../../public/report.svg";
import trackProgressImage from "../../public/track_progress.svg";
import weatherImage from "../../public/weather.svg";
import musicImage from "../../public/music.svg";
import conversationImage from "../../public/join_conversation.svg";

const Features = () => {
  const [activeTab, setActiveTab] = useState("panel-1");

  const handleTabClick = (panel: string) => {
    setActiveTab(panel);
  };

  return (
    <section id="features" className="container mx-auto mt-16 px-6">
      <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
      <p className="max-w-md mx-auto text-center text-grayishBlue">
        Our platform aims to strengthen community connections by providing tools
        to collaborate and address local needs.
      </p>

      {/* Tabs */}
      <div
        id="tabs"
        className="container relative mx-auto my-6 mb-32 mt-12 px-6"
      >
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* Feature 1 */}
          <div
            className={`cursor-pointer text-center text-gray-600 md:w-1/3 py-5 hover:text-softRed ${
              activeTab === "panel-1" ? "border-b-4 border-softRed" : ""
            }`}
            onClick={() => handleTabClick("panel-1")}
          >
            Report Local Issues
          </div>
          {/* Feature 2 */}
          <div
            className={`cursor-pointer text-center text-gray-600 md:w-1/3 py-5 hover:text-softRed ${
              activeTab === "panel-2" ? "border-b-4 border-softRed" : ""
            }`}
            onClick={() => handleTabClick("panel-2")}
          >
            Track Progress
          </div>
          {/* Feature 3 */}
          <div
            className={`cursor-pointer text-center text-gray-600 md:w-1/3 py-5 hover:text-softRed ${
              activeTab === "panel-3" ? "border-b-4 border-softRed" : ""
            }`}
            onClick={() => handleTabClick("panel-3")}
          >
            Check the Weather
          </div>
          {/* Feature 4 */}
          <div
            className={`cursor-pointer text-center text-gray-600 md:w-1/3 py-5 hover:text-softRed ${
              activeTab === "panel-4" ? "border-b-4 border-softRed" : ""
            }`}
            onClick={() => handleTabClick("panel-4")}
          >
            Create and Share
          </div>
          {/* Feature 5 */}
          <div
            className={`cursor-pointer text-center text-gray-600 md:w-1/3 py-5 hover:text-softRed ${
              activeTab === "panel-5" ? "border-b-4 border-softRed" : ""
            }`}
            onClick={() => handleTabClick("panel-5")}
          >
            Join the Conversation
          </div>
        </div>

        {/* Panels */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          {activeTab === "panel-1" && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={reportImage}
                  alt="Report Issues"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left">
                  Make Your Voice Heard
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
                  Easily report local community issues such as potholes,
                  streetlight outages, vandalism, or request assistance for
                  neighborhood improvements.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="/features"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-purpleStrong hover:bg-darkViolet hover:border-darkViolet transition duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 2 */}
          {activeTab === "panel-2" && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={trackProgressImage}
                  alt="Track Progress"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left">
                  Stay Updated on Local Issues
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
                  Monitor the progress of community issues and your submitted
                  reports in real time.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="/features"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-purpleStrong hover:bg-darkViolet hover:border-darkViolet transition duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 3 */}
          {activeTab === "panel-3" && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={weatherImage}
                  alt="Check the Weather"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left">
                  Stay Informed with Weather Updates
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
                  Stay informed on the latest weather updates to plan your day
                  efficiently.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="/features"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-purpleStrong hover:bg-darkViolet hover:border-darkViolet transition duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 4 */}
          {activeTab === "panel-4" && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={musicImage}
                  alt="Create and Share"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left">
                  Create and Share Your Favorite Playlists
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
                  Music connects people, and Neighborhood Aid lets you share
                  your favorite songs or create your own playlists.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="/features"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-purpleStrong hover:bg-darkViolet hover:border-darkViolet transition duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Panel 5 */}
          {activeTab === "panel-5" && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel">
              <div className="flex justify-center md:w-1/2">
                <img
                  src={conversationImage}
                  alt="Join the Conversation"
                  className="relative z-10"
                />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left">
                  Engage in Community Conversations
                </h3>
                <p className="text-grayishBlue text-center md:text-left">
                  Be part of the conversation within your community. Comment,
                  like, and engage with other neighbors on topics that matter.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="/features"
                    className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-purpleStrong hover:bg-darkViolet hover:border-darkViolet transition duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
