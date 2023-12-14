import { Router } from 'express';
import { login, register } from './controllers';
import { validate } from './controllers/validate';

const userRoutes = Router();

userRoutes.post('/register', register);

userRoutes.post('/login', login);

userRoutes.get('/', validate);

export { userRoutes };
