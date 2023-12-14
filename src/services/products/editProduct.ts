import { ProductModel } from '../../database/models/Product.model';
import { HTTPError } from '../errors/httpError';

interface EditProductRequest {
  id: number;
  name: string;
  price: number;
}

export async function editProduct(product: EditProductRequest) {
  try {
    return await ProductModel.update(
      { name: product.name, price: product.price },
      { where: { id: product.id } }
    );
  } catch (e) {
    throw new HTTPError('Erro ao edtiar os produto', 500);
  }
}
