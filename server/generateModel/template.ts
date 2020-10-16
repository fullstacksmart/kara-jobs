import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { BELONGSTOMODEL } from './BELONGSTOMODEL';

@Table
export class THISMODEL extends Model<THISMODEL> {
  @AllowNull(false)
  @ForeignKey(() => BELONGSTOMODEL as typeof Model)
  @Column
  BELONGSTOMODELId!: string;

  @BelongsTo(() => BELONGSTOMODEL as typeof Model)
  bELONGSTOMODEL!: BELONGSTOMODEL;
}
