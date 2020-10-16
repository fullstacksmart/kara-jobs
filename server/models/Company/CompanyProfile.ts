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
export class CompanyProfile extends Model<CompanyProfile> {
  @PrimaryKey
  @ForeignKey(() => Company as typeof Model)
  @Column
  CompanyId!: string;

  @AllowNull(false)
  @Column
  aboutText!: string;

  @AllowNull(false)
  @Column
  offerText!: string;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
