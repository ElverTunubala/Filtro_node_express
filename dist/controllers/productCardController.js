"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productCardService_1 = __importDefault(require("../services/productCardService"));
class ProductCartController {
    static async getAllCarts(_, res) {
        try {
            const cartService = tsyringe_1.container.resolve(productCardService_1.default);
            const cart = await cartService.getAllCarts();
            res.json(cart);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getCartById(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(productCardService_1.default);
            const cart = await cartService.getCartById(parseInt(req.params.id));
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            res.json(cart);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(productCardService_1.default);
            const cart = await cartService.createCart(req.body);
            res.status(201).json(cart);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async updateCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(productCardService_1.default);
            const cart = await cartService.updateCart(parseInt(req.params.id), req.body);
            res.json(cart);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async deleteCart(req, res) {
        try {
            const cartService = tsyringe_1.container.resolve(productCardService_1.default);
            await cartService.deleteCart(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            if (error.message === 'Cart not found') {
                res.status(404).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: error.message });
            }
        }
    }
}
exports.default = ProductCartController;
