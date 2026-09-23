import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String }
    },
    { timestamps: true }
);

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String },
        review: [reviewSchema],
        rating: { type: Number, default: 4 }
    },
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema);

export default Product;