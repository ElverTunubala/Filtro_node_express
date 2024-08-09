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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
const productCard_1 = require("./productCard");
let Order = class Order extends sequelize_typescript_1.Model {
};
exports.Order = Order;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => productCard_1.ProductCart),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Order.prototype, "productCardId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DECIMAL(10, 2), allowNull: false,
        validate: { notNull: { msg: "total is required" } }
    }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false,
        validate: {
            notEmpty: { msg: "description is required" },
            len: {
                args: [8, 300],
                msg: "description must be between 8 and 300 characters long",
            },
        },
    }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.User),
    __metadata("design:type", user_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => productCard_1.ProductCart),
    __metadata("design:type", productCard_1.ProductCart)
], Order.prototype, "productCart", void 0);
exports.Order = Order = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "orders", timestamps: true, })
], Order);
