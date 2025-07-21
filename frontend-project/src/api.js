import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Backend Flask URL
});

export const askChatbot = (query) =>
  API.post("/chatbot", { query });

export const setPriceAlert = (stock, target_price, email) =>
  API.post("/alert", { stock, target_price, email });
