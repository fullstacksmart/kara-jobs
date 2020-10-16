import {
  Table,
  Column,
  Model,
  HasOne,
  AllowNull,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Hobby } from './Hobby';

@Table
export class Person extends Model {
  @Column
  firstName: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(2, 0))
  age: number;

  @HasOne(() => Hobby)
  favoriteHobby?: Hobby;
  onDelete: 'CASCADE';
  onUpdate: 'CASCADE';
}
