import {
  Table,
  Model,
  Column,
  AllowNull,
  HasMany,
  HasOne,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';
import { CompanyEmployee } from './CompanyEmployee';
import { CompanyImage } from './CompanyImage';
import { CompanyProfile } from './CompanyProfile';
import { CompanyRecruitmentPreferences } from './CompanyRecruitmentPreferences';
import { CompanySearchPreferences } from './CompanySearchPreferences';

@Table
export class Company extends Model<Company> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  sector!: string;

  @AllowNull(false)
  @Column
  type!: string;

  @AllowNull(false)
  @Column
  street!: string;

  @AllowNull(false)
  @Column
  streetNo!: string;

  @Column
  addressAdditional!: string;

  @AllowNull(false)
  @Column
  zipCode!: string;

  @AllowNull(false)
  @Column
  city!: string;

  @Column
  webSite!: string;

  @AllowNull(false)
  @Column
  onboardingComplete!: boolean;

  @AllowNull(false)
  @Column
  onboardingPage!: number;

  @HasMany(() => CompanyEmployee as typeof Model)
  employees!: CompanyEmployee[];

  @HasMany(() => CompanyImage as typeof Model)
  images!: CompanyImage[];

  @HasOne(() => CompanySearchPreferences as typeof Model)
  searchPreferences!: CompanySearchPreferences;

  @HasOne(() => CompanyRecruitmentPreferences as typeof Model)
  recruitmentPreferences!: CompanyRecruitmentPreferences;

  @HasOne(() => CompanyProfile as typeof Model)
  profile!: CompanyProfile;
}
