export interface Employer {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  sector: string;
  type: string;
  street: string;
  streetNumber: string;
  addressAdditional: string;
  zipCode: string;
  city: string;
  website: string;
  searchDoctor: boolean;
  searchNurse: boolean;
  searchOther: boolean;
  talentStudyStatus: number;
  talentAprobStatus: number;
  talentMinGerman: string;
  agencyApplications: boolean;
  internationalApplications: boolean;
}
