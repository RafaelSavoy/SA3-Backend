import { UserModel } from '../../database/models/User.model';
import { HTTPError } from '../errors/httpError';

export async function getUser(email: string): Promise<UserModel | null> {
  try {
    return await UserModel.findOne({ where: { email } });
  } catch (e) {
    throw new HTTPError('Erro interno, contate o administrador.', 500);
  }
}
