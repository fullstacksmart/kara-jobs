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
    specialistApplications: true,
    agencyApplications: true,
    internationalApplications: true,
    approbationTraining: true,
  });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  const updateSession = (): void => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          agencyApplications: info.agencyApplications,
          internationalApplications: info.internationalApplications,
          specialistApplications: info.specialistApplications,
          approbationTraining: info.approbationTraining,
          onboarding_page: 6,
        }),
      ),
    );
  };

  useEffect(() => {
    updateSession();
  }, [info]);
  useEffect(() => {
    if (employer) {
      if (
        employer.agencyApplications !== undefined &&
        employer.internationalApplications !== undefined &&
        employer.specialistApplications !== undefined &&
        employer.approbationTraining !== undefined
      ) {
        setInfo({
          agencyApplications: info.agencyApplications,
          internationalApplications: info.internationalApplications,
          specialistApplications: info.specialistApplications,
          approbationTraining: info.approbationTraining,
        });
      }
    }
  }, []);

  const handleOptionChange = (
    identifier: string | React.FormEvent<HTMLSelectElement>,
  ): void => {
    if (typeof identifier === 'string') {
      if (identifier === 'agency') {
        setInfo((prevState) => {
          return {
            ...prevState,
            agencyApplications: !prevState.agencyApplications,
          };
        });
      } else if (identifier === 'international') {
        setInfo((prevState) => {
          return {
            ...prevState,
            internationalApplications: !prevState.internationalApplications,
          };
        });
      } else if (identifier === 'specialist') {
        setInfo((prevState) => {
          return {
            ...prevState,
            specialistApplications: !prevState.specialistApplications,
          };
        });
      } else if (identifier === 'trainings') {
        setInfo((prevState) => {
          return {
            ...prevState,
            approbationTraining: !prevState.approbationTraining,
          };
        });
      }
    }
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
          Wir möchten Initiativbewerbungen von examinierten Fachkräften erhalten
        </Label>
        <RadioInput
          labelText="Ja"
          id="specialistTrue"
          name="specialistTrue"
          value="specialistTrue"
          checked={info.specialistApplications}
          onChange={() => handleOptionChange('specialist')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="specialistFalse"
          name="specialistFalse"
          value="specialistFalse"
          checked={!info.specialistApplications}
          onChange={() => handleOptionChange('specialist')}
        ></RadioInput>
        <Label>
          Wir bieten Anerkennungslehrgänge für internationale Pflegekräfte an
        </Label>
        <RadioInput
          labelText="Ja"
          id="trainingsTrue"
          name="trainingsTrue"
          value="trainingsTrue"
          checked={info.approbationTraining}
          onChange={() => handleOptionChange('trainings')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="trainingsFalse"
          name="trainingsFalse"
          value="trainingsFalse"
          checked={!info.approbationTraining}
          onChange={() => handleOptionChange('trainings')}
        ></RadioInput>
        <Label>
          Ich möchte Bewerbungen von internationalen Talenten erhalten können
        </Label>
        <RadioInput
          labelText="Ja"
          id="internationalTrue"
          name="internationalTrue"
          value="internationalTrue"
          checked={info.internationalApplications}
          onChange={() => handleOptionChange('international')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="internationalFalse"
          name="internationalFalse"
          value="internationalFalse"
          checked={!info.internationalApplications}
          onChange={() => handleOptionChange('international')}
        ></RadioInput>
        <Label>
          Ich möchte auch von Personalvermittlungsagenturen kontaktiert werden
          können, sofern diese interessante Talente betreuen
        </Label>
        <RadioInput
          labelText="Ja"
          id="agencyTrue"
          name="agencyTrue"
          value="agencyTrue"
          checked={info.agencyApplications}
          onChange={() => handleOptionChange('agency')}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="agencyFalse"
          name="agencyFalse"
          value="agencyFalse"
          checked={!info.agencyApplications}
          onChange={() => handleOptionChange('agency')}
        ></RadioInput>
      </Form>
      <Button type="submit" value="Submit" form="applications-form">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp5;
