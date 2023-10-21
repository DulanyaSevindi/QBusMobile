import axios from "axios";
const API_URL = process.env.API_URL;

// const BASE_URL = "http://192.168.1.2:4000";

const ApiManager = axios.create({
  baseURL: API_URL,
  responseType: "json",
  timeout: 5000,
});

export default ApiManager;
