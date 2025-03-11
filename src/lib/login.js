import axios from "axios";

// API instance
const login = axios.create({
  baseURL: "https://data-mangement.vercel.app",
  headers: { "Content-Type": "application/json" },
});

// Helper function to parse JWT
export const parseJwt = (token) => {
  try {
    if (!token) return null;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Invalid JWT:", e);
    return null;
  }
};

// Cookie Management
export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export const setCookie = (name, value, expiryTime) => {
  const expires = new Date(expiryTime).toUTCString();
  document.cookie = `${name}=${value}; path=/; expires=${expires}; Secure; SameSite=Strict`;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; path=/; max-age=0; Secure; SameSite=Strict`;
};

// Logout Function
export const logoutUser = () => {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  window.location.href = "/";
};

// Refresh Access Token Function
export const refreshAccessToken = async () => {
  try {
    const refreshToken = getCookie("refreshToken");
    const refreshExp = getCookie("refreshExp"); // Fetching directly from cookies

    // Validate refresh token and expiration time
    if (!refreshToken || !refreshExp || Date.now() > refreshExp) {
      console.log("Refresh token expired, logging out...");
      logoutUser();
      return null;
    }

    console.log("Refreshing access token...");
    const response = await axios.post(`${login.defaults.baseURL}/refresh-token`, {
      refresh_token: refreshToken,
    });

    // Extract new access token & expiration time from response
    const { access_token, access_token_expires_at } = response.data;

    if (!access_token || !access_token_expires_at) {
      console.error("Invalid refresh response, missing access token");
      logoutUser();
      return null;
    }

    // Convert ISO expiration date to timestamp
    const newAccessExp = new Date(access_token_expires_at).getTime();

    // Update the access token in cookies
    setCookie("accessToken", access_token, newAccessExp);
    setCookie("accessExp", newAccessExp);

    // Set Authorization Header for future requests
    login.defaults.headers.Authorization = `Bearer ${access_token}`;

    return access_token;
  } catch (err) {
    console.error("Failed to refresh token:", err);
    logoutUser();
    return null;
  }
};


// Axios Request Interceptor
login.interceptors.request.use(async (config) => {
  let token = getCookie("accessToken") || sessionStorage.getItem("accessToken");
  let tokenExp = getCookie("accessExp") || sessionStorage.getItem("accessExp");

  if (tokenExp && Date.now() > tokenExp - 5000) {
    token = await refreshAccessToken();
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default login;
