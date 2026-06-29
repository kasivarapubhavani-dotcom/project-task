import axios from "axios";

const API = axios.create({
    baseURL: "https://local-service-task-backend.onrender.com/api",
});

export default API;