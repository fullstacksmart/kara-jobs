import React, { SyntheticEvent } from 'react';
import styles from './TalentRegistration.module.scss';
import TextInput from '../../components/TextInput';
import Button from '../Button';
import TextLink from '../TextLink';
import Details from '../Details';

const TalentRegistration: React.FC<unknown> = () => {
  const handleChange: React.EventHandler<SyntheticEvent> = (
    event: SyntheticEvent,
  ) => {
    console.log(event);
  };
  const handleSubmit = (
    kind: string,
    event?: React.MouseEvent<HTMLButtonElement>,
  ) => {
    console.log(event, kind);
  };
  const login = () => {
    console.log('go to login');
  };

  return (
    <div className={styles.TalentRegistration}>
      <h1>In wenigen Schritten zu deinem Profil</h1>
      <form
        onSubmit={() => {
          console.log('change me!');
        }}
      >
        <TextInput id="email" labelText="Email" onClick={handleChange} />
        <TextInput id="password" labelText="Passwort" onClick={handleChange} />
        <Button type="submit" onClick={() => handleSubmit('talent')}>
          registrieren
        </Button>
        <Details>
          <p>
            Schon angemeldet?{' '}
            {/* <TextLink href="#" onClick={login} text="Sign In" /> */}
          </p>
        </Details>
      </form>
      {/* <TextLink href="/signedIn" text="Ich bin Arbeitgeber" /> */}
    </div>
  );
};

export default TalentRegistration;
