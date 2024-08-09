// src/types/express.d.ts
import { User } from '../models/user'; // Ajusta la ruta según tu estructura de proyecto

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
