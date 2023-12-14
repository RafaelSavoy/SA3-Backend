import { Router } from 'express';
import { productRoutes } from './modules/products/routes';
import { userRoutes } from './modules/user/routes';

const router = Router();

router.use('/user', userRoutes);

router.use('/products', productRoutes);

export { router };
