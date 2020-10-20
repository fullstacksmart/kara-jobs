import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';
import { Company } from './Company';

@Table
export class CompanySearchPreferences extends Model<
  CompanySearchPreferences
> {
  @PrimaryKey
  @ForeignKey(() => Company as typeof Model)
  @Column(DataType.UUID)
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
  requireDregree!: number;

  @AllowNull(false)
  @Column
  requireApprobation!: number;

  @Column
  requiredGermanSkills!: string;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
