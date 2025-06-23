import express, { Application, NextFunction, Request, Response } from "express";
import bookRoutes from "../modules/book/book.routes";
import borrowRoutes from "../modules/borrow/borrow.routes";
import { connectDB } from "../connectDB/connectDB";


const app: Application = express();


app.use(express.json());

// middleware
app.use(async (req: Request, res: Response, next: NextFunction) => {
    try {
        await connectDB();
        next();
    } catch (error: any) {
        console.error("Database connection error:", error.message);
        res.status(500).json({ message: "Database connection failed", success: false, error: error.message });
    }
});


app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);


app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Welcome to  Library Management API.")
});



app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Server error:", err);
    res.status(500).json({ message: "Something went wrong", success: false, error: err.message });
});

export default app;