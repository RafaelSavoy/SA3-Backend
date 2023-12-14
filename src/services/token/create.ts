import jwt from 'jsonwebtoken';
import { PRIVATE } from '../../utils/config';
import { HTTPError } from '../errors/httpError';

interface CreateTokenProps {
  email: string;
  firstName: string;
  lastName: string;
}

export async function createToken({
  email,
  firstName,
  lastName
}: CreateTokenProps) {
  try {
    return jwt.sign({ email, firstName, lastName }, PRIVATE, {
      expiresIn: '1d'
    });
  } catch (e) {
    console.log(
      'Erro ao criar token, verifique se a chave PRIVATE está configurada.'
    );
    throw new HTTPError(
      'Erro interno, contate o administrador do sistema',
      500
    );
  }
}
