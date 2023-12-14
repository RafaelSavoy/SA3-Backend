import { Request } from 'express';
import { HTTPError } from '../errors/httpError';
import { tokenServices } from '../token/token.services';
import { userServices } from '../user/user.service';

export async function validate(token: string | undefined) {
  if (!token) {
    throw new HTTPError('Token inválido', 401);
  }
  try {
    const decoded = await tokenServices.verifyToken(token);
    const { email } = decoded;
    const user = await userServices.getUser(email);
    const userData = userServices.getUserData(user!);
    return { userData, token };
  } catch (err) {
    throw new HTTPError('Token inválido', 401);
  }
}
