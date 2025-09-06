import express from "express"
import User from "../models/User.js"

const router = express.Router();

// Register
router.post("/register", async (req, res) => {

    try {
        const { fullname, username, password } = req.body;
        const isUser = await User.findOne({ username });
        if (isUser) {
            return res.status(409).json({ message: "User already exist" });
        }
        const bcrypt = await import("bcryptjs");
        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ fullname, username, password: hashPassword });

        return res.json({ message: "User registeerd successfully" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not exist" });
        }

        const bcrypt = await import("bcryptjs");
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password" })
        }

        // Jwt
        const { default: jwt } = await import("jsonwebtoken");
        const token = jwt.sign({ id: user._id }, "my_super_secret", { expiresIn: "1d" });

        // Send Cookie - currently it is not in use
        res.cookie("token", token, {
            httpOnly: true, // for security through js it is inaccesiable
            secure: true,  // for production make it true for better https security
            // sameSite: "strict"
        })

        res.json({ message: "Login successfull", token, user: { id: user._id, username: username, role: user.role } });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// logout
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
})

export default router;