import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { dbconnection } from "./database/dbconnection.js";
const app = express();
dotenv.config({path:"./config/config.env"}) 

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET', 'POST'],
    credentials:true,
}));

 app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extented:true}));

// app.use(
//     fileUpload({
//     useTempFiles:true,
//     tempFileDir:"/tmp/",
// })
// );
dbconnection();
export default app;
