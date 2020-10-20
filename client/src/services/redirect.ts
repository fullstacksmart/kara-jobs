// query DB (talent or employer route) : /talents/uid/signup
// if error: redirect to first page in onboarding and talentsignup container logic (save uid in session mgmt) //no post to DB yet
// if result !== null && onboarding_complete === false: do talent-signup container logic (set session storage and redirect to right page)
// if result !== null && onboarding_complete: redirect to profile view (pass talent object?)

import { resolve } from 'dns';

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

const setSessionStorage = (obj: incompleteTalent, kind: string) => {
  //filter
  sessionStorage.setItem(kind, JSON.stringify(obj));
};

//if login:
//ask talent and then employee signup.
//if onboarding complete, redirect to login page
//else redirect to signup flow

('/users/uid');

const handleLogin = async (uid: string) => {
  const talent = await fetch(`${server_address}/talents/${uid}/signup`)
    .then((res) => res.json())
    .then((json) => {
      if (json.message && json.message.includes('No info of kind signup')) {
        return false;
      } else if (!json.onboardingComplete) {
        setSessionStorage(json, 'talent');
        return { page: json.onboardingPage, complete: false, type: 'talent' };
      } else {
        setSessionStorage(json, 'talent');
        return { page: json.onboardingPage, complete: true, type: 'talent' };
      }
    });
  if (talent) {
    return talent;
  } else {
    const employee = await fetch(`${server_address}/employees/${uid}/signup`)
      .then((res) => res.json())
      .then((json) => {
        if (json.message && json.message.includes('No info of kind signup')) {
          return false;
        } else if (!json.onboardingComplete) {
          setSessionStorage(json, 'employer');
          return {
            page: json.onboardingPage,
            complete: false,
            type: 'employer',
          };
        } else {
          setSessionStorage(json, 'employer');
          return {
            page: json.onboardingPage,
            complete: true,
            type: 'employer',
          };
        }
      });
    return employee;
  }
};

export const redirect = () => {
  fetch(`${server_address}/users/veuEbK78pZULTEwjtpABtiXkk632`)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

// export const redirect = async (uid: string, kind: string) => {
//   if (kind === 'login') {
//     const status = await handleLogin(uid);
//   } else {
//     const status = await fetch(`${server_address}/${kind}s/${uid}/signup`)
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.message && json.message.includes('No info of kind signup')) {
//           setSessionStorage(
//             { id: uid, onboardingPage: 0, onboardingComplete: false },
//             kind,
//           );
//           return { page: 0, complete: false, type: kind };
//         } else if (!json.onboardingComplete) {
//           setSessionStorage(json, kind);
//           return { page: json.onboardingPage, complete: false, type: kind };
//         } else {
//           setSessionStorage(json, kind);
//           return { page: json.onboardingPage, complete: true, type: kind };
//         }
//       });
//   }
//   return status;
// };
