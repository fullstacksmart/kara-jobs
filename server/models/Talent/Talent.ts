import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { TalentRegistrationQualification } from './TalentRegistrationQualification';
import { TalentRegistrationExperience } from './TalentRegistrationExperience';
import { TalentApprobation } from './TalentApprobation';
import { TalentDocument } from './TalentDocument';
import { TalentAboutMe } from './TalentAboutMe';
import { TalentExperience } from './TalentExperience';
import { TalentQualification } from './TalentQualification';

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
  registrationProficiency?: TalentRegistrationExperience;
  registrationEducation?: TalentRegistrationQualification;
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

  @HasOne(() => TalentRegistrationExperience as typeof Model)
  registrationProficiency!: TalentRegistrationExperience;
  @HasOne(() => TalentRegistrationQualification as typeof Model)
  registrationEducation!: TalentRegistrationQualification;
  @HasMany(() => TalentApprobation as typeof Model)
  approbations!: TalentApprobation[];
  @HasMany(() => TalentDocument as typeof Model)
  documents!: TalentDocument[];
  @HasOne(() => TalentAboutMe as typeof Model)
  aboutMe!: TalentAboutMe;
  @HasMany(() => TalentExperience as typeof Model)
  experiences!: TalentExperience[];
  @HasMany(() => TalentQualification as typeof Model)
  qualifications!: TalentQualification[];

  // Talent.hasMany(models.TalentTableSpokenLanguage);
  // Talent.hasMany(models.TalentTableOtherSkill);
}
