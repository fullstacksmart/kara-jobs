import { Talent } from '../models/Talent/Talent';
import { TalentAboutMe } from '../models/Talent/TalentAboutMe';
import { TalentApprobation } from '../models/Talent/TalentApprobation';
import { TalentDocument } from '../models/Talent/TalentDocument';
import { TalentExperience } from '../models/Talent/TalentExperience';
import { TalentLanguage } from '../models/Talent/TalentLanguage';
import { TalentOtherSkill } from '../models/Talent/TalentOtherSkill';
import { TalentQualification } from '../models/Talent/TalentQualification';
import { TalentRegistrationExperience } from '../models/Talent/TalentRegistrationExperience';
import { TalentRegistrationQualification } from '../models/Talent/TalentRegistrationQualification';

export type ReturnTalent =
  | Talent
  | TalentAboutMe
  | TalentApprobation
  | TalentApprobation[]
  | TalentDocument
  | TalentDocument[]
  | TalentExperience
  | TalentExperience[]
  | TalentLanguage
  | TalentLanguage[]
  | TalentOtherSkill
  | TalentOtherSkill[]
  | TalentQualification
  | TalentQualification[]
  | TalentRegistrationExperience
  | TalentRegistrationQualification;

export type InputTalent =
  | typeof Talent
  | typeof TalentAboutMe
  | typeof TalentApprobation
  | typeof TalentDocument
  | typeof TalentExperience
  | typeof TalentLanguage
  | typeof TalentOtherSkill
  | typeof TalentQualification
  | typeof TalentRegistrationExperience
  | typeof TalentRegistrationQualification;

export interface TalentCandidate {
  id: string;
  firstName?: string;
  lastName?: string;
  isoCode?: string;
  country?: string;
  zipcode?: string;
  city?: string;
  onboardingComplete?: boolean;
  onboardingPage?: number;
  registrationExperience?: TalentRegistrationExperience;
  registrationQualification?: TalentRegistrationQualification;
  approbations?: TalentApprobation | TalentApprobation[];
  documents?: TalentDocument | TalentDocument[];
  aboutMe?: TalentAboutMe;
  experiences?: TalentExperience | TalentExperience[];
  qualifications?: TalentQualification | TalentQualification[];
  languages?: TalentLanguage | TalentLanguage[];
  skills?: TalentOtherSkill | TalentOtherSkill[];
}

export type TalentArray = TalentApprobation[] &
  TalentDocument[] &
  TalentExperience[] &
  TalentQualification[] &
  TalentLanguage[] &
  TalentOtherSkill[];
