"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("../modules/book/book.routes"));
const borrow_routes_1 = __importDefault(require("../modules/borrow/borrow.routes"));
const connectDB_1 = require("../connectDB/connectDB");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// middleware
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)();
        next();
    }
    catch (error) {
        console.error("Database connection error:", error.message);
        res.status(500).json({ message: "Database connection failed", success: false, error: error.message });
    }
}));
app.use("/api/books", book_routes_1.default);
app.use("/api/borrow", borrow_routes_1.default);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to  Library Management API.");
});
app.use((err, req, res, next) => {
    console.error("Server error:", err);
    res.status(500).json({ message: "Something went wrong", success: false, error: err.message });
});
exports.default = app;
