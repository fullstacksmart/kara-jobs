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
export class CompanyRecruitmentPreferences extends Model<
  CompanyRecruitmentPreferences
> {
  @PrimaryKey
  @ForeignKey(() => Company as typeof Model)
  @Column
  CompanyId!: number;

  @AllowNull(false)
  @Column
  initiativeApplications!: boolean;

  @AllowNull(false)
  @Column
  offerApprobationTraining!: boolean;

  @AllowNull(false)
  @Column
  internationalApplicants!: boolean;

  @AllowNull(false)
  @Column
  agencyApplications!: boolean;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
