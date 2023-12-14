import { UserModel } from '../../database/models/User.model';
import { HTTPError } from '../errors/httpError';

export async function deleteUser(email: string): Promise<void> {
  try {
    await UserModel.destroy({ where: { email } });
  } catch (e) {
    console.log(e)
    throw new HTTPError('Erro interno, contate o administrador.', 500);
  }
}
