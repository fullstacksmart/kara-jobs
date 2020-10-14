import React from 'react';
//import styles from './TalentSignUp.module.scss';
import { Redirect } from 'react-router-dom';

//TO DO: replace with data from signIn Handler Container (talent object from DB)
//this object will include all infos relevant up to onboarding page
const uid = '123';
const email = 'test@gmail.com';
const onboarding_page = 0;

const TalentSignUp: React.FC = () => {
  //Updating session mgmt with talent object
  sessionStorage.setItem(
    'talent',
    JSON.stringify({
      uid: uid,
      email: email,
      onboarding_page: onboarding_page,
    }),
  );

  return (
    <>
      <Redirect to={`/talent-signup-${onboarding_page}`} />
    </>
  );
};

export default TalentSignUp;
