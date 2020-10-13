import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp1.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';

import Form from '../../Form';
import Select from '../../Select';
import Label from '../../Label';
import Option from '../../Option';

const EmployerSignUp1: React.FC = () => {
  const [info, setInfo] = useState({ companyName: '' });

  const [selectedSector, setSelectedSector] = useState({
    selectedSector: 'sector1',
  });
  const [selectedType, setSelectedType] = useState({
    selectedType: 'type1',
  });

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  // useEffect(() => {
  //   console.log(employer);
  //   const companyName = document.getElementById(
  //     'companyName',
  //   ) as HTMLInputElement;
  //   const sector = document.getElementById('sector') as HTMLInputElement;
  //   const type = document.getElementById('type') as HTMLInputElement;
  //   if (employer) {
  //     if (employer.companyName !== undefined)
  //       companyName.value = employer.companyName;
  //     if (employer.sector !== undefined) sector.value = employer.sector;
  //     if (employer.type !== undefined) type.value = employer.type;
  //   }
  // }, []);

  const handleSelectChange = (e: any): void => {
    console.log(e.target.value);
    setSelectedSector({
      selectedSector: e.target.value,
    });
    setSelectedType({
      selectedType: e.target.value,
    });
  };

  // const updateSession = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   sessionStorage.setItem(
  //     'employer',
  //     JSON.stringify(
  //       Object.assign(employer, { [e.target.id]: e.target.value }),
  //     ),
  //   );
  // };

  const handleSubmit = () => {
    // sessionStorage.setItem(
    //   'employer',
    //   JSON.stringify(Object.assign(employer, { onboarding_status: 2 })),
    // );
    console.log('selected', selectedType);
    console.log('selected', selectedSector);
    console.log(info);
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
            // onChange={handleChange}
            // onBlur={updateSession}
          ></TextInput>
          <Label htmlFor="sectors">Branche*</Label>
          <Select
            value={selectedSector.selectedSector}
            onChange={(e) => handleSelectChange(e.target.id)}
          >
            {sectorArr.map((opt) => (
              <Option key={opt[0]} value={opt[0]}>
                {opt[1]}
              </Option>
            ))}
          </Select>
          <Select
            value={selectedType.selectedType}
            onChange={(e) => handleSelectChange(e.target.id)}
          >
            {typeArr.map((opt) => (
              <Option key={opt[0]} value={opt[0]}>
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
