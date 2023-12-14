import { Sequelize } from 'sequelize-typescript';
import { UserModel, ProductModel } from './models/';
const dbConfig = require('./config/database');

const sequelize = new Sequelize(dbConfig);

sequelize.addModels([UserModel, ProductModel]);

export { sequelize, UserModel, ProductModel};
