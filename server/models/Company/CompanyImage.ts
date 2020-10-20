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
export class CompanyImage extends Model<CompanyImage> {
  @AllowNull(false)
  @ForeignKey(() => Company as typeof Model)
  @Column(DataType.UUID)
  CompanyId!: string;

  @AllowNull(false)
  @Column
  imageTitle!: string;

  @AllowNull(false)
  @Column
  isProfilePicture!: boolean;

  @BelongsTo(() => Company as typeof Model)
  company!: Company;
}
