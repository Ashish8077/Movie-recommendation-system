
🎬 Movie Recommendation Application

This is a MERN stack based movie recommendation system that uses an AI model from Hugging Face to generate personalized movie suggestions.

🚀 Features

AI-powered movie recommendations using Hugging Face model

End-to-end MERN stack (Frontend + Backend)

Easy setup and single-command run

Production-ready frontend build



---

🛠️ Prerequisites

Before running the project locally, make sure you have:

Node.js (v16 or above)

MongoDB (local or cloud)

A free account on Hugging Face



---

🤖 Hugging Face Model Setup

This project uses the model:

openai/gpt-oss-120b:fireworks-ai

To set up the API key:

1. Go to https://huggingface.co


2. Log in or create a free account


3. Navigate to Settings → Access Tokens


4. Generate a new token


5. Copy the token and add it to your .env file as shown below.




---

📁 Environment Variables

Create a .env file in the root directory and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_url
HF_API_KEY=your_huggingface_access_token



---

📦 Installation & Setup

Run the following commands in the root directory of the project:

# 1. Install all dependencies and build the frontend
npm run build

# 2. Start the application
npm start

✅ You don’t need to run cd backend or cd frontend. Everything is handled from the global (root) folder.


---

🌐 Access the Application

Once the server is up and running, open your browser and go to:

http://localhost:3000


---

🧪 Development Notes

npm run build installs dependencies for both frontend and backend and builds the production-ready frontend.

npm start launches the backend server and serves the frontend.

Make sure MongoDB is running or that you’re using a valid cloud connection string.



---

Would you like me to also add a short “Tech Stack Used” section (e.g., React, Express, MongoDB, Hugging Face API) to make the README even more professional for interviews? 🚀
