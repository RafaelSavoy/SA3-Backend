import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

interface CreateProductRequest {
  name: string;
  price: number;
  image: string;
}

export async function createProduct(
  productData: CreateProductRequest
): Promise<ProductModel> {
  try {
    return await ProductModel.create(productData);
  } catch (e) {
    throw new HTTPError('Erro interno ao criar produto', 500);
  }
}
