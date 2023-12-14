import { createProduct } from './createProduct';
import { getProducts } from './getProducts';
import { editProduct } from './editProduct';
import { deleteProduct } from './deleteProduct';
import { getProductById } from './getProductById';

export const productService = {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct,
  getProductById
};
