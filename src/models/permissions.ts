import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Rol } from './role';
import { Entity } from './entity';

@Table({ tableName: 'permissions' })
export class Permission extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => Rol)
  @Column({ type: DataType.INTEGER })
  roleId!: number;

  @ForeignKey(() => Entity)
  @Column({ type: DataType.INTEGER })
  entityId!: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canCreate!: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canUpdate!: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canDelete!: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canGet!: boolean;
}
