"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
let ProductRepository = class ProductRepository {
    //obtener todos los productos
    async findAll() {
        return await models_1.Product.findAll();
    }
    //obtener un producto por id
    async findById(id) {
        return await models_1.Product.findByPk(id);
    }
    //obtener productos relazionados con ese id
    async findByUserId(userId) {
        return await models_1.Product.findAll({ where: { userId } });
    }
    // crear productos
    async create(product) {
        return await models_1.Product.create(product);
    }
    //actualización de productos
    async update(id, product) {
        const productToUpdate = await models_1.Product.findByPk(id);
        if (!productToUpdate) {
            throw new Error('Product not found');
        }
        return await productToUpdate.update(product);
    }
    //eliminacion de productos
    async delete(id) {
        const productToDelete = await models_1.Product.findByPk(id);
        if (!productToDelete) {
            throw new Error('User not found');
        }
        return await productToDelete.destroy();
    }
    //metodo para habilitar/inhabilitar productos
    async setEstate(id, state) {
        const productToUpdate = await models_1.Product.findByPk(id);
        if (!productToUpdate) {
            throw new Error('Product not found');
        }
        productToUpdate.state = state;
        return await productToUpdate.save();
    }
};
ProductRepository = __decorate([
    (0, tsyringe_1.injectable)() //Significa que la clase es un servicio que puede ser inyectado
], ProductRepository);
exports.default = ProductRepository;
/**
 * CreationAttributes<Product> es un tipo que representa los atributos que se pueden pasar a la función create de un modelo de Sequelize.
 */
