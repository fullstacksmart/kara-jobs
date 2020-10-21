interface approbation {
  id: number;
  TalentId: string;
  approbationStarted: true;
  approbationFederalState: string;
  approbationFeedback: false;
  approbationStatus: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Talent {
  id: string;
  firstName: string;
  lastName: string;
  isoCode: string;
  country: string;
  zipCode: string;
  city: string;
  onboardingComplete: false;
  onboardingPage: number;
  createdAt?: string;
  updatedAt?: string;
  registrationExperience: {
    TalentId: string;
    occupationId: number;
    positionName: string;
    occupationStatusId: number;
    employerName: string;
    createdAt?: string;
    updatedAt?: string;
  };
  registrationQualification: {
    TalentId: string;
    studyProgram: string;
    university: string;
    expectedGraduationYear: number;
    createdAt?: string;
    updatedAt?: string;
  };
  approbations: approbation[];
}

export interface incompleteTalent {
  id: string;
  firstName?: string;
  lastName?: string;
  isoCode?: string;
  country?: string;
  zipCode?: string;
  city?: string;
  onboardingComplete?: false;
  onboardingPage?: number;
  createdAt?: string;
  updatedAt?: string;
  registrationExperience?: {
    TalentId: string;
    occupationId: number;
    positionName: string;
    occupationStatusId: number;
    employerName: string;
    createdAt?: string;
    updatedAt?: string;
  };
  registrationQualification?: {
    TalentId: string;
    studyProgram: string;
    university: string;
    expectedGraduationYear: number;
    createdAt?: string;
    updatedAt?: string;
  };
  approbations?: approbation[];
}

export interface Experience {
  TalentId: string;
  occupationId: number;
  positionName: string;
  occupationStatusId: number;
  employerName: string;
}
