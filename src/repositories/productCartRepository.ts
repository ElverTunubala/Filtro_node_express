import { injectable } from 'tsyringe';
import { User } from '../models/user';
import { ProductCart } from '../models/productCard';

@injectable()
export default class ProductCartRepository {

    //busqueda de todos las compras carrito
    async findAll() {
        return await ProductCart.findAll();
    }
    //busqueda de una sola compra carrito
    async findById(id: number) {
        return await ProductCart.findByPk(id);
    }
    //creacion de una compra carrito
    async create(user: Partial<ProductCart>) {
        return await ProductCart.create(user);
    }
    //actualización de compras carrito
    async update(id: number, compra: Partial<ProductCart>) {
        const userToUpdate = await ProductCart.findByPk(id);
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        return await userToUpdate.update(compra);
    }
    //eliminacion de compras carrito
    async delete(id: number) {
        const userToDelete = await User.findByPk(id);
        if (!userToDelete) {
            throw new Error('User not found');
        }
        return await userToDelete.destroy();
    }
}
