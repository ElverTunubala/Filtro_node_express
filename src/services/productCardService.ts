import { injectable, inject } from "tsyringe";
import ProductCartRepository from "../repositories/productCartRepository";
import { ProductCart } from "../models";

@injectable()
export default class ProductCardService {
  constructor(@inject(ProductCartRepository) 
  private productCardRepository: ProductCartRepository) {}

  async getAllCarts() {
    return await this.productCardRepository.findAll();
  }

  async getCartById(id: number) {
    try {
      return await this.productCardRepository.findById(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

    async createCart(cart: Partial<ProductCart>) {
    try {
      return await this.productCardRepository.create(cart);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async updateCart(id: number, cart: Partial<ProductCart>) {
    try {
      return await this.productCardRepository.update(id, cart);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async deleteCart(id: number) {
    try {
      await this.productCardRepository.delete(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}

