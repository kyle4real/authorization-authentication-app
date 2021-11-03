import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "colors";

import errorHandler from "./middleware/error.js";

dotenv.config({ path: "./config/config.env" });

// Route Imports
import usersRoutes from "./routes";
import productsRoutes from "./routes";
import customersRoutes from "./routes";
import salesRoutes from "./routes";

connectDB();
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

const api = "/api/v1";
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/customers`, customersRoutes);
app.use(`${api}/sales`, salesRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`.green.bold);
});
// Handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
    console.log(`Error: ${error.message}`.red.bold);
    // Close server and exit process
    server.close(() => process.exit(1));
});
