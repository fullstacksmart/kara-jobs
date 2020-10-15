import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp3.module.scss';
import Form from '../../Form';
import TextInput from '../../TextInput';
import Label from '../../Label';
import Option from '../../Option';
import Select from '../../Select';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';

const optArray = ['Arbeitssuchend', 'Teilzeit', 'Vollzeit'];

const TalentSignUp3: React.FC = () => {
  const history = useHistory();
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const [info, setInfo] = useState({
    positionName: '',
    occupationStatusId: '',
    employerName: '',
  });

  useEffect(() => {
    const positionNameHTML = document.getElementById(
      'positionName',
    ) as HTMLInputElement;
    const employerNameHTML = document.getElementById(
      'employerName',
    ) as HTMLInputElement;
    if (talent) {
      if (talent.positionName !== undefined)
        positionNameHTML.value = talent.positionName;
      if (talent.employerName !== undefined)
        employerNameHTML.value = talent.employerName;
      if (talent.occupationStatusId !== undefined)
        setInfo({
          occupationStatusId: talent.occupationStatusId,
          positionName: talent.positionName,
          employerName: talent.employerName,
        });
    }
  }, []);

  const updateSession = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>,
  ) => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(
        Object.assign(talent, {
          [e.currentTarget.id]: e.currentTarget.value,
        }),
      ),
    );
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    switch (e.currentTarget.id) {
      case 'positionName':
        setInfo({
          positionName: e.currentTarget.value,
          occupationStatusId: info.occupationStatusId,
          employerName: info.employerName,
        });
        break;
      case 'occupationStatusId':
        setInfo({
          positionName: info.positionName,
          occupationStatusId: e.currentTarget.value,
          employerName: info.employerName,
        });
        break;
      case 'employerName':
        setInfo({
          positionName: info.positionName,
          occupationStatusId: info.occupationStatusId,
          employerName: e.currentTarget.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentObj = {
      ...talent,
      ...info,
      onboarding_page: 5,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
    // post to DB (only relevant props from this page)
    history.push('/talent-signup-5');
  };

  return (
    <div className={styles.TalentSignUp3}>
      <Form onSubmit={handleSubmit} id="position-form">
        <TextInput
          id="positionName"
          labelText="Position*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
        <Label htmlFor="occupationStatusId">
          Derzeitiges Beschäftigungsverhältnis*
        </Label>
        <Select
          id="occupationStatusId"
          value={info.occupationStatusId}
          onChange={handleChange}
          onBlur={(e) => updateSession(e)}
        >
          {optArray.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
        <TextInput
          id="employerName"
          labelText="Letzter oder derzeitiger Arbeitgeber*"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
        ></TextInput>
      </Form>
      <p onClick={() => history.push('/talent-signup-4')}>Ich studiere noch</p>
      <Button onClick={() => history.push('/talent-signup-2')}>Zurück</Button>
      <Button type="submit" value="Submit" form="position-form">
        Submit
      </Button>
    </div>
  );
};

export default TalentSignUp3;
