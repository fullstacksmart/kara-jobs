# Server for kara

## talents

for future reference, the valid substitutions for "type" are:
all"|"registrationExperience"|"registrationQualification"|"approbations"|"documents"|"aboutMe"|"experiences"|"qualifications"|"languages"|"skills"

### get

extra types: "signup"|"basic"

possible routes:

- get(/talents):
  returns all talents (will probably be removed in production)
- get(/talents/:id)
  returns all available information for talent with id :id
- get(/talents/:id/:type)
  returns all avaliable information for talent with id :id of type :type

### post

extra types: "signup"|"basic"

possible routes:

- post(/talents/:id):
  body of type Talent required, i.e. an instance of
  <code>interface CompleteTalentCandidate {
  id: string;
  firstName: string;
  lastName: string;
  isoCode: string;
  country: string;
  zipcode: string;
  city: string;
  onboardingComplete: boolean;
  onboardingPage: number;
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
  </code>
  posts the supplied talent to the db, if it doesn't already exist or onboarding is not complete
- post(/talents/:id/:type):
  posts the information of type :type for the talent with :id to db. For type = "signup", see description above. All other types assume that there already is a talent with id :id in the db. They also accept arrays of items to be bulk included in the relevant subtable, i.e. a post request to 'talents/:id/documents' may either have a single document object or an array of document objects as its body.

### put

- put(/talents/:id)
  updates talent with id :id. Assumes as a body an instance of
  <code>interface TalentCandidate {
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
  </code>

- put(/talents/:id/:type)
  updates information of type :type on talent with id :id. Requires at least a TalentId property in body and accepts an additional id property. All entries of type :type that match TalentId and id (if specified) will be updated. Also accepts an array of objects to update.

### delete

possible routes:

- delete(/talents/:id)
  delete talent with id :id
- delete(/talents/:id/:type)
  delete info of type :type on talent with id :id
- delete(/talents/:id/:type/:typeId)
  delete the piece of information of type :type with id :typeid on the talent with id :id

## companies

the valid substitutions for "type" are:
"all"|"employees"|"images"|"searchPreferences"|"recruitmentPreferences"|"profile"

### get

extra types: "basic"|"signup"

possible routes:

- get(/companies):
  get all companies (to be removed for production)

- get(/companies/:id):
  get all info for company with id :id

- get (/companies/:id/:type):
  get info of type :type for company with id :id. During signup / at login, use type login to get all (and only) information available for company at current signup stage

- get (/employees/:employeeId/:type):
  get company info of type :type for company to which employee with id :employeeId belongs. For signup and/or login specify type "signup".

### post

extra types: "basic"|"signup"

possible routes:

- post(/companies):
  post new company to db;
  requires body of type CompleteCompany, i.e.
  <code>
  interface CompleteCompany {
  name: string;
  sector: string;
  type: string;
  street: string;
  streetNo: string;
  addressAdditional?: string;
  zipCode: string;
  city: string;
  webSite?: string;
  onboardingComplete: boolean;
  onboardingPage: number;
  employees?: CompanyEmployee[];
  images?: CompanyImage[];
  searchPreferences?: CompanySearchPreferences;
  recruitmentPreferences?: CompanyRecruitmentPreferences;
  profile?: CompanyProfile;
  }
  </code>
  returns the new record

- post(/companies/:id):
  adds info for company with id :id to the db if it does not already exist

- post(/companies/:id):
  adds info of type :type for company with id :id to the database, if it does not already exist. Watch out: If type "signup" is specified, information may be updated. Old values will be lost. Use during signup when you're sure you are posting up to date information

- post(/employees/:employeeId/:type):
  adds info of type :type for the company to which employee with id :employeeId belongs

### put

- put(/companies/:id):
  update information for the company with id :id

- put(/companies/:id/:type):
  update information of type :type for the company with id :id

### delete

- delete(/companies/:id):
  delete company with id :id from the database

- delete(/companies/:id/:type)
  delete information of type :type about the company with id :id from the database
