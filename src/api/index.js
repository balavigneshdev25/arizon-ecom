import axios from "axios";

const connection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    "Content-Type": "application/json",
    "Sec-Fetch-Mode": "cors",
  },
});

connection.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

connection.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;

    const errorMessage = response?.data || error.message || "An error occurred";
 
    if (response?.status === 401) {
    }

    return Promise.reject(errorMessage);
  }
);

export default connection;
