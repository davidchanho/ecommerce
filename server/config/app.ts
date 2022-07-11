import express from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import startDB from "./startDB";
import swaggerOptions from "./swagger";
import routes from "../routes";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

// Initialize MongoDB
startDB();

// Constructs new instance of Express
const app = express();

// Parse json requests
app.use(express.json());

// Parse urlencoded requests
app.use(express.urlencoded({ extended: true }));

// Compresses requests
app.use(compression());

// Logs requests
app.use(morgan("dev"));

// Secures HTTP headers
app.use(helmet());

// Shares resources to the client
app.use(cors());

// Set up static files
app.use(express.static('assets'));

// Set up routes
app.use("/api", routes);

// Set up jsdoc swagger
expressJSDocSwagger(app)(swaggerOptions);

export default app;
