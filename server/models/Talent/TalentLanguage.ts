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
export class TalentLanguage extends Model<TalentLanguage> {
  @AllowNull(false)
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @AllowNull(false)
  @Column
  language!: string;

  @AllowNull(false)
  @Column
  languageLevel!: number;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
