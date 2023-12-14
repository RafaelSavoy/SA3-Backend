import { app } from '../../app';
import request from 'supertest';
import {
  closeTestDatabase,
  initTestDatabase,
  testUser
} from '../../utils/test.utils';

describe('login route', () => {
  const { email, password } = testUser;

  beforeAll(async () => {
    await initTestDatabase();
  }, 30000);

  afterAll(async () => {
    await closeTestDatabase();
  });

  it('should be return 401 to unexistent user', async () => {
    const response = await request(app).post('/user/login').send({
      email,
      password
    });
    expect(response.status).toBe(401);
  });

  it('should not be possible to register user with a invalid password', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        password: 'pass'
      });
    expect(response.status).toBe(400);
  });

  it('should not be possible to register user with a invalid email', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        email: 'email123'
      });
    expect(response.status).toBe(400);
  });

  it('should not be possible to register user without firstName', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        firstName: null
      });
    expect(response.status).toBe(400);
  });

  it('should not be possible to register user without lastName', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        lastName: null
      });
    expect(response.status).toBe(400);
  });

  it('should not be possible to register user without email', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        email: null
      });
    expect(response.status).toBe(400);
  });

  it('should not be possible to register user without password', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        ...testUser,
        password: null
      });
    expect(response.status).toBe(400);
  });

  it('should be possible register a user', async () => {
    const response = await request(app).post('/user/register').send(testUser);
    const { body } = response;
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('userData');
    expect(body.userData).toHaveProperty('id');
    expect(body.userData).toHaveProperty('firstName');
    expect(body.userData).toHaveProperty('lastName');
    expect(body.userData).toHaveProperty('email');
  });

  it('should not be possible register a existent user', async () => {
    const response = await request(app).post('/user/register').send(testUser);
    expect(response.status).toBe(409);
  });

  it('should be possible login a user', async () => {
    const response = await request(app).post('/user/login').send({
      email,
      password
    });
    const { body } = response;
    expect(response.status).toBe(200);
    expect(body).toHaveProperty('token');
    expect(body).toHaveProperty('userData');
    expect(body.userData).toHaveProperty('id');
    expect(body.userData).toHaveProperty('firstName');
    expect(body.userData).toHaveProperty('lastName');
    expect(body.userData).toHaveProperty('email');
  });

  it('should not be possible to login user with a wrong password', async () => {
    const response = await request(app).post('/user/login').send({
      email,
      password: 'wrongpassword123@'
    });
    expect(response.statusCode).toBe(401);
  });

  it('should not be possible to login user with a wrong email', async () => {
    const response = await request(app).post('/user/login').send({
      email: 'wrong@email.com',
      password
    });
    expect(response.statusCode).toBe(401);
  });

  it('should not be possible to validate user without token', async () => {
    const response = await request(app).get('/user/');
    expect(response.statusCode).toBe(401);
  });
});
