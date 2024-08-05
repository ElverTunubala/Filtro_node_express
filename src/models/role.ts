import {Table,Column, Model, DataType, PrimaryKey, AutoIncrement,HasMany,
} from "sequelize-typescript";
import {User} from './user'

@Table({tableName: "roles", timestamps: false}) // Con false Sequelize ya no maneje los timestamps automáticamente
export class Rol extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.INTEGER})
    id!: number;
  
    @Column({type: DataType.STRING, allowNull: false,
      validate: { notEmpty: {msg: "Name is required"},
        len: {args: [10, 200],
            msg: "Name must be between 10 and 200 characters long"
        }
      }
    })
    name!: string;

    @HasMany(() => User)
    users!: User[];
}
