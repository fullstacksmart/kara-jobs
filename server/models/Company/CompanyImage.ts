import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { Company } from './Company';

@Table
export class CompanyImage extends Model<CompanyImage> {
  @AllowNull(false)
  @ForeignKey(() => Company as typeof Model)
  @Column
  CompanyId!: number;

  @AllowNull(false)
  @Column
  imageTitle!: string;

  @AllowNull(false)
  @Column
  isProfilePicture!: boolean;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
