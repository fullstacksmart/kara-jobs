# Server for kara

## talents

for future reference, the valid substitutions for "type" are:
all"|"registrationExperience"|"registrationQualification"|"approbations"|"documents"|"aboutMe"|"experiences"|"qualifications"|"languages"|"skills"

### get

possible routes:

- get(/talents):
  returns all talents (will probably be removed in production)
- get(/talents/:id)
  returns all available information for talent with id :id
- get(/talents/:id/:type)
  returns all avaliable information for talent with id :id of type :type

### post

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

- put(/talents)
