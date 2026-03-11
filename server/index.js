import express from "express";
import router from "./routes/productRoutes.js";
import { connectDB } from "./db/index.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectDB()
const app = express();

app.use(cors());

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use('/api', router)

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};
startServer();
