import { Request, Response } from 'express';
import { productService } from '../../../services/products/products.service';

export async function createProduct(req: Request, res: Response) {
  const { name, price } = req.body;
  try {
    await productService.createProduct({name, price, image: 'a'});
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({ msg: e.message || 'Erro no sistema, contate o administrador' });
  }
}
