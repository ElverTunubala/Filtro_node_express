"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCartRouter = void 0;
const express_1 = require("express");
const productCardController_1 = __importDefault(require("../controllers/productCardController"));
exports.productCartRouter = (0, express_1.Router)();
exports.productCartRouter.get('/', productCardController_1.default.getAllCarts);
exports.productCartRouter.get('/:id', productCardController_1.default.getCartById);
exports.productCartRouter.post('/', productCardController_1.default.createCart);
exports.productCartRouter.put('/:id', productCardController_1.default.updateCart);
exports.productCartRouter.delete('/:id', productCardController_1.default.deleteCart);
