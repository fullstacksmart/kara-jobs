import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  BelongsTo,
  ForeignKey,
  Length,
} from 'sequelize-typescript';
import { Talent } from './Talent';

@Table
export class TalentAboutMe extends Model<TalentAboutMe> {
  @PrimaryKey
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @Length({ max: 800 })
  @AllowNull(false)
  @Column
  text!: string;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
