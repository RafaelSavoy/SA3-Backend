import { Request, Response } from 'express';
import { productService } from '../../../services/products/products.service';

export async function editProduct(req: Request, res: Response) {
  const { id, name, price } = req.body;
  try {
    await productService.editProduct({ id, name, price });
    res.status(200).json({ message: 'Produto editado com sucesso' });
  } catch (e: any) {
    res.status(e.code || 500).json({
      msg: e.message || 'Erro desconhecido, contate o administrador.'
    });
  }
}
