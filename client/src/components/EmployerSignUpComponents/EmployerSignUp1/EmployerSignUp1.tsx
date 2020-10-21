import React, { useState, useEffect } from 'react';
import styles from './EmployerSignUp1.module.scss';
import BlueWrapper from '../../../containers/BlueWrapper';
import TextInput from '../../TextInput';
import Button from '../../Button';
import Form from '../../Form';
import Select from '../../Select';
import Label from '../../Label';
import Option from '../../Option';
import ProgressBar from '../../ProgressBarEmployer';
import logo from '../../../assets/logos/kara_gradient.png';
import { useHistory } from 'react-router-dom';

const EmployerSignUp1: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ companyName: '' });
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [types, setTypes] = useState([]);

  const employer = JSON.parse(sessionStorage.getItem('employer') as string);
  console.log(employer);

  useEffect(() => {
    const companyName = document.getElementById(
      'companyName',
    ) as HTMLInputElement;
    if (employer) {
      if (employer.companyName !== undefined)
        companyName.value = employer.companyName;
    }
  }, []);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    setInfo({
      companyName: e.currentTarget.value,
    });
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

  const sectorObj: { [index: string]: any } = {
    Pflege: [
      'Krankenhaus',
      'Pflegeheim',
      'ambulanter Pflegedienst',
      'Reha',
      'Praxis',
    ],
    Medizin: [
      'Krankenhaus',
      'Arztpraxis',
      'Medizinisches Forschungsinstitut',
      'Sanatorium',
    ],
    'Personal & Beretung': [
      'Personalvermittlung',
      'Sprachschule',
      'Migrationsrecht',
      'Arbeitsrecht',
      'Sonstige',
    ],
    Technologie: ['Sonstige'],
  };

  const sectorList = Object.keys(sectorObj).map((key) => ({
    name: key,
  }));

  const handleSelectedSector = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    const sectorSel = e.currentTarget.value;
    const typeSel = sectorSel !== '' ? sectorObj[sectorSel] : '';
    setSelectedSector(sectorSel);
    setTypes(typeSel);
    setSelectedType('');
  };

  const handleSelectedType = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>,
  ) => {
    const typeSel = e.currentTarget.value;
    setSelectedType(typeSel);
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

  return (
    <BlueWrapper>
      <div className={styles.EmployerSignUp1}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <ProgressBar
            angaben={true}
            talentsuche={false}
            bewerbungsmanagement={false}
          />
        </div>
        <div className={styles.FormWrapper}>
          <Form onSubmit={handleSubmit} className={styles.Form}>
            <TextInput
              id="companyName"
              labelText="Name der Einrichtung/Firma*"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => updateSession(e)}
              required={true}
            ></TextInput>
            <Label htmlFor="sector">Branche*</Label>
            <Select
              id="sector"
              value={selectedSector}
              onChange={(e) => handleSelectedSector(e)}
              onBlur={(e) => updateSession(e)}
              required={true}
            >
              {sectorList.map((sector, key) => (
                <Option key={key} value={sector.name}>
                  {sector.name}
                </Option>
              ))}
            </Select>
            <Label htmlFor="type">Art der Einrichtung*</Label>
            <Select
              id="type"
              value={selectedType}
              onChange={(e) => handleSelectedType(e)}
              onBlur={(e) => updateSession(e)}
            >
              {types.map((type, key) => (
                <Option key={key} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
            <Button>Weiter</Button>
          </Form>
        </div>
      </div>
    </BlueWrapper>
  );
};

export default EmployerSignUp1;
