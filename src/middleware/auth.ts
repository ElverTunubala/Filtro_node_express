import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { Permission } from '../models/permissions';
import { Entity } from '../models/entity';

const secret = "your_jwt_secret";

// Define el tipo de acción que puede tener un permiso
type Action = "canCreate" | "canUpdate" | "canDelete" | "canGet";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user as User;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const authorize = (entityName: string, action: Action) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        // Verificamos la existencia de req.user antes de acceder a req.user.id.
        if (!req.user) {
          return res.sendStatus(403); // Forbidden
        }
      
        // Buscamos la entidad por su nombre
        const entity = await Entity.findOne({ where: { name: entityName } });
        if (!entity) {
          return res.sendStatus(403); // Forbidden
        }
      
        // Buscamos al usuario y sus permisos asociados a la entidad encontrada
        const user: User | null = await User.findByPk(req.user.id, {
          include: [{
            model: Permission,
            where: { entityId: entity.id }
          }]
        });
  
        // Verificamos si el usuario, su rol y permisos existen
        if (user && user.role && user.role.permissions) {
          // Buscamos el permiso específico para la entidad
          const permission = user.role.permissions.find(p => p.entityId === entity.id);
          if (permission && permission[action]) {
            next(); // Permiso concedido, continuamos con la solicitud
          } else {
            res.sendStatus(403); // Forbidden, no tiene el permiso necesario
          }
        } else {
          res.sendStatus(403); // Forbidden, usuario o permisos no encontrados
        }
      } catch (error) {
        console.error('Error in authorization middleware:', error);
        res.sendStatus(500); // Internal Server Error
      }
    };
  };
  
