import { Router } from "express";
import bookRoutes from "../modules/book/book.routes";
import borrowRoutes from "../modules/borrow/borrow.routes";

const routes = Router();

routes.use("/api/books", bookRoutes);

routes.use("/api/borrow", borrowRoutes);




export default routes;