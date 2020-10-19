import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Optional } from 'sequelize/types';
import { Talent } from './Talent';

interface TalentApprobationAttributes {
  id: number;
  TalentId: string;
  approbationStarted: boolean;
  approbationFederalState: string;
  approbationFeedback: boolean;
  approbationStatus: string;
}

type TalentApprobationCreationAttributes = Optional<
  TalentApprobationAttributes,
  'id'
>;

@Table
export class TalentApprobation
  extends Model<
    TalentApprobationAttributes,
    TalentApprobationCreationAttributes
  >
  implements TalentApprobationAttributes {
  @PrimaryKey
  @Column
  id!: number;

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
