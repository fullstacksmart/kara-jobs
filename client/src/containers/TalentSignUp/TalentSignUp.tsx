import React from 'react';
import styles from './TalentSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import { Redirect } from 'react-router-dom';

//TO DO: replace with data from signIn Success Component (talent object from DB)
const uid = '123';
const email = 'test@gmail.com';
const onboarding_status = 0;

interface TalentSignUpProps {
  talentInfo: TalentInfo;
}

const TalentSignUp: React.FC<TalentSignUpProps> = (
  props: TalentSignUpProps,
) => {
  //TO DO: 1. Update Session Storage with Talent Obj; 2. Redirect to right page in Onboarding;
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
