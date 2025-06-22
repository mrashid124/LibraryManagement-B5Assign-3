import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import { config } from "dotenv";
import config  from "./config";
import routes from "./routes/routes";




const app = express()

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;



app.get("/", (req, res)=>{
    res.send({success: true, message: " Welcome to Database server."});
})

app.use(routes);

app.listen(config.port, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


async function server(){
try {
    await mongoose.connect(config.database_url!);
    // await mongoose.connect("mongodb://localhost:27017/");


    console.log(`connected to DATABASE`);
} catch (error) {
    console.error(`Server error ${error}`);
    process.exit(1);
}
}
server();