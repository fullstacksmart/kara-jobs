import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { TalentRegistrationEducation } from './TalentRegistrationEducation';
import { TalentRegistrationProficiency } from './TalentRegistrationProficiency';
import { TalentApprobation } from './TalentApprobation';
import { TalentDocument } from './TalentDocument';

interface TalentAttributes {
  id: string;
  firstName: string;
  lastName: string;
  isoCode: string;
  country: string;
  zipCode: string;
  city: string;
  onboardingComplete: boolean;
  onboardingPage: number;
  registrationProficiency?: TalentRegistrationProficiency;
  registrationEducation?: TalentRegistrationEducation;
  approbations?: TalentApprobation[];
  documents?: TalentDocument[];
}

@Table
export class Talent
  extends Model<TalentAttributes, TalentAttributes>
  implements TalentAttributes {
  @PrimaryKey
  @Column
  id!: string;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @AllowNull(false)
  @Column
  isoCode!: string;

  @AllowNull(false)
  @Column
  country!: string;

  @AllowNull(false)
  @Column
  zipCode!: string;

  @AllowNull(false)
  @Column
  city!: string;

  @AllowNull(false)
  @Column
  onboardingComplete!: boolean;

  @AllowNull(false)
  @Column
  onboardingPage!: number;

  @HasOne(() => TalentRegistrationProficiency as typeof Model)
  registrationProficiency!: TalentRegistrationProficiency;
  @HasOne(() => TalentRegistrationEducation as typeof Model)
  registrationEducation!: TalentRegistrationEducation;
  @HasMany(() => TalentApprobation as typeof Model)
  approbations!: TalentApprobation[];
  @HasMany(() => TalentDocument as typeof Model)
  documents!: TalentDocument[];
  // Talent.hasOne(models.TalentTableAboutMe);
  // Talent.hasMany(models.TalentTableExperience);
  // Talent.hasMany(models.TalentTableEducation);
  // Talent.hasMany(models.TalentTableSpokenLanguage);
  // Talent.hasMany(models.TalentTableOtherSkill);
}
