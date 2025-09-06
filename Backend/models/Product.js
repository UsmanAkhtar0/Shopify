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
        name: { type: String, require: true },
        price: { type: Number, require: true },
        brand: { type: String, require: true },
        description: { type: String },
        imageUrl: { type: String },
        review: [reviewSchema],
        rating: { type: Number, default: 4 }
    },
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema);

export default Product;