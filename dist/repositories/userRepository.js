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
const product_1 = require("../models/product");
let UserRepository = class UserRepository {
    //busqueda de todos los usuarios
    async findAll() {
        return await user_1.User.findAll({ attributes: ['id', 'email', 'rol'] });
    }
    //busqueda de un usuario por id
    async findById(id) {
        return await user_1.User.findByPk(id);
    }
    //creacion de usuarios
    async create(user) {
        return await user_1.User.create(user);
    }
    //busqueda de un usuario por email
    async findByEmail(email) {
        return await user_1.User.findOne({ where: { email } });
    }
    //actualización de usuarios
    async update(id, user) {
        const userToUpdate = await user_1.User.findByPk(id);
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        return await userToUpdate.update(user);
    }
    //eliminacion de usuarios
    async delete(id) {
        const userToDelete = await user_1.User.findByPk(id);
        if (!userToDelete) {
            throw new Error('User not found');
        }
        return await userToDelete.destroy();
    }
    // async setEstate(id: number, estate: boolean) {
    //     const userToUpdate = await User.findByPk(id);
    //     if (!userToUpdate) {
    //         throw new Error('User not found');
    //     }
    //     userToUpdate.estate = estate;
    //     return await userToUpdate.save();
    // }
    //para consultar productos relazionados a un usuario
    async findUserWithProducts(userId) {
        return await user_1.User.findByPk(userId, { attributes: ["id", "email", "rol"],
            include: [
                {
                    model: product_1.Product,
                    attributes: ['id', 'name', 'price'] // selecciona las columnas específicas que necesitas
                }
            ]
        });
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)() // inyeccion de dependencias
], UserRepository);
exports.default = UserRepository;
