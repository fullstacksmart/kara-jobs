import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';

const EmployerSignUp0: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ firstName: '', lastName: '' });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    if (employer) {
      if (employer.firstName && firstName.value)
        firstName.value = employer.firstName;
      if (employer.lastName && lastName.value)
        lastName.value = employer.lastName;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const employerObj = {
      ...employer,
      ...info,
      onboarding_page: 1,
    };
    sessionStorage.setItem('employer', JSON.stringify(employerObj));
    // post to DB: only post relevant data of this page
    //postToDB(employerObj);
    history.push('/employer-signup-1');
  };

  return (
    <BlueWrapper>
      <div className={styles.EmployerSignUp0}>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="firstName"
            labelText="Vorname (Ansprechpartner)*"
            onChange={handleChange}
            onBlur={updateSession}
            required={true}
          ></TextInput>
          <TextInput
            id="lastName"
            labelText="Nachname (Ansprechpartner)*"
            onChange={handleChange}
            onBlur={updateSession}
            required={true}
          ></TextInput>
          <Button type="submit">Weiter</Button>
        </form>
      </div>
    </BlueWrapper>
  );
};

export default EmployerSignUp0;
