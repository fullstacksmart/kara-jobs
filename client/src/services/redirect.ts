// query DB (talent or employer route) : /talents/uid/signup
// if error: redirect to first page in onboarding and talentsignup container logic (save uid in session mgmt) //no post to DB yet
// if result !== null && onboarding_complete === false: do talent-signup container logic (set session storage and redirect to right page)
// if result !== null && onboarding_complete: redirect to profile view (pass talent object?)

//during onboarding:
//post to DB: /talents/uid/signup

interface incompleteTalent {
  id: string;
  onboardingPage: number;
  onboardingComplete: boolean;
  firstName?: string;
  lastName?: string;
  isoCode?: string;
  residence?: string;
  zipCode?: string;
  city?: string;
  occupationId?: string;
  positionName?: string;
  occupationStatusId?: string;
  employerName?: string;
  studyProgram?: string;
  university?: string;
  expectedGraduationYear?: number;
  approbationStartedFlag?: boolean;
  approbationFederalState?: string;
  approbationFeedbackFlag?: boolean;
  approbationStatus?: string;
  createdAt?: string;
  updatedAt?: string;
}

//TO DO: Add to .env file
const server_address = 'http://localhost:3001';

const goToSignup = (obj: incompleteTalent, type: string) => {
  sessionStorage.setItem(type, JSON.stringify(obj));
  //redirect to onboardingPage
};

const goToProfile = (obj, type) => {};

export const redirect = (uid: string, type: string) => {
  //query DB
  fetch(`${server_address}/${type}s/${uid}/signup`)
    .then((res) => res.json())
    .then((json) => {
      if (json.message && json.message.includes('No info of type signup')) {
        goToSignup(
          { id: uid, onboardingPage: 0, onboardingComplete: false },
          type,
        );
      } else if (!json.onboardingComplete) {
        goToSignup(json, type);
      } else {
        goToProfile(json, type);
      }
    });
};
