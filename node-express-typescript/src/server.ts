import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import type { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";
import ErrorLogger from "./middleware/ErrorLogger";

// Routes

dotenv.config();

const app: Express = express();

const allowedOrigins: string[] = [
  "http://localhost:3000",
  "http://localhost:3001",
];

app.use(
  cors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ErrorLogger);
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

console.log("Starting server...");

const port = process.env.PORT || 8081;

app.listen(port, async () => {
  console.log(`App running on port ${port}.....`);
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failed. Exiting...");
    process.exit(1);
  }
});

process.on("uncaughtException", (err: Error) => {
  console.error("There was an uncaught error", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: unknown, promise: Promise<any>) => {
  console.error("Unhandled rejection at:", promise, "reason:", reason);
});
