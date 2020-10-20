import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import RadioInput from '../../RadioInput';
import { useHistory } from 'react-router-dom';
import Label from '../../Label';

const EmployerSignUp5: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    agencyApplications: false,
    internationalApplications: false,
  });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  const updateSession = (): void => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          agencyApplications: info.agencyApplications,
          internationalApplications: info.internationalApplications,
        }),
      ),
    );
  };

  useEffect(() => {
    if (employer) {
      if (
        employer.agencyApplications !== undefined &&
        employer.internationalApplications !== undefined
      ) {
        setInfo({
          agencyApplications: employer.agencyApplications,
          internationalApplications: employer.internationalApplications,
        });
      }
    }
  }, []);

  //good until here

  const handleOptionChange = (
    identifier: string | React.FormEvent<HTMLSelectElement>,
  ): void => {
    if (typeof identifier === 'string') {
      if (identifier === 'agencyTrue') {
        setInfo((info) => {
          return {
            ...info,
            agencyApplications: !employer.agencyApplications,
          };
        });
      } else if (identifier === 'agencyFalse') {
        setInfo((info) => {
          return {
            ...info,
            agencyApplications: employer.agencyApplications,
          };
        });
      } else if (identifier === 'internationalTrue') {
        setInfo((info) => {
          return {
            ...info,
            agencyApplications: !employer.internationalApplications,
          };
        });
      } else if (identifier === 'internationalFalse') {
        setInfo((info) => {
          return {
            ...info,
            agencyApplications: employer.internationalApplications,
          };
        });
      }
    }
    updateSession();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/employer-profile');
  };

  console.log(employer);

  return (
    <div>
      <p>
        Ihre Einstellungen haben Einfluss darauf, ob Sie für internationale
        Talente sichtbar sind oder nur Sie interessante Talente kontaktieren
        können
      </p>
      <p>Sie können die Auswahl in Ihrem Profil jederzeit ändern.</p>
      <Form onSubmit={handleSubmit} id="applications-form">
        <Label>
          Ich möchte auch von Personalvermittlungsagenturen kontaktiert werden
          können, sofern diese interessante Talente betreuen
        </Label>
        <RadioInput
          labelText="Ja"
          id="true"
          name="true"
          value="true"
          checked={info.agencyApplications}
          onChange={() => handleOptionChange('agencyTrue')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="false"
          name="false"
          value="false"
          checked={info.agencyApplications}
          onChange={() => handleOptionChange('agencyFalse')}
        ></RadioInput>
      </Form>
      <Form onSubmit={handleSubmit} id="intApplications-form">
        <Label>
          Ich möchte Bewerbungen von internationalen Talenten erhalten können
        </Label>
        <RadioInput
          labelText="Ja"
          id="true"
          name="true"
          value="true"
          checked={info.internationalApplications}
          onChange={() => handleOptionChange('internationalTrue')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="false"
          name="false"
          value="false"
          checked={info.internationalApplications}
          onChange={() => handleOptionChange('internationalFalse')}
        ></RadioInput>
      </Form>
      <Button type="submit" value="Submit" form="intApplications-form">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp5;
