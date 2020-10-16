import {
  Table,
  Model,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { BELONGSTOMODEL } from './BELONGSTOMODEL';

export class THISMODEL extends Model<THISMODEL> {
  @AllowNull(false)
  @ForeignKey(() => BELONGSTOMODEL as typeof Model)
  BELONGSTOMODELId!: number;

  @BelongsTo(() => BELONGSTOMODEL as typeof Model)
  bELONGSTOMODEL!: BELONGSTOMODEL;
}
