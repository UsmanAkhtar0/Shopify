import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productRoute from "./routes/product.js"
import userRoute from "./routes/user.js"
import reviewRoute from "./routes/review.js"
import cookieParser from "cookie-parser";
import { authMiddleware } from "./middleware/auth.js";
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,       // For request from anywhere "*"
    credentials: true                      // allows cookies
}))

app.get("/home", (req, res) => {
    res.json("Hello Node");
});

app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/review", authMiddleware, reviewRoute);

await mongoose.connect(process.env.ATLAS_URL)
    .then(() => {
        console.log("Connected to DB")
    }).catch((err) => {
        console.log("error in connecting DB", err)
    });

app.listen(8000, () => {
    console.log("LISTENING ON PORT 8000");
});