import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

export async function getProducts(): Promise<ProductModel[]> {
  try {
    return await ProductModel.findAll();
  } catch (e) {
    throw new HTTPError('Erro ao recuperar os produtos', 500);
  }
}
