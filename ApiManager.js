import axios from "axios";
const API_URL = process.env.API_URL;

const BASE_URL = "http://192.168.8.102:4000";

const ApiManager = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  timeout: 5000,
});

export default ApiManager;
