

export const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
    const accessToken = getCookie("accessToken") || sessionStorage.getItem("accessToken");
    return !!accessToken; 
};
