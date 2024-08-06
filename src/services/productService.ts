import ProductRepository from '../repositories/productRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Product } from '../models';

@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async getProductsByUserId(userId: number) {
        return await this.productRepository.findByUserId(userId);
    }

    async createProduct(product: CreationAttributes<Product>) {
        try{
            return await this.productRepository.create(product);
        }catch (error:any) {
            throw new Error(error.message);
        }
    }
    //actualizar un producto
    async updateProduct(id: number, product: CreationAttributes<Product>) {
        try {
          return await this.productRepository.update(id, product);
        } catch (error:any) {
          throw new Error(error.message);
        }
    }
    //eliminar productos
    async deleteProduct(id: number) {
        try {
          await this.productRepository.delete(id);
        } catch (error:any) {
          throw new Error(error.message);
        }
    }
    //habilitar un prodcuto
    async enableProduct(id: number) {
     try {
      return await this.productRepository.setEstate(id, true);
     } catch (error:any) {
      throw new Error(error.message);
     }
    }
    //deshabilitar un producto
    async disableProduct(id: number) {
     try {
      return await this.productRepository.setEstate(id, false);
     } catch (error:any) {
      throw new Error(error.message);
     }
    }
}
