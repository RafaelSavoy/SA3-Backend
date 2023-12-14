import { Sequelize } from 'sequelize-typescript';
import { UserModel, ProductModel } from '../database';
import { User } from '../services/user/user.service';

const sequelize = new Sequelize('test', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const testUser: User = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: 'password123'
};

async function initTestDatabase() {
  sequelize.addModels([UserModel, ProductModel]);
  await sequelize.sync({ force: true });
}
async function closeTestDatabase() {
  await UserModel.destroy({
    truncate: true,
    where: {}
  });
  await ProductModel.destroy({
    truncate: true,
    where: {}
  });
  await sequelize.dropSchema('test', { logging: false });
  await sequelize.close();
  console.log('Banco de dados de teste limpo');
}

export { testUser, initTestDatabase, closeTestDatabase };
