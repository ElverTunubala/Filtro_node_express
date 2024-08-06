import { Router } from 'express';
import OrderController from '../controllers/orderController'

export const orderRouter = Router();

orderRouter.get('/', OrderController.getAllOrder);
orderRouter.get('/:id',OrderController.getOrderById);
orderRouter.post('/', OrderController.createOrder);
orderRouter.put('/:id', OrderController.updateOrder);
orderRouter.delete('/:id', OrderController.deleteOrder);
