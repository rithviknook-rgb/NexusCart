# NexusCart 🛒

NexusCart is a high-performance, full-stack e-commerce application built to demonstrate modern software architecture, robust state management, and decoupled client-server communication. 

The project is structured split into a completely separate frontend consumer application and a dedicated backend service layer to simulate a real-world enterprise deployment.

## 🏗️ Architecture & Core Features

*   **Decoupled Architecture:** Built with a strict separation of concerns, utilizing an independent frontend interface communicating with a headless RESTful API backend.
*   **Dynamic Catalog System:** Designed to handle real-time data flow for fetching, rendering, and filtering structured product listings from the database.
*   **Secure API Routing:** Implements standard data serialization, cross-origin request handling, and secure cookie-based credential verification for server communication.
*   **State-Driven UI:** Features a fully reactive client interface that builds view layers dynamically based on backend server payloads.

## 🛠️ Tech Stack

*   **Frontend:** React, Vite, TypeScript/JavaScript, Axios
*   **Backend:** Node.js, Express, TypeScript (executed via ts-node)
*   **Environment & Config Management:** Managed environment injection for isolating sensitive local secrets and backend endpoints.

## 📚 Credits

This project was built while following the YouTube tutorial *"PERN Stack Course: Build a Full Stack Product Store with React and PostgreSQL"* by Codesistency.

I used the tutorial to learn the PERN stack and understand how to build a full-stack application.
