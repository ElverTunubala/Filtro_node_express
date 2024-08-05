"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "reflect-metadata";
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
// configuracion del cors
// app.use(cors());
// const corsOptions = {
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true
// };
// app.use(cors(corsOptions));
// //
// app.use(express.json());
// app.use("/api", router);
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Database connected!");
        await db_1.default.sync();
        app.listen(60000, () => {
            console.log("Server started on port 3000");
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
// npx tsc   pon a correr esto para crear la carpeta dist por si lo pide el profe
startServer();
