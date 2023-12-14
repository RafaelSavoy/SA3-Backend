import { UserModel } from '../../database/models/User.model';
import { HTTPError } from '../errors/httpError';
import { User } from './user.service';

export async function createUser(data: User): Promise<UserModel> {
  try {
    return await UserModel.create(data);
  } catch (e) {
    console.log(e);
    throw new HTTPError('Erro interno, contate o administrador.', 500);
  }
}
