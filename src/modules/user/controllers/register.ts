import { Request, Response } from 'express';
import { authServices } from '../../../services/auth/auth.services';

export async function register(req: Request, res: Response) {
  try {
    const response = await authServices.register(req.body);
    res.status(200).json(response);
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({ msg: e.message || 'Erro no sistema, contate o administrador' });
  }
}