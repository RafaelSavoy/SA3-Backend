// Importe os módulos necessários
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  Model,
  Column,
  Table,
  DataType,
  BeforeCreate
} from 'sequelize-typescript';
import { HTTPError } from '../../services/errors/httpError';
import { passwordServices } from '../../services/password/passwordService';

// Defina o modelo como uma classe que estende a classe "Model"
@Table({ tableName: 'users' })
class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  // Defina os atributos do modelo como propriedades da classe com decoradores "Column"
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  id!: number | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [1, 16]
    }
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [1, 16]
    }
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Informe um endereço de email válido'
      }
    }
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [6, 255],
      hasNumber(value: string): void {
        if (!/\d/.test(value)) {
          throw new HTTPError('A senha deve incluir pelo menos um número', 400);
        }
      }
    }
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user'
  })
  role!: string | null;

  @Column({
    type: DataType.NUMBER,
    allowNull: false
  })
  id_condominium!: number;

  async checkPassword(password: string): Promise<boolean> {
    return await passwordServices.checkPassword(password, this.password);
  }

  @BeforeCreate
  static async hashPassword(instance: UserModel) {
    instance.password = await passwordServices.hashPassword(instance.password);
  }
}
export { UserModel };
