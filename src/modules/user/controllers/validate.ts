import { Request, Response } from 'express';
import { authServices } from '../../../services/auth/auth.services';

export async function validate(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const response = await authServices.validate(token);
    res.status(200).json(response);
  } catch (e: any) {
    res
      .status(e.code || 500)
      .json({ msg: e.message || 'Erro no sistema, contate o administrador' });
  }
}
