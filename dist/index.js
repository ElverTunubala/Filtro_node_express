"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "reflect-metadata";
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const Router_1 = __importDefault(require("./routes/Router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//configuracion del cors
app.use((0, cors_1.default)());
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
//
app.use(express_1.default.json());
app.use("/api", Router_1.default);
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Database connected!");
        await db_1.default.sync();
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
// npx tsc   poner a correr esto para crear la carpeta dist 
startServer();
