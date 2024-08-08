import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    BelongsTo,
    ForeignKey,
    BelongsToMany,
  } from "sequelize-typescript";
  import { Product } from './product';
  import {User} from './user'
import { ProductCart } from "./productCard";
  
  @Table({tableName: "carts",timestamps: true,})
  export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER})
    id!: number;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId!: number;
  
    //un carrito solo puede tener un usuario
    @BelongsTo(() => User)
    user!: User;
    
    //nuevo
    @BelongsToMany(() => Product, () => ProductCart)
    products!: Product[];
}
  