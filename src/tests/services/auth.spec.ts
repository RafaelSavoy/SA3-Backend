import { authServices } from '../../services/auth/auth.services';
import { HTTPError } from '../../services/errors/httpError';
import {
  closeTestDatabase,
  initTestDatabase,
  testUser
} from '../../utils/test.utils';

describe('Testing auth services', () => {
  const { email, password } = testUser;
  beforeAll(async () => {
    await initTestDatabase();
  }, 30000);
  afterAll(async () => {
    await closeTestDatabase();
  });
  it('should not be possible login a nonexistent user', () => {
    expect(
      async () => await authServices.login({ email, password })
    ).rejects.toThrow(HTTPError);
  });
  it('should be possible to register a user', async () => {
    const response = await authServices.register(testUser);
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('userData');
  });
  it('should not be possible to register a existent user', () => {
    expect(async () => await authServices.register(testUser)).rejects.toThrow(
      HTTPError
    );
  });
  it('should be possible to login a user', async () => {
    const response = await authServices.login({ email, password });
    expect(response).toHaveProperty('token');
    expect(response).toHaveProperty('userData');
  });
  it('not should be possible to login a user with a wrong password', async () => {
    expect(
      async () =>
        await authServices.login({
          email,
          password: 'wrongPassword'
        })
    ).rejects.toThrow(HTTPError);
  });
  it('not should be possible to login a user with a wrong email', async () => {
    expect(
      async () =>
        await authServices.login({
          email: 'wrong@email.com',
          password
        })
    ).rejects.toThrow(HTTPError);
  });
});
