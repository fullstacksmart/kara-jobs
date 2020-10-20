import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from './reducers';

// query DB (talent or employer route) : /talents/uid/signup
// if error: redirect to first page in onboarding and talentsignup container logic (save uid in session mgmt) //no post to DB yet
// if result !== null && onboarding_complete === false: do talent-signup container logic (set session storage and redirect to right page)
// if result !== null && onboarding_complete: redirect to profile view (pass talent object?)

//during onboarding:
//post to DB: /talents/uid/signup

//TO DO: Add to .env file
const server_address = 'http://localhost:3001';

export const redirect = (uid: string, type: string) => {
  //query DB
  fetch(`${server_address}/${type}s/${uid}/signup`)
    .then((res) => res.json())
    .then((json) => {
      //if onboarding_complete === true goToProfile(obj, type)
      console.log(json);
    });
};

// const goToSignup = (obj) => {};

// const goToProfile = (obj, type) => {};
