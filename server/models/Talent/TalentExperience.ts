import {
  Table,
  Column,
  Model,
  AllowNull,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Talent } from './Talent';

@Table
export class TalentExperience extends Model<TalentExperience> {
  @AllowNull(false)
  @Column
  positionName!: string;

  @AllowNull(false)
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @AllowNull(false)
  @Column
  employerName!: string;

  @AllowNull(false)
  @Column
  employerCity!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(2, 0))
  positionStartMonth!: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(4, 0))
  positionStartYear!: number;

  @Column(DataType.DECIMAL(2, 0))
  positionEndMonth!: number;

  @Column(DataType.DECIMAL(4, 0))
  positionEndYear!: number;

  @Column
  positionDescription!: string;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
