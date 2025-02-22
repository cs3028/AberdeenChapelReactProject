// to start the backend:
// cd backend
// node server.js

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",  // allow frontend
    credentials: true  // Enable cookies
}));
app.use(cookieParser());

const SECRET_KEY = process.env.SECRET_KEY || "super-secure-key";  //
const validUser = { email: "sid@g.com", password: "bbills" };  // login info

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email.trim === validUser.email.trim && password.trim === validUser.password.trim) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1d" });  // secure token

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",  // change to true in production with HTTPS
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000  // cookie expires in 1 day
        });

        res.json({ success: true, message: "Logged in successfully!" });
    } else {
        console.log("Invalid credentials:");
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ success: false, message: "Invalid token" });
        req.user = decoded;
        next();
    });
};

app.get("/dashboard", verifyToken, (req, res) => {
    res.json({ success: true, message: `Welcome, ${req.user.email}`})
});

// logout route clears cookie
app.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,  // Set to true in production (HTTPS)
        sameSite: "Strict",
        path: "/",
    });
    res.status(200).json({ success: true, message: "Logged out successfully!" });
});

const PORT = process.env.PORT || 5001;  // port 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));