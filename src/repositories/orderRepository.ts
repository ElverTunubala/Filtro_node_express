import { injectable } from 'tsyringe';
import { User } from '../models/user';
import {Product} from '../models/product';
import {Order} from '../models/order';

@injectable()// inyeccion de dependencias
export default class OrderRepository {
    //busqueda de todos las ordenes
    async findAll() {
        return await Order.findAll( {attributes: ['id', 'email','rol']} );
    }
    //busqueda de un pedido por id
    async findById(id: number) {
        return await Order.findByPk(id);
    }
    //creacion de pedidos
    async create(order: Partial<Order>) {
        return await Order.create(order);
    }
    
    //actualización de pedidos
    async update(id: number, order: Partial<Order>) {
        const orderToUpdate = await Order.findByPk(id);
        if (!orderToUpdate) {
            throw new Error('Order not found');
        }
        return await orderToUpdate.update(order);
    }
    //eliminacion de pedidos
    async delete(id: number) {
        const orderToDelete = await Order.findByPk(id);
        if (!orderToDelete) {
            throw new Error('order not found');
        }
        return await orderToDelete.destroy();
    }
    

    // //para consultar productos relazionados a un usuario
    // async findUserWithProducts(userId: number) {
    //     return await User.findByPk(userId,{ attributes:["id","email","rol"],
    //         include: [
    //             {
    //                 model: Product,
    //                 attributes: ['id', 'name', 'price'] // selecciona las columnas específicas que necesitas
    //             }
    //         ]
    //     });
    // }
}
