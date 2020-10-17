import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp1.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';
import Form from '../../Form';
import Select from '../../Select';
import Label from '../../Label';
import Option from '../../Option';
import { useHistory } from 'react-router-dom';

const EmployerSignUp1: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ companyName: '', sector: '', type: '' });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  useEffect(() => {
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

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    switch (e.currentTarget.id) {
      case 'companyName':
        setInfo({
          companyName: e.currentTarget.value,
          sector: info.sector,
          type: info.type,
        });
        break;
      case 'sector':
        setInfo({
          companyName: info.companyName,
          sector: e.currentTarget.value,
          type: info.type,
        });
        break;
      case 'type':
        setInfo({
          companyName: info.companyName,
          sector: info.sector,
          type: e.currentTarget.value,
        });
        break;
      default:
        break;
    }
  };

  const updateSession = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>,
  ) => {
    sessionStorage.setItem(
      'employer',
      JSON.stringify(
        Object.assign(employer, {
          [e.currentTarget.id]: e.currentTarget.value,
        }),
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const employerObj = {
      ...employer,
      ...info,
      onboarding_page: 2,
    };
    sessionStorage.setItem('employer', JSON.stringify(employerObj));
    // post to DB: only post relevant data of this page
    //postToDB(employerObj);
    history.push('/employer-signup-2');
  };

  const sectorArr = [
    ['id1', 'sector1'],
    ['id2', 'sector2'],
    ['id3', 'sector3'],
  ];

  const typeArr = [
    ['id1', 'type1'],
    ['id2', 'type2'],
    ['id3', 'type3'],
  ];

  return (
    <BlueWrapper>
      <div className={styles.EmployerSignUp1}>
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="companyName"
            labelText="Name der Einrichtung/Firma*"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => updateSession(e)}
          ></TextInput>
          <Label htmlFor="sectors">Branche*</Label>
          <Select
            id="sector"
            value={info.sector}
            onChange={handleChange}
            onBlur={(e) => updateSession(e)}
          >
            {sectorArr.map((opt) => (
              <Option key={opt[0]} value={opt[1]}>
                {opt[1]}
              </Option>
            ))}
          </Select>
          <Select
            id="type"
            value={info.type}
            onChange={handleChange}
            onBlur={(e) => updateSession(e)}
          >
            {typeArr.map((opt) => (
              <Option key={opt[0]} value={opt[1]}>
                {opt[1]}
              </Option>
            ))}
          </Select>
          <Button>Weiter</Button>
        </Form>
      </div>
    </BlueWrapper>
  );
};

export default EmployerSignUp1;
