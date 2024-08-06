import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Product } from './product';
import {Rol} from './role'
import bcrypt from 'bcrypt';
import { Order } from "./order";

@Table({tableName: "users",
  timestamps: true, // Con true Sequelize maneje los timestamps automáticamente
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({type: DataType.INTEGER})
  id!: number;
  
  @Column({type: DataType.STRING, allowNull: false, unique: true,
    validate: {len: {
      args: [10, 200],
      msg: "email must be between 5 and 200 characters long"
      },
      isEmail: { msg: "Invalid email address"}
    }
  })
  email!: string;

  @Column({type: DataType.STRING, allowNull: false,
    validate: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      len: {
        args: [5, 200],
        msg: "Password must be between 5 and 200 characters long"
      }
    }
  })
  password!: string;

  // @Column({ type: DataType.BOOLEAN, allowNull: false,
  //   validate: {
  //     notNull: {
  //       msg: "Estate is required"
  //     }
  //   }
  // })
  // rol!: boolean;

  @ForeignKey(() => Rol)
  @Column({type: DataType.INTEGER, allowNull: false})
  rolId!: number;

  //un usuario solo puede tener un rol
  @BelongsTo(() => Rol)
  role!: Rol;

  //un usuario puede tener muchos productos
  @HasMany(() => Product)
  products!: Product[];

  //un usuario puede tener muchos pedidos
  @HasMany(() => Order)
  pedidos!: Order[];

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: User) {
    if (user.changed('password')) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }
}
