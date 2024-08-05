import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript';
import { User } from './user';

@Table({ tableName: "products", timestamps: true }) // con true Sequelize maneje los timestamps automáticamente
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Column({type: DataType.STRING,allowNull: false,
    validate: {
      notEmpty: { msg: "Name is required"},
      len: {
        args: [4, 200],
        msg: "Name must be between 4 and 200 characters long",
      },
    },
  })
  name!: string;

  @Column({ type: DataType.FLOAT, allowNull: false,
    validate: {notNull: { msg: "price is required"} } 
  })
  price!: number;

  @Column({type: DataType.TEXT,allowNull: false,
    validate: {
      notEmpty: { msg: "description is required"},
      len: {
        args: [8, 300],
        msg: "description must be between 8 and 300 characters long",
      },
    },
  })
  description!: string;

  @Column({ type: DataType.INTEGER, allowNull: false,
    validate: {notNull: { msg: "stock is required"} } 
  })
  stock!: number;
  
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId!: number;

  //un producto pertenece a un usuario
  @BelongsTo(() => User)
  user!: User;
}
