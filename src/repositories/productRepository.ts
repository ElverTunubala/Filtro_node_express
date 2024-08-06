import { injectable } from 'tsyringe';
import { Product } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() //Significa que la clase es un servicio que puede ser inyectado
export default class ProductRepository {

    //obtener todos los productos
    async findAll() {
        return await Product.findAll();
    }
    //obtener un producto por id
    async findById(id: number) {
        return await Product.findByPk(id);
    }
    //obtener productos relazionados con ese id
    async findByUserId(userId: number) {
        return await Product.findAll({ where: { userId } });
    }
    // crear productos
    async create(product: CreationAttributes<Product>) {
        return await Product.create(product);
    }
    //actualización de productos
    async update(id: number, product: CreationAttributes<Product>) {
        const productToUpdate = await Product.findByPk(id);
        if (!productToUpdate) {
            throw new Error('Product not found');
        }
        return await productToUpdate.update(product);
    }
    //eliminacion de productos
    async delete(id: number) {
        const productToDelete = await Product.findByPk(id);
        if (!productToDelete) {
            throw new Error('User not found');
        }
        return await productToDelete.destroy();
    }
    //metodo para habilitar/inhabilitar productos

    async setEstate(id: number, state: boolean) {
        const productToUpdate = await Product.findByPk(id);
        if (!productToUpdate) {
            throw new Error('Product not found');
        }
        productToUpdate.state = state;
        return await productToUpdate.save();
    }

}

/**
 * CreationAttributes<Product> es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 */
