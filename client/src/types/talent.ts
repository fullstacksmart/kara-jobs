export interface Talent {
  uid: string;
  email: string;
  onbarding_page: number;
  onboarding_complete: boolean;
  firstName: string;
  lastName: string;
  isoCode: string;
  residence: string;
  zipCode: string;
  city: string;
  occupationId: string;
  positionName: string;
  occupationStatusId: string;
  employerName: string;
  studyProgram: string;
  university: string;
  expectedGraduationYear: number;
  approbationStartedFlag: boolean;
  approbationFederalState: string;
  approbationFeedbackFlag: boolean;
  approbationStatus: string;
}
