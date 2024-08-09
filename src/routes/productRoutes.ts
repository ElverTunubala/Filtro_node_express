import { Router } from 'express';
import ProductController from '../controllers/productController';
import { authenticateJWT, authorize } from '../middleware/auth';

export const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts);
// productRouter.get('/:id', ProductController.getProductById);
productRouter.get('/user/:userId', ProductController.getProductsByUserId); //obtiene todos los productos relazionados con es id del usuario
productRouter.post('/', ProductController.createProduct);
productRouter.put('/:id',ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);
productRouter.post('/:id/enable', ProductController.enableProduct); //habilita productos
productRouter.post('/:id/disable', ProductController.disableProduct); //deshabilita productos

productRouter.get('/:id', authenticateJWT, authorize('Product', 'canGet'), ProductController.getProductById);

