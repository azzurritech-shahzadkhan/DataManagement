import { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = sessionStorage.getItem("accessToken");

      if (!accessToken) {
        setError("Access token not found. Please log in again.");
        return;
      }

      try {
        const response = await axios.get("https://data-mangement.vercel.app/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Store the response data as an object, NOT a string
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);

        setError(
          error.response?.data?.message || "Failed to fetch profile. Please try again."
        );
      }
    };

    fetchProfile();
  }, []);

  return (
 <Container className="relative overflow-hidden">
  <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-[95vw] sm:max-w-md mx-auto flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-gray-900">Profile Information</h2>

    {/* Show Profile Data if available */}
    {profileData ? (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300 flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Name:</span> {profileData.username}
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          <span className="text-gray-600">Email:</span> {profileData.email}
        </p>
      </div>
    ) : error ? (
      <pre className="text-red-500">{error}</pre>
    ) : (
      <p>Loading...</p>
    )}
  </div>
</Container>


  );
};

export default Profile;
