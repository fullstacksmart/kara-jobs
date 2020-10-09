import React, { useState } from 'react';
import EmployerSignUp from '../../containers/EmployerSignUp';
import TalentSignUp from '../../containers/TalentSignUp';
import styles from './InitialSignUpForm.module.scss';

interface InitialSignUpFormProps {}

const InitialSignUpForm: React.FC<InitialSignUpFormProps> = (
  props: InitialSignUpFormProps,
) => {
  const [signUpFlow, setSignUpFlow] = useState('');
  const [talentInfo, setTalentInfo] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    console.log(e.target);
    console.log(e.target.id);
    if (e.target.id === 'email') {
      setTalentInfo({ email: e.target.value, password: talentInfo.password });
    } else if (e.target.id === 'password') {
      setTalentInfo({ email: talentInfo.email, password: e.target.value });
    }
  };

  const handleSubmit = () => {
    setSignUpFlow('talent');
  };

  if (signUpFlow === 'talent') {
    return <TalentSignUp />;
  } else if (signUpFlow === 'employer') {
    return <EmployerSignUp />;
  } else {
    return (
      <div className={styles.InitialSignUpForm}>
        <h1>In wenigen Schritten zu deinem Profil</h1>
        <form onSubmit={handleSubmit}>
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
        <span>Ich bin Arbaitgeber</span>
      </div>
    );
  }
};

export default InitialSignUpForm;
