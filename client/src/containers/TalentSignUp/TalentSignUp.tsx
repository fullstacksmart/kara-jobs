import React, { useEffect } from 'react';
//import styles from './TalentSignUp.module.scss';
import { useHistory } from 'react-router-dom';

//TO DO: replace with data from signIn Handler Container (talent object from DB)
//this object will include all infos relevant up to onboarding page

const TalentSignUp: React.FC = () => {
  const history = useHistory();
  const uid = '123';
  const email = 'test@gmail.com';
  const onboarding_page = 0;
  //Updating session mgmt with talent object

  const setStorage = () => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        uid: uid,
        email: email,
        onboarding_page: onboarding_page,
      }),
    );
  };

  const redirect = () => {
    history.push(`/talent-signup-${onboarding_page}`);
  };

  useEffect(() => {
    setStorage();
    redirect();
  });

  return <></>;
};

export default TalentSignUp;
