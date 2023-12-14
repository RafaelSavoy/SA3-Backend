import { HTTPError } from '../errors/httpError';
import { tokenServices } from '../token/token.services';
import { userServices } from '../user/user.service';

export interface RegisterRequestData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function register(data: RegisterRequestData) {
  const user = await userServices.getUser(data.email);
  if (user) {
    throw new HTTPError('Este email já esta sendo usado', 409);
  } else {
    try {
      const user = await userServices.createUser(data);
      const userData = userServices.getUserData(user);
      const token = await tokenServices.createToken(userData);
      return { userData, token };
    } catch (e: any) {
      throw new HTTPError(e, 400);
    }
  }
}
