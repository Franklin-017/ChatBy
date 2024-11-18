
import express from "express"
import dotenv from "dotenv"
import cors from"cors"
import cookieParser from"cookie-parser"
import mongoose from"mongoose"
import AuthRoutes from "./routes/AuthRoutes.js"

const app = express();
dotenv.config();
app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json())

app.use("/api/auth", AuthRoutes);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
    console.log("Server started at port " + port);
})

mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("DB Connected"))
        .catch(err => console.log(err.message));