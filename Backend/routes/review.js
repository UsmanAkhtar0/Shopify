import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.post("/:id", async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(400).json({ message: "product not found" })
        }

        const review = {
            user: req.user._id,
            name: req.user.username,
            rating: Number(rating),
            comment,
        }

        product.review.push(review);

        //Average rating
        product.rating = product.review.reduce((acc, item) => acc +  item.rating, 0) / product.review.length

        product.save();

        res.status(201).json({ message: "review added", product })

    } catch (error) {
        res.status(401).json({ error: error.message })
    }
})

export default router;