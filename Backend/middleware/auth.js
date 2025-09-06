import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    // If using cookies
    const token = req.cookies?.token;

    if (!token) {
        return res.status(400).json({ message: "token not found" });
    }

    jwt.verify(token, "my_super_secret", (err, decode) => {
        if (err) {
            return res.status(401).json({ message: "invalid token" })
        }

        req.user = decode; // {id, username, role}
        next();
    })
}

export const isAdmin = (req, res, next) => {
    if (req.cookies.token != "admin") {
        res.status(403).json({ message: "access denied" })
    }
    next();
}
