import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    HasMany,
  } from "sequelize-typescript";
import { Product } from './product';
import { Cart } from "./cart";
  
@Table({tableName: "productCarts", timestamps: true, })
  export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER})
    id!: number;
    
    @ForeignKey(() => Cart)
    @Column({type: DataType.INTEGER, allowNull: false})
    cardId!: number;

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER, allowNull: false})
    productId!: number;

    @Column({ type: DataType.INTEGER, allowNull: false,
        validate: {notNull: { msg: "quantity is required"} } 
    })
    quantity!: number;

}
  