"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const auth_1 = require("../middleware/auth");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', productController_1.default.getAllProducts);
// productRouter.get('/:id', ProductController.getProductById);
exports.productRouter.get('/user/:userId', productController_1.default.getProductsByUserId); //obtiene todos los productos relazionados con es id del usuario
exports.productRouter.post('/', productController_1.default.createProduct);
exports.productRouter.put('/:id', productController_1.default.updateProduct);
exports.productRouter.delete('/:id', productController_1.default.deleteProduct);
exports.productRouter.post('/:id/enable', productController_1.default.enableProduct); //habilita productos
exports.productRouter.post('/:id/disable', productController_1.default.disableProduct); //deshabilita productos
exports.productRouter.get('/:id', auth_1.authenticateJWT, (0, auth_1.authorize)('Product', 'canGet'), productController_1.default.getProductById);
