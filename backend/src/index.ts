import 'dotenv/config';
import express from "express";
import cors from "cors";
import path from "path";

import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import commentRoutes from "./routes/commentRoutes";

const app = express();

// 1. Request Logger Middleware
app.use((req, res, next) => {
  console.log(`📡 [${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "API is healthy" });
});

// 2. Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("❌ BACKEND ERROR:", err.message || err);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const server = app.listen(ENV.PORT, () => {
  console.log("=========================================");
  console.log("🚀 Server is up and running on PORT:", ENV.PORT);
  console.log("=========================================");
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ UNHANDLED REJECTION DETECTED:");
  console.error(reason);
});