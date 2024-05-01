import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { createServer } from "http"
import { createNotificationController } from "./src/controllers/createNotification";
import setupSocketIO from "./src/setupSocketIO";

const MONGO_URL = 'mongodb+srv://risini7248:fOrvlcEHxQv2FJON@cluster0.bxk4wya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = createServer(app);

setupSocketIO(server)

// Endpoint to create new notification
app.post('/notifications', createNotificationController);

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});