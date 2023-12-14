import { UserModel } from '../../database';

export function getUserData(user: UserModel) {
  const { id, firstName, lastName, email, role } = user;
  return { id: id!, firstName, lastName, email, role };
}
