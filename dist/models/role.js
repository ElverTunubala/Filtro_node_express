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
exports.Rol = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
let Rol = class Rol extends sequelize_typescript_1.Model {
};
exports.Rol = Rol;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false,
        validate: { notEmpty: { msg: "Name is required" },
            len: { args: [10, 200],
                msg: "Name must be between 10 and 200 characters long"
            }
        }
    }),
    __metadata("design:type", String)
], Rol.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_1.User),
    __metadata("design:type", Array)
], Rol.prototype, "users", void 0);
exports.Rol = Rol = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "roles", timestamps: false }) // Con false Sequelize ya no maneje los timestamps automáticamente
], Rol);
