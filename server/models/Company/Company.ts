import {
  Table,
  Model,
  Column,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { CompanyEmployee } from './CompanyEmployee';
import { CompanyImage } from './CompanyImage';

@Table
export class Company extends Model<Company> {
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

  @AllowNull(false)
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

  @HasMany(() => CompanyEmployee as typeof Model)
  employees!: CompanyEmployee[];

  @HasMany(() => CompanyImage as typeof Model)
  images!: CompanyImage[];
}
