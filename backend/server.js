const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { dbconnection } = require("./database/dbconnection.js");
const User = require("./models/User.js")
// import {router} from "./controllers/userController.js";

const app = express();
dotenv.config({ path: "./config/config.env" });
dbconnection();

// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ['GET', 'POST'],
//     credentials: true,
// }));

app.use(cors({
    origin: 'http://localhost:3001'
  }));
  

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("home api running");
});
app.get("/login", async (req, res) => {
    console.log("Reached api");
    const username  = req.query.username;
    const password = req.query.password;
    console.log(username);
    try {
        const user = await User.findOne({ username: username });
        console.log("I think user found");
      
        if (!user) {

            res.status(404).json({ message: "User not found." });
        }
       else{
         // const isPasswordValid = await bcrypt.compare(password, user.password);
         if (password !== user.password) {
                    
            // Password is incorrect, send error response
            return res.status(401).json({ message: "Invalid password." });
        }
       else{
        res.status(200).json({ message: "Logged in successfully.", user });
       }
       }
    } catch (error) {
        // Handle any server error
        res.status(500).json({ message: "Internal server error." });
    }
});


const userController = require("./controllers/userController.js");



app.use("/" , require("./controllers/userController.js"));




// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
