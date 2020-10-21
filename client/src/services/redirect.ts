// query DB (talent or employer route) : /talents/uid/signup
// if error: redirect to first page in onboarding and talentsignup container logic (save uid in session mgmt) //no post to DB yet
// if result !== null && onboarding_complete === false: do talent-signup container logic (set session storage and redirect to right page)
// if result !== null && onboarding_complete: redirect to profile view (pass talent object?)

//during onboarding:
//post to DB: /talents/uid/signup

import { Talent } from '../types/talent';
import { Employer } from '../types/employer';

interface returnType {
  page: number;
  complete: boolean;
  type: string;
  wrongLogin: boolean;
}

const server_address = 'http://localhost:3001';

const setSessionStorage = (obj: Talent | Employer, kind: string) => {
  sessionStorage.setItem(kind, JSON.stringify(obj));
};

//if login:
//ask talent and then employee signup.
//if onboarding complete, redirect to login page and fill redux store
//else redirect to signup flow

const handleLogin = async (uid: string) => {
  const user = await fetch(`${server_address}/users/${uid}`)
    .then((res) => res.json())
    .then(
      (json) => {
        //No employee with
        console.log(json);
        if (json.message) {
          if (json.message.includes('No employee with')) {
            setSessionStorage(
              { id: uid, onboardingPage: 0, onboardingComplete: false },
              'employer',
            );
            return {
              page: 0,
              complete: false,
              type: 'employer',
              wrongLogin: false,
            };
          }
          if (json.message.includes('in db')) {
            setSessionStorage(
              { id: uid, onboardingPage: 0, onboardingComplete: false },
              'talent',
            );
            return {
              page: 0,
              complete: false,
              type: 'talent',
              wrongLogin: false,
            };
          }
          setSessionStorage(
            { id: uid, onboardingPage: 0, onboardingComplete: false },
            'talent',
          );
          return {
            page: 0,
            complete: false,
            type: 'talent',
            wrongLogin: true,
          };
        } else {
          const env = json.firstName ? 'talent' : 'employer';
          setSessionStorage(json, env);
          return {
            page: json.onboardingPage,
            complete: json.onboardingComplete,
            type: env,
            wrongLogin: false,
          };
        }
      },
      (error) => {
        console.error(error);
        return {
          page: 0,
          complete: false,
          type: 'talent',
          wrongLogin: false,
        };
      },
    );
  return user;
};

export const redirect = async (
  uid: string,
  kind: string,
): Promise<returnType> => {
  console.log('func redirect', uid, 'kind', kind);
  let status;
  if (kind === 'login') {
    status = await handleLogin(uid);
  } else {
    status = await fetch(`${server_address}/${kind}s/${uid}/signup`)
      .then((res) => res.json())
      .then(
        (json) => {
          console.log(json);
          if (json.message) {
            setSessionStorage(
              { id: uid, onboardingPage: 0, onboardingComplete: false },
              kind,
            );
            return { page: 0, complete: false, type: kind, wrongLogin: false };
          } else {
            setSessionStorage(json, kind);
            return {
              page: json.onboardingPage,
              complete: json.onboardingComplete,
              type: kind,
              wrongLogin: false,
            };
          }
        },
        (error) => {
          console.error(error);
          return {
            page: 0,
            complete: false,
            type: kind,
            wrongLogin: false,
          };
        },
      );
  }
  return status;
};
