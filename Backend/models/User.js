import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: { type: String, require: true },
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    { timestamps: true }
)
const User = mongoose.model("User", userSchema);

export default User;