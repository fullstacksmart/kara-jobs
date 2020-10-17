import React from 'react';
// import styles from './EmployerSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import { Redirect } from 'react-router-dom';

//TO DO: Change signup type interface to fit talent and employer signup
const uid = 'ABC';
const email = 'test@gmail.com';
const onboarding_status = 0;

interface EmployerSignUpProps {
  employerInfo: TalentInfo;
}

const EmployerSignUp: React.FC<EmployerSignUpProps> = (
  props: EmployerSignUpProps,
) => {
  sessionStorage.setItem(
    'employer',
    JSON.stringify({
      uid: uid,
      email: email,
      onboarding_status: onboarding_status,
    }),
  );

  return (
    <>
      <Redirect to={`/employer-signup-4`} />
    </>
  );
};

export default EmployerSignUp;
