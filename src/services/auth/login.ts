import { HTTPError } from '../errors/httpError';
import { tokenServices } from '../token/token.services';
import { userServices } from '../user/user.service';

export interface LoginRequestData {
  email: string;
  password: string;
}

export async function login(data: LoginRequestData) {
  const user = await userServices.getUser(data.email);
  if (!user || !(await user.checkPassword(data.password))) {
    throw new HTTPError('Email ou senha incorretos', 401);
  }
  const userData = userServices.getUserData(user);
  const token = await tokenServices.createToken(userData);
  return { userData, token };
}
