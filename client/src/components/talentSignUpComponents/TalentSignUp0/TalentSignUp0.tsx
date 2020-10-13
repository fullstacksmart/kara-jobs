import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import ButtonLink from '../../ButtonLink';
import { Link } from 'react-router-dom';

const TalentSignUp0: React.FC = () => {
  const [info, setInfo] = useState({ firstName: '', lastName: '' });
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  useEffect(() => {
    console.log(talent);
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    if (talent) {
      if (talent.firstName !== undefined) firstName.value = talent.firstName;
      if (talent.lastName !== undefined) lastName.value = talent.lastName;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === 'firstName') {
      setInfo({ firstName: e.target.value, lastName: info.lastName });
    } else if (e.target.id === 'lastName') {
      setInfo({ firstName: info.firstName, lastName: e.target.value });
    }
  };

  const updateSession = (e: React.ChangeEvent<HTMLInputElement>): void => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(Object.assign(talent, { [e.target.id]: e.target.value })),
    );
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(Object.assign(talent, { onboarding_status: 1 })),
    );
    // post to DB
  };

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp0}>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="firstName"
            labelText="Vorname*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="lastName"
            labelText="Nachname*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <Link to="/talent-signup-1">
            <button>Hier</button>
          </Link>
          <ButtonLink to="/talent-signup-1">Weiter</ButtonLink>
        </form>
      </div>
    </BlueWrapper>
  );
};

export default TalentSignUp0;
