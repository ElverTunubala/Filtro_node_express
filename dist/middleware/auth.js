"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const permissions_1 = require("../models/permissions");
const entity_1 = require("../models/entity");
const secret = "your_jwt_secret";
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jsonwebtoken_1.default.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticateJWT = authenticateJWT;
const authorize = (entityName, action) => {
    return async (req, res, next) => {
        try {
            // Verificamos la existencia de req.user antes de acceder a req.user.id.
            if (!req.user) {
                return res.sendStatus(403); // Forbidden
            }
            // Buscamos la entidad por su nombre
            const entity = await entity_1.Entity.findOne({ where: { name: entityName } });
            if (!entity) {
                return res.sendStatus(403); // Forbidden
            }
            // Buscamos al usuario y sus permisos asociados a la entidad encontrada
            const user = await user_1.User.findByPk(req.user.id, {
                include: [{
                        model: permissions_1.Permission,
                        where: { entityId: entity.id }
                    }]
            });
            // Verificamos si el usuario, su rol y permisos existen
            if (user && user.role && user.role.permissions) {
                // Buscamos el permiso específico para la entidad
                const permission = user.role.permissions.find(p => p.entityId === entity.id);
                if (permission && permission[action]) {
                    next(); // Permiso concedido, continuamos con la solicitud
                }
                else {
                    res.sendStatus(403); // Forbidden, no tiene el permiso necesario
                }
            }
            else {
                res.sendStatus(403); // Forbidden, usuario o permisos no encontrados
            }
        }
        catch (error) {
            console.error('Error in authorization middleware:', error);
            res.sendStatus(500); // Internal Server Error
        }
    };
};
exports.authorize = authorize;
