import {Table,Column, Model, DataType, PrimaryKey, AutoIncrement,HasMany,
} from "sequelize-typescript";
import {User} from './user'
import { Permission } from "./permissions";

@Table({tableName: "roles", timestamps: false}) // Con false Sequelize ya no maneje los timestamps automáticamente
export class Rol extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER})
    id!: number;
  
    @Column({type: DataType.STRING, allowNull: false,
      validate: { notEmpty: {msg: "Name is required"},
        len: {args: [5, 200],
            msg: "Name must be between 5 and 200 characters long"
        }
      }
    })
    name!: string;
    
    //un rol lo puede estar en varios usuarios
    @HasMany(() => User)
    users!: User[];

    @HasMany(() => Permission)
    permissions!: Permission[];  
}
