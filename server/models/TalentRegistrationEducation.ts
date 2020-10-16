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

interface TalentRegistrationEducationAttributes {
  TalentId: string;
  studyProgram: string;
  university: string;
  expectedGraduationYear: number;
}

@Table
export class TalentRegistrationEducation
  extends Model<
    TalentRegistrationEducationAttributes,
    TalentRegistrationEducationAttributes
  >
  implements TalentRegistrationEducationAttributes {
  @PrimaryKey
  @AllowNull(false)
  @ForeignKey(() => Talent as typeof Model)
  @Column
  TalentId!: string;

  @AllowNull(false)
  @Column
  studyProgram!: string;

  @AllowNull(false)
  @Column
  university!: string;

  @Column(DataType.DATEONLY())
  expectedGraduationYear!: number;

  @BelongsTo(() => Talent as typeof Model)
  talent!: Talent;
}
