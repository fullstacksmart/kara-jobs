import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp0.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';

const EmployerSignUp0: React.FC = () => {
  const [info, setInfo] = useState({ companyName: '', sector: '', type: '' });
  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
    console.log(employer);
    const companyName = document.getElementById(
      'companyName',
    ) as HTMLInputElement;
    const sector = document.getElementById('sector') as HTMLInputElement;
    const type = document.getElementById('type') as HTMLInputElement;
    if (employer) {
      if (employer.companyName !== undefined)
        companyName.value = employer.companyName;
      if (employer.sector !== undefined) sector.value = employer.sector;
      if (employer.type !== undefined) type.value = employer.type;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === 'companyName') {
      setInfo({
        companyName: e.target.value,
        sector: info.sector,
        type: info.type,
      });
    } else if (e.target.id === 'sector') {
      setInfo({
        companyName: info.companyName,
        sector: e.target.value,
        type: info.type,
      });
    } else if (e.target.id === 'type') {
      setInfo({
        companyName: info.companyName,
        sector: info.sector,
        type: e.target.type,
      });
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
  };

  return (
    <BlueWrapper>
      <div className={styles.EmployerSignUp0}>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="companyName"
            labelText="Name der Einrichtung/Firma*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="sector"
            labelText="Branche*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <TextInput
            id="type"
            labelText="Art der Einrichtung*"
            onChange={handleChange}
            onBlur={updateSession}
          ></TextInput>
          <Button>Weiter</Button>
        </form>
      </div>
    </BlueWrapper>
  );
};

export default EmployerSignUp0;
