"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRepository_1 = __importDefault(require("../repositories/productRepository"));
const tsyringe_1 = require("tsyringe");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAllProducts() {
        return await this.productRepository.findAll();
    }
    async getProductById(id) {
        return await this.productRepository.findById(id);
    }
    async getProductsByUserId(userId) {
        return await this.productRepository.findByUserId(userId);
    }
    async createProduct(product) {
        try {
            return await this.productRepository.create(product);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    //actualizar un producto
    async updateProduct(id, product) {
        try {
            return await this.productRepository.update(id, product);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    //eliminar productos
    async deleteProduct(id) {
        try {
            await this.productRepository.delete(id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    //habilitar un prodcuto
    async enableProduct(id) {
        try {
            return await this.productRepository.setEstate(id, true);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    //deshabilitar un producto
    async disableProduct(id) {
        try {
            return await this.productRepository.setEstate(id, false);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
ProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(productRepository_1.default)),
    __metadata("design:paramtypes", [productRepository_1.default])
], ProductService);
exports.default = ProductService;
