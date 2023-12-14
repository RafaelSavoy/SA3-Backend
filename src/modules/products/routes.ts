import { Router } from 'express';
import {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct
} from './controllers/';
import { verifyAdmin } from '../../services/middlewares/verifyAdmin';

const productRoutes = Router();

productRoutes.get('/', getProducts);

productRoutes.post('/create', verifyAdmin, createProduct);

productRoutes.put('/:id', verifyAdmin, editProduct);

productRoutes.delete('/:id', verifyAdmin, deleteProduct);

export { productRoutes };
