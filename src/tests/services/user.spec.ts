import { userServices } from '../../services/user/user.service';
import {
  closeTestDatabase,
  initTestDatabase,
  testUser
} from '../../utils/test.utils';

describe('Testing database functions', () => {
  const { email } = testUser;

  beforeAll(async () => {
    await initTestDatabase();
  }, 30000);

  afterAll(async () => {
    await closeTestDatabase();
  });

  it('should be possible to create a user', async () => {
    const response = await userServices.createUser(testUser);
    expect(response?.id).toBeTruthy();
  });
  
  it('should be possible to get a user', async () => {
    const response = await userServices.getUser(email);
    expect(response?.id).toBeTruthy();
  });
  
  it('should be possible to delete a user', async () => {
    await userServices.deleteUser(testUser.email);
    const response = await userServices.getUser(email);
    expect(response).toBeFalsy();
  });
});
