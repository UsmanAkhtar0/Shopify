import mongoose from "mongoose";
import Product from "../models/Product.js";
import initData from "./data.js"
import dotenv from "dotenv";

dotenv.config();

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("Database Error", err);
});



async function main() {
    await mongoose.connect(process.env.ATLASS_URL);
    // console.log(process.env.ATLAS_URL);
}

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(initData.data).then(() => {
        console.log("Data was initialise");
    }).catch((err) => {
        console.log("Initialisation error", err);
    })
}

initDB();