import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://MyMemoryApp:mymemoryapp@mycluster.eaametj.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(CONNECTION_URL);
    app.listen(PORT, () => console.log(`✅ Server running on port: ${PORT}`));
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

startServer();