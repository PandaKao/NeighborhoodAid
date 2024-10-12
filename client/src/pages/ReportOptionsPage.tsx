import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import authService from "../services/authService.ts";
import { Navigate } from "react-router-dom";

interface Report {
  id: number;
  type: string; // 'Authorities' or 'Community'
  description: string;
  createdAt: string;
  status: string; // 'Open' or 'Resolved'
  reporterEmail: string;
}

const ReportOptionsPage = () => {
  const { userId } = useParams<{ userId: string }>(); // Get userId from URL parameters
  const authLoggedIn = authService.loggedIn();
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch reports from backend
  const fetchReports = async () => {
    try {
      const response = await axios.get(`/api/reports?userId=${userId}`);
      setReports(response.data as Report[]);
    } catch (error) {
      setError("Failed to fetch reports");
    }
  };

  useEffect(() => {
    fetchReports();
  }, [userId]); //depend on usrId to refetch if it changes

  return (
    <>
      {!authLoggedIn ? (
        <>
          <Navigate to="/" />
        </>
      ) : (
        <div className="flex flex-col min-h-screen">
          <DashboardNav />
          <main className="flex-grow p-6">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-6">Create a Report</h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">
                    Report to Authorities
                  </h2>
                  <p className="mb-4">
                    Use this option to report issues directly to local
                    authorities.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/report/authorities`}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Report to Authorities
                  </Link>
                </div>
                <div className="p-4 border rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-4">
                    Report to Community
                  </h2>
                  <p className="mb-4">
                    Share issues with the local community for discussion and
                    resolution.
                  </p>
                  <Link
                    to={`/dashboard/${userId}/report/community`}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Report to Community
                  </Link>
                </div>
              </div>

              {/* Reports Feed */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Reported Issues</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 gap-4">
                  {reports.length > 0 ? (
                    reports.map((report) => (
                      <div
                        key={report.id}
                        className="p-4 border rounded shadow"
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {report.type === "Authorities"
                            ? "Reported to Authorities"
                            : "Reported to Community"}
                        </h3>
                        <p>{report.description}</p>
                        <p className="text-sm text-gray-600">
                          Status: {report.status}
                        </p>
                        <p className="text-sm text-gray-600">
                          Reporter: {report.reporterEmail}
                        </p>
                        <p className="text-sm text-gray-600">
                          Date: {new Date(report.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No reports available yet.</p>
                  )}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ReportOptionsPage;
