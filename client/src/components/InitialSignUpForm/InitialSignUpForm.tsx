import React, { useState } from 'react';
import EmployerSignUp from '../../containers/EmployerSignUp';
import TalentSignUp from '../../containers/TalentSignUp';
import { TalentInfo } from '../../types/signup';
import styles from './InitialSignUpForm.module.scss';
import BlueWrapper from '../../containers/BlueWrapper';

const InitialSignUpForm: React.FC<unknown> = () => {
  const [signUpFlow, setSignUpFlow] = useState('');
  const [talentInfo, setTalentInfo] = useState<TalentInfo>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setTalentInfo({ email: e.target.value, password: talentInfo.password });
    } else if (e.target.id === 'password') {
      setTalentInfo({ email: talentInfo.email, password: e.target.value });
    }
  };

  const handleSubmit = (identifier: string) => {
    identifier === 'employer'
      ? setSignUpFlow(identifier)
      : setSignUpFlow('talent');
  };

  if (signUpFlow === 'talent') {
    return <TalentSignUp talentInfo={talentInfo} />;
  } else if (signUpFlow === 'employer') {
    return <EmployerSignUp />;
  } else {
    return (
      <BlueWrapper>
        <h1>In wenigen Schritten zu deinem Profil</h1>
        {/* TODO: fix onSubmit function */}
        <form
          onSubmit={() => {
            console.log('change me!');
          }}
        >
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          ></input>
          <label>Password</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
          ></input>
          <button>Registrieren</button>
        </form>
        <button onClick={() => handleSubmit('employer')}>
          Ich bin Arbaitgeber
        </button>
      </BlueWrapper>
    );
  }
};

export default InitialSignUpForm;
