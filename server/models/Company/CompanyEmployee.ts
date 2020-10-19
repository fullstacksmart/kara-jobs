import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Company } from './Company';

@Table
export class CompanyEmployee extends Model<CompanyEmployee> {
  @AllowNull(false)
  @ForeignKey(() => Company as typeof Model)
  @Column(DataType.UUID)
  CompanyId!: string;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
