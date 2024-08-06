import { Request, Response } from "express";
import { container } from "tsyringe";
import ProductCardService from "../services/productCardService";

export default class ProductCartController {
  static async getAllCarts(_: Request, res: Response) {
    try {
      const cartService = container.resolve(ProductCardService);
      const cart = await cartService.getAllCarts();
      res.json(cart);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getCartById(req: Request, res: Response) {
    try {
      const cartService = container.resolve(ProductCardService);
      const cart = await cartService.getCartById(parseInt(req.params.id));
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      res.json(cart);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createCart(req: Request, res: Response) {
    try {
      const cartService = container.resolve(ProductCardService);
      const cart = await cartService.createCart(req.body);
      res.status(201).json(cart);
    } catch (error:any) {
      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
      }
      res.status(500).json({ error: error.message });
      
    }
  }
  static async updateCart(req: Request, res: Response) {
    try {
      const cartService = container.resolve(ProductCardService);
      const cart = await cartService.updateCart(parseInt(req.params.id), req.body);
      res.json(cart);
    } catch (error:any) {
      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
      }
      res.status(500).json({ error: error.message });
      
    }
  }
  static async deleteCart(req: Request, res: Response) {
    try {
      const cartService = container.resolve(ProductCardService);
      await cartService.deleteCart(parseInt(req.params.id));
      res.status(204).send();
    } catch (error:any) {
      if (error.message === 'Cart not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
}
