import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Talent } from './Talent';

interface TalentApprobationAttributes {
  TalentId: string;
  approbationStarted: boolean;
  approbationFederalState: string;
  approbationFeedback: boolean;
  approbationStatus: string;
}

@Table
export class TalentApprobation
  extends Model<
    TalentApprobationAttributes,
    TalentApprobationAttributes
  >
  implements TalentApprobationAttributes {
  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @AllowNull(false)
  @Column
  approbationStarted!: boolean;

  @AllowNull(false)
  @Column
  approbationFederalState!: string;

  @AllowNull(false)
  @Column
  approbationFeedback!: boolean;

  @AllowNull(false)
  @Column
  approbationStatus!: string;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
