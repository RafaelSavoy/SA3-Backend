import jwt from 'jsonwebtoken';
import { PRIVATE } from '../../utils/config';
import { HTTPError } from '../errors/httpError';

interface Decoded {
  email: string;
  firstName: string;
  lastName: string;
}

export async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, PRIVATE) as Decoded;
    return decoded;
  } catch (error: any) {
    throw new HTTPError('Token inválido', 401);
  }
}
