import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL:  "https://energydaobackend.onrender.com" ,   // https://seal-app-ivge2.ondigitalocean.app // http://localhost:5000    "https://starfish-app-njk48.ondigitalocean.app"
});  //http://localhost:5000   https://asap-backend-5v3x.onrender.com

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Auth routes
export const login = async (formdata) => 
  axiosInstance.post("/api/auth/login", formdata);
export const signup = async (formdata) =>
  axiosInstance.post("/api/auth/signup", formdata);

export const saveRecoveryPhrase = async (data) => 
  axiosInstance.post("/api/auth/save-recovery", data);

export const verifyPin = async (data) => axiosInstance.post("/api/auth/login-pin", data);

export const savePin = async (data) => axiosInstance.post("/api/auth/save-pin", data);

export const verifyIdentity = async (data) => 
  axiosInstance.post("/api/auth/verify-identity", data);

export const getDashboardData = async (payload) =>
  axiosInstance.post("/api/dashboard", payload);

export const getUserAssets = async (payload) =>
  axiosInstance.post("/api/user-assets", payload);
// services/api.js
export const confirmInvestment = async (data) => {
  return await axiosInstance.post("/api/invest/confirm", data);
};




export const checkEmailExists = async (userData) => {
  return await axiosInstance.post("/api/check-email", userData );
};


export const generateResetCode = async (email) =>
  axiosInstance.post("/api/auth/generate-reset", { email });
