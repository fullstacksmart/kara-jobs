interface Approbation {
  id?: number;
  TalentId?: string;
  approbationStarted?: boolean;
  approbationFederalState?: string;
  approbationFeedback?: boolean;
  approbationStatus?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface RegistrationExperience {
  TalentId?: string;
  occupationId?: number;
  positionName?: string;
  occupationStatusId?: number;
  employerName?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface RegistrationQualification {
  TalentId?: string;
  studyProgram?: string;
  university?: string;
  expectedGraduationYear?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface Document {
  TalentId?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AboutMe {
  TalentId?: string;
  text?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Experience {
  TalentId?: string;
  positionName?: string;
  employerName?: string;
  employerCity?: string;
  positionStartMonth?: number;
  positionStartYear?: number;
  positionEndMonth?: number;
  positionEndYear?: number;
  positionDescription?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Qualification {
  TalentId?: string;
  institutionName?: string;
  degree?: string;
  fieldOfStudy?: string;
  studyStartYear?: number;
  studyDescription?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Language {
  TalentId?: string;
  language?: string;
  languageLevel?: number;
  createdAt?: string;
  updatedAt?: string;
}

interface Skill {
  TalentId?: string;
  skill?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Talent {
  id: string;
  onboardingComplete?: boolean;
  onboardingPage?: number;
  firstName?: string;
  lastName?: string;
  isoCode?: string;
  country?: string;
  zipCode?: string;
  city?: string;
  createdAt?: string;
  updatedAt?: string;
  registrationExperience?: RegistrationExperience;
  registrationQualification?: RegistrationQualification;
  approbations?: Approbation[];
  documents?: Document[];
  aboutMe?: AboutMe;
  experiences?: Experience[];
  qualifications?: Qualification[];
  languages?: Language[];
  skills?: Skill[];
}
