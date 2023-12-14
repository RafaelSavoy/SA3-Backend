// Importe os módulos necessários
import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  Model,
  Column,
  Table,
  DataType,
} from 'sequelize-typescript';

// Defina o modelo como uma classe que estende a classe "Model"
@Table({ tableName: 'products' })
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

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  image!: string;
}
export { ProductModel };
