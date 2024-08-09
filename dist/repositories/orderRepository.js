"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const order_1 = require("../models/order");
let OrderRepository = class OrderRepository {
    //busqueda de todos las ordenes
    async findAll() {
        return await order_1.Order.findAll({ attributes: ['id', 'email', 'rol'] });
    }
    //busqueda de un pedido por id
    async findById(id) {
        return await order_1.Order.findByPk(id);
    }
    //creacion de pedidos
    async create(order) {
        return await order_1.Order.create(order);
    }
    //actualización de pedidos
    async update(id, order) {
        const orderToUpdate = await order_1.Order.findByPk(id);
        if (!orderToUpdate) {
            throw new Error('Order not found');
        }
        return await orderToUpdate.update(order);
    }
    //eliminacion de pedidos
    async delete(id) {
        const orderToDelete = await order_1.Order.findByPk(id);
        if (!orderToDelete) {
            throw new Error('order not found');
        }
        return await orderToDelete.destroy();
    }
};
OrderRepository = __decorate([
    (0, tsyringe_1.injectable)() // inyeccion de dependencias
], OrderRepository);
exports.default = OrderRepository;
