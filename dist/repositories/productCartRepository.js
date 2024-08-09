"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_1 = require("../models/user");
const productCard_1 = require("../models/productCard");
let ProductCartRepository = class ProductCartRepository {
    //busqueda de todos las compras carrito
    async findAll() {
        return await productCard_1.ProductCart.findAll();
    }
    //busqueda de una sola compra carrito
    async findById(id) {
        return await productCard_1.ProductCart.findByPk(id);
    }
    //creacion de una compra carrito
    async create(user) {
        return await productCard_1.ProductCart.create(user);
    }
    //actualización de compras carrito
    async update(id, compra) {
        const userToUpdate = await productCard_1.ProductCart.findByPk(id);
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        return await userToUpdate.update(compra);
    }
    //eliminacion de compras carrito
    async delete(id) {
        const userToDelete = await user_1.User.findByPk(id);
        if (!userToDelete) {
            throw new Error('User not found');
        }
        return await userToDelete.destroy();
    }
};
ProductCartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductCartRepository);
exports.default = ProductCartRepository;
