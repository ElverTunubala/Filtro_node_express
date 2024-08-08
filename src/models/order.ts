import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
  } from "sequelize-typescript";
 
import { User } from "./user";
import { ProductCart } from "./productCard";
  
@Table({tableName: "orders", timestamps: true,})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER})
    id!: number;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId!: number;

    @ForeignKey(() => ProductCart)
    @Column({type: DataType.INTEGER, allowNull: false})
    productCardId!: number;

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false,
        validate: {notNull: { msg: "total is required"} } 
      })
    total!: number;

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

    //un pedido pertenece a un usuario
    @BelongsTo(() => User)
    user!: User;
    
    //un pedido pertenece a un carrito
    @BelongsTo(() => ProductCart)
    productCart!: ProductCart;
}
  