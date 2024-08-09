"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const order_1 = require("../models/order");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'riwi2024',
    database: 'repaso_filtro',
    models: [models_1.User, models_1.Product, models_1.Rol, order_1.Order, models_1.ProductCart, models_1.Permission, models_1.Cart], // Añade todos tus modelos aquí es lo mismo que el nombre de las tablas
});
exports.default = sequelize;
