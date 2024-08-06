import { Router } from 'express';
import ProductCartController from '../controllers/productCardController'

export const productCartRouter = Router();

productCartRouter.get('/', ProductCartController.getAllCarts);
productCartRouter.get('/:id', ProductCartController.getCartById);
productCartRouter.post('/', ProductCartController.createCart);
productCartRouter.put('/:id', ProductCartController.updateCart);
productCartRouter.delete('/:id', ProductCartController.deleteCart);
