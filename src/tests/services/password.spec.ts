import { passwordServices } from '../../services/password/passwordService';

describe('testing password service', () => {
  let password: string = 'Password123@';
  let hashed: string = '';
  it('should not be possible compare the original with hashed password', async () => {
    const hash = await passwordServices.hashPassword(password);
    const result = password == hash;
    expect(result).toBe(false);
    hashed = hash;
  });
  it('should be possible to compare the password with the encrypted password', async () => {
    const result = await passwordServices.checkPassword(password, hashed);
    expect(result).toBe(true);
  });
  it('should not be possible compare wrong password with the hashed password', async () => {
    const result = await passwordServices.checkPassword(
      'WrongPassword123@',
      hashed
    );
    expect(result).toBe(false);
  });
});
