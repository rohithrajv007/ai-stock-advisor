# ai-stock-advisor
# 💬 AI Chatbot using LangChain, Flask (Backend) & React (Frontend)

This is a full-stack AI chatbot application powered by OpenAI and LangChain for intelligent responses. The backend is built with Flask, and the frontend uses React with Vite.

## ⚙️ Features

- 🔗 Integrates **LangChain** with **OpenAI GPT**.
- 🔍 Supports **search-based** and **custom prompt** querying.
- 📦 Backend: Flask API that handles `ask`, `enquiry`, and `alert` routes.
- 💻 Frontend: React interface for smooth user interaction.
- 💬 Chat-like UI with real-time responses.
## 📸 Screenshots

### 🚨 Alert Page
![Ask AI](./screenshots/Screenshot%202025-07-21%20115856.png)


###  🧠 Ask AI Page
![Enquiry](./screenshots/Screenshot%202025-07-21%20120245.png)

### 📩 UI PAGE
![Alert](./screenshots/Screenshot%202025-07-21%20122004.png)

### 📋 Flask Server Running
![Flask Server](./screenshots/Screenshot%202025-07-21%20122015.png)

## 📁 Project Structure
AI-Stock-Advisor/
│
├── app.py                    # Flask backend entry point
├── chatbot.py                # LangChain logic for restricted AI responses
├── price_checker.py          # Handles price alert checking
├── alerts.json               # JSON file to store user-defined alerts
├── send_email.py             # Email logic to notify users (via Gmail)
├── .env                      # API keys: OpenAI & Gmail credentials
├── requirements.txt          # Python dependencies
│
│
├── frontend/                 # React frontend (Vite)
│   ├── public/
│   │   └── index.html        # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatbotForm.jsx   # Ask AI chatbot component
│   │   │   └── AlertForm.jsx     # Set stock price alert component
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── api.js              # Axios configuration to call Flask API
│   └── package.json            # NPM dependencies & scripts
│
└── README.md

