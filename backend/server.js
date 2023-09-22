import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user_Routes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT;

// Middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie-parser Middleware
app.use(cookieParser());

// API ROUTES
app.use("/api/users/", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Error handling middle wares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
