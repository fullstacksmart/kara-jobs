import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Talent } from './Talent';

interface TalentRegistrationProficiencyAttributes {
  TalentId: string;
  occupationId: number;
  positionName: string;
  occupationStatusId: number;
  employerName: string;
}

@Table
export class TalentRegistrationProficiency
  extends Model<
    TalentRegistrationProficiencyAttributes,
    TalentRegistrationProficiencyAttributes
  >
  implements TalentRegistrationProficiencyAttributes {
  // TODO: check nonnullable status
  @AllowNull(false)
  @PrimaryKey
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(1, 0))
  occupationId!: number;

  @AllowNull(false)
  @Column
  positionName!: string;

  @AllowNull(false)
  @Column
  occupationStatusId!: number;

  @AllowNull(false)
  @Column
  employerName!: string;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
