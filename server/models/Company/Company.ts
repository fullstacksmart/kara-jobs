import {
  Table,
  Model,
  Column,
  AllowNull,
} from 'sequelize-typescript';

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
}
