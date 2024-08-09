"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const orderService_1 = __importDefault(require("../services/orderService"));
class OrderController {
    static async getAllOrder(_, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const orders = await orderService.getAllOrders();
            res.json(orders);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getOrderById(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const order = await orderService.getOrderById(parseInt(req.params.id));
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async createOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const order = await orderService.createOrder(req.body);
            res.status(201).json(order);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async updateOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            const order = await orderService.updateOrder(parseInt(req.params.id), req.body);
            res.json(order);
        }
        catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ errors: error.errors.map((e) => e.message) });
            }
            res.status(500).json({ error: error.message });
        }
    }
    static async deleteOrder(req, res) {
        try {
            const orderService = tsyringe_1.container.resolve(orderService_1.default);
            await orderService.deleteOrder(parseInt(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            if (error.message === 'Order not found') {
                res.status(404).json({ message: error.message });
            }
            else {
                res.status(500).json({ message: error.message });
            }
        }
    }
}
exports.default = OrderController;
