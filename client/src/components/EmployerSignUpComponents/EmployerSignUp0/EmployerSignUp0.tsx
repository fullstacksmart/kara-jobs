import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';
import { Redirect } from 'react-router-dom';

const EmployerSignUp0: React.FC = () => {
  const [info, setInfo] = useState({ firstName: '', lastName: '' });
  const [redirect, setRedirect] = useState(0);
  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    if (employer) {
      if (employer.firstName !== undefined)
        firstName.value = employer.firstName;
      if (employer.lastName !== undefined) lastName.value = employer.lastName;
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
      'employer',
      JSON.stringify(
        Object.assign(employer, { [e.target.id]: e.target.value }),
      ),
    );
  };

  const handleSubmit = () => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(Object.assign(employer, { onboarding_status: 1 })),
    );
    setRedirect(1);
  };

  if (redirect === 1) return <Redirect to={`/employer-signup-1`} />;
  else {
    return (
      <BlueWrapper>
        <div className={styles.EmployerSignUp0}>
          <form onSubmit={handleSubmit}>
            <TextInput
              id="firstName"
              labelText="Vorname (Ansprechpartner)*"
              onChange={handleChange}
              onBlur={updateSession}
            ></TextInput>
            <TextInput
              id="lastName"
              labelText="Nachname (Ansprechpartner)*"
              onChange={handleChange}
              onBlur={updateSession}
            ></TextInput>
            <Button>Weiter</Button>
          </form>
        </div>
      </BlueWrapper>
    );
  }
};

export default EmployerSignUp0;
