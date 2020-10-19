import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { Talent } from './Talent';

@Table
export class TalentOtherSkill extends Model<TalentOtherSkill> {
  @AllowNull(false)
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @Column
  skill!: string;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
