"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    static async getAllProducts(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const products = await productService.getAllProducts();
        res.json(products);
    }
    static async getProductById(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }
    static async getProductsByUserId(req, res) {
        const productService = tsyringe_1.container.resolve(productService_1.default);
        const products = await productService.getProductsByUserId(parseInt(req.params.userId));
        res.json(products);
    }
    static async createProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    //actualizar un producto y manejar los erros de las validaciones
    static async updateProduct(req, res) {
        try {
            const productService = tsyringe_1.container.resolve(productService_1.default);
            const user = await productService.updateProduct(parseInt(req.params.id), req.body);
            res.json(user);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async deleteProduct(req, res) {
        try {
            const userProduct = tsyringe_1.container.resolve(productService_1.default);
            await userProduct.deleteProduct(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            if (error.message === 'Product not found') {
                res.status(404).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: error.message });
            }
        }
    }
}
exports.default = ProductController;
