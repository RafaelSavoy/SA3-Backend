import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  Model,
  Column,
  Table,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'condominiums' })
class ProductModel extends Model<
  InferAttributes<ProductModel>,
  InferCreationAttributes<ProductModel>
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
  })
  name!: string;
}
export { ProductModel };
