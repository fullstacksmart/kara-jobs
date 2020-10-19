import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import RadioInput from '../../RadioInput';
import { useHistory } from 'react-router-dom';

const EmployerSignUp5: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ agencyApplications: 0 });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    if (employer && employer.agencyApplications !== undefined) {
      setInfo({
        agencyApplications: employer.agencyApplications,
      });
    }
  }, []);

  const updateSession = (identifier: number): void => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, { agencyApplications: identifier }),
      ),
    );
  };

  const handleOptionChange = (identifier: number): void => {
    setInfo({ agencyApplications: identifier });
    updateSession(identifier);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const employerObj = {
      ...employer,
      ...info,
      onboarding_page: 6,
    };
    sessionStorage.setItem('talent', JSON.stringify(employerObj));
    // post to DB
    history.push('/employer-profile');
  };

  return (
    <div>
      <p>
        Ihre Einstellungen haben Einfluss darauf, ob Sie für internationale
        Talente sichtbar sind oder nur Sie interessante Talente kontaktieren
        können
      </p>
      <p>Sie können die Auswahl in Ihrem Profil jederzeit ändern.</p>
      <p>
        Ich möchte auch von Personalvermittlungsagenturen kontaktiert werden
        können, sofern diese interessante Talente betreuen
      </p>
      <Form onSubmit={handleSubmit} id="agencyApplications-form">
        <RadioInput
          labelText="Ja"
          id="Ja"
          name="Ja"
          value="Ja"
          checked={info.agencyApplications === 1}
          onChange={() => handleOptionChange(1)}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="Nein"
          name="Nein"
          value="Nein"
          checked={info.agencyApplications === 2}
          onChange={() => handleOptionChange(2)}
        ></RadioInput>
      </Form>
      <Button type="submit" value="Submit" form="agencyApplications-form">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp5;
