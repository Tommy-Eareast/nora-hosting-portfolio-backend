import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import eventPostRoutes from "./routes/eventPosts.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/eventposts", eventPostRoutes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await mongoose.connect(CONNECTION_URL);
        app.listen(PORT, () =>
            console.log(`✅ Server running on port: ${PORT}`)
        );
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

startServer();
