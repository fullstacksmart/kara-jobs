import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';
import { Redirect } from 'react-router-dom';
import Form from '../../Form';

const TalentSignUp0: React.FC = () => {
  const [info, setInfo] = useState({ firstName: '', lastName: '' });
  const [redirect, setRedirect] = useState(0);
  //TO DO: if session mgmt doesn't contain values of this page, query from DB (async) and then update session mgmt (for this specific page). Once done, set talent.firstName / lastName values.
  //talent obj either contains data from previous pages or is empty or contains some data of this page
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  useEffect(() => {
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

  const updateSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    //adding firstname / lastName props to talent obj (talent obj either contains data from previous pages or is empty or contains some data of this page
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
    // post to DB: only post relevant data of this page
    setRedirect(1);
  };

  if (redirect === 1) return <Redirect push to={`/talent-signup-1`} />;
  else {
    return (
      <BlueWrapper>
        <div className={styles.TalentSignUp0}>
          <Form onSubmit={handleSubmit}>
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
            <Button>Weiter</Button>
          </Form>
        </div>
      </BlueWrapper>
    );
  }
};

export default TalentSignUp0;
