import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

export async function getProductById(id: number) {
  try {
    const response = await ProductModel.findOne({ where: { id: id } });
    return response;
  } catch (e) {
    console.log(e);
    throw new HTTPError('Não foi possível obter o produto', 500);
  }
}
