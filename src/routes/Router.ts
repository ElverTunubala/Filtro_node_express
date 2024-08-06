import { Router } from 'express';
import {userRouter, productRouter, orderRouter} from './';
import { authRouter } from './authRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/orders', orderRouter);
router.use('/products/cards', orderRouter);

export default router;
