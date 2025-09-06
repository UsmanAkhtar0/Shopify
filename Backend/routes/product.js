import express from "express";
import Product from "../models/Product.js";


const router = express.Router();

// All Product
router.get("/", async (req, res) => {

    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Unable to fetch Data" })
    }
})

// Searched Products
router.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { brand: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
            ]
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Server errorrrr" })
    }
});

// Only one project
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(400).json({ error: "Product not exist" })
        return res.json(product);
    } catch (error) {
        res.status(500).json({ error: "unable to fetch data" });
    }
});



export default router;