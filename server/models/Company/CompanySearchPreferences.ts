import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
import { Company } from './Company';

@Table
export class CompanySearchPreferences extends Model<
  CompanySearchPreferences
> {
  @PrimaryKey
  @ForeignKey(() => Company as typeof Model)
  @Column
  CompanyId!: string;

  @AllowNull(false)
  @Column
  searchDoctor!: boolean;

  @AllowNull(false)
  @Column
  searchNurse!: boolean;

  @AllowNull(false)
  @Column
  searchOther!: boolean;

  @AllowNull(false)
  @Column
  requireDregree!: boolean;

  @AllowNull(false)
  @Column
  requireApprobation!: boolean;

  @Column
  requiredGermanSkills!: string;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
