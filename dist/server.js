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
const connectDB_1 = require("./connectDB/connectDB");
const app_1 = __importDefault(require("./app/app"));
const index_1 = __importDefault(require("../src/config/index"));
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)();
        app_1.default.listen(index_1.default, () => {
            console.log(`Server is running on:${index_1.default}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error.message);
    }
});
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
