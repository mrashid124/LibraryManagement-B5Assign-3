import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import { config } from "dotenv";
import config from "./config";
import routes from "./routes/routes";
import { connectDB } from "./connectDB/connectDB";
import app from "./app/app";
import port from "../src/config/index";

const server = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on:${port}`);
        });
    } catch (error: any) {
        console.error("Failed to start server:", error.message);
    }
};

server();






// const app = express()

// app.use(cors());

// APPLICATION LAYER
// app.use(express.json());

// const PORT = process.env.PORT;



// app.get("/", (req, res) => {
//     res.send({ success: true, message: " Welcome to Library Management server." });
// })

// APPLICATION ROUTE
// app.use(routes);

// // app LISTENING
// app.listen(PORT, async() => {
//     console.log(`Server is running on port ${PORT}`);
//         await connectDB();
// })


// async function server() {
//     try {
//         await mongoose.connect(config.database_url!);
//         // await mongoose.connect("mongodb://localhost:27017/");


//         console.log(`connected to DATABASE`);
//     } catch (error) {
//         console.error(`Server error ${error}`);
//         process.exit(1);
//     }
// }
// server();