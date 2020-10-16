import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { TalentRegistrationEducation } from './TalentRegistrationEducation';
import { TalentRegistrationProficiency } from './TalentRegistrationProficiency';

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
}

// type TalentCreationAttributes = Optional<
//   TalentAttributes,
//   'talentRegistrationEducation'
// >;

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
  talentRegistrationProficiency!: TalentRegistrationProficiency;
  @HasOne(() => TalentRegistrationEducation as typeof Model)
  talentRegistrationEducation!: TalentRegistrationEducation;
  // Talent.hasMany(models.TalentTableApprobation);
  // Talent.hasMany(models.TalentTableDocument);
  // Talent.hasOne(models.TalentTableAboutMe);
  // Talent.hasMany(models.TalentTableExperience);
  // Talent.hasMany(models.TalentTableEducation);
  // Talent.hasMany(models.TalentTableSpokenLanguage);
  // Talent.hasMany(models.TalentTableOtherSkill);
}
