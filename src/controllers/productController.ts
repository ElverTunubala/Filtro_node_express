// src/controllers/ProductController.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProductService from '../services/productService';

export default class ProductController {
    static async getAllProducts(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getAllProducts();
        res.json(products);
    }

    static async getProductById(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(req.params.id));
        res.json(product);
    }

    static async getProductsByUserId(req: Request, res: Response) {
        const productService = container.resolve(ProductService);
        const products = await productService.getProductsByUserId(parseInt(req.params.userId));
        res.json(products);
    }

    static async createProduct(req: Request, res: Response) {
        try{
            const productService = container.resolve(ProductService);
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        }
        catch (error:any) {
            if (error.name === 'SequelizeValidationError') {
              return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
            }
            res.status(500).json({ error: error.message });
            
          }
        
    }
    //actualizar un producto y manejar los erros de las validaciones
    static async updateProduct(req: Request, res: Response) {
        try {
          const productService = container.resolve(ProductService);
          const user = await productService.updateProduct(parseInt(req.params.id), req.body);
          res.json(user);
        } catch (error:any) {
          if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ errors: error.errors.map((e: any) => e.message) });
          }
          res.status(500).json({ error: error.message });
          
        }
    }

    static async deleteProduct(req: Request, res: Response) {
      try {
        const userProduct = container.resolve(ProductService);
        await userProduct.deleteProduct(parseInt(req.params.id));
        res.status(204).send();
      } catch (error:any) {
        if (error.message === 'Product not found') {
          res.status(404).json({ message: error.message });
        } else {
          res.status(500).json({ message: error.message });
        }
      }
    }
}
