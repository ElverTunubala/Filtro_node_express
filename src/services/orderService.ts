import { injectable, inject } from "tsyringe";
import { Order} from "../models/order"
import OrderRepository from "../repositories/orderRepository";

@injectable()
export default class OrderService {
  constructor(@inject(OrderRepository) 
  private orderRepository: OrderRepository) {}

  async getAllOrders() {
    return await this.orderRepository.findAll();
  }

  async getOrderById(id: number) {
    try {
      return await this.orderRepository.findById(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async createOrder(order: Partial<Order>) {
    try {
      return await this.orderRepository.create(order);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async updateOrder(id: number, order: Partial<Order>) {
    try {
      return await this.orderRepository.update(id, order);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async deleteOrder(id: number) {
    try {
      await this.orderRepository.delete(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
 
}


