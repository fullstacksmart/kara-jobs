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

interface TalentRegistrationQualificationAttributes {
  TalentId: string;
  studyProgram: string;
  university: string;
  expectedGraduationYear: number;
}

@Table
export class TalentRegistrationQualification
  extends Model<
    TalentRegistrationQualificationAttributes,
    TalentRegistrationQualificationAttributes
  >
  implements TalentRegistrationQualificationAttributes {
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
