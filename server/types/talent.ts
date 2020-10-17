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
  | TalentDocument
  | TalentExperience
  | TalentLanguage
  | TalentOtherSkill
  | TalentQualification
  | TalentRegistrationExperience
  | TalentRegistrationQualification;

export interface TalentCandidate {
  id: string;
}
