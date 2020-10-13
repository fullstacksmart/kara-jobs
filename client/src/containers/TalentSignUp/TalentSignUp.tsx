import React from 'react';
//import styles from './TalentSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import { Redirect } from 'react-router-dom';

//TO DO: replace with data from signIn Success Component (talent object from DB)
const uid = '123';
const email = 'test@gmail.com';
const onboarding_status = 0;
//TO DO: container gets uid, email and onboarding_status from SignIn container

interface TalentSignUpProps {
  talentInfo: TalentInfo;
}

const TalentSignUp: React.FC<TalentSignUpProps> = (
  props: TalentSignUpProps,
) => {
  sessionStorage.setItem(
    'talent',
    JSON.stringify({
      uid: uid,
      email: email,
      onboarding_status: onboarding_status,
    }),
  );

  return (
    <>
      <Redirect to={`/talent-signup-${onboarding_status}`} />
    </>
  );
};

export default TalentSignUp;
