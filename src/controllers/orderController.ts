import { Request, Response } from "express";
import { container } from "tsyringe";
import OrderService from "../services/orderService";

export default class OrderController {

  static async getAllOrder(_: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getOrderById(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const order = await orderService.getOrderById(parseInt(req.params.id));
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createOrder(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error:any) {
      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
      }
      res.status(500).json({ error: error.message });
      
    }
  }
  static async updateOrder(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      const order = await orderService.updateOrder(parseInt(req.params.id), req.body);
      res.json(order);
    } catch (error:any) {
      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
      }
      res.status(500).json({ error: error.message });
      
    }
  }
  static async deleteOrder(req: Request, res: Response) {
    try {
      const orderService = container.resolve(OrderService);
      await orderService.deleteOrder(parseInt(req.params.id));
      res.status(204).send();
    } catch (error:any) {
      if (error.message === 'Order not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
}
