import { Request, Response } from 'express';
import { productService } from '../../../services/products/products.service';

export async function getProducts(req: Request, res: Response) {
  try {
    const response = await productService.getProducts();
    res.status(200).json({ products: response });
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({
        msg: e.message || 'Erro desconhecido, contato o administrador.'
      });
  }
}
