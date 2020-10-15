import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp6.module.scss';
import Form from '../../Form';
import RadioInput from '../../RadioInput';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import Label from '../../Label';
import Select from '../../Select';
import Option from '../../Option';

const TalentSignUp6: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    approbationStartedFlag: false,
    approbationFederalState: '',
  });

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const setDropdown = (flag: boolean) => {
    const dropdown = document.getElementById(
      'approbationFederalState',
    ) as HTMLInputElement;
    if (flag === true) {
      dropdown.removeAttribute('disabled');
    } else if (flag === false) {
      dropdown.setAttribute('disabled', 'true');
      setInfo({
        approbationStartedFlag: flag,
        approbationFederalState: '',
      });
    }
  };

  useEffect(() => {
    if (
      talent &&
      talent.approbationStartedFlag !== undefined &&
      talent.approbationFederalState !== undefined
    ) {
      setInfo({
        approbationStartedFlag: talent.approbationStartedFlag,
        approbationFederalState: talent.approbationFederalState,
      });
      if (talent.approbationStartedFlag === true) setDropdown(true);
    }
  }, []);

  const updateSession = (
    e: React.FormEvent<HTMLSelectElement> | boolean,
  ): void => {
    if (typeof e === 'boolean') {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(Object.assign(talent, { approbationStartedFlag: e })),
      );
    } else {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(
          Object.assign(talent, {
            approbationFederalState: e.currentTarget.value,
          }),
        ),
      );
    }
  };
  const handleChange = (
    e: React.FormEvent<HTMLSelectElement> | boolean,
  ): void => {
    if (typeof e === 'boolean') {
      if (e === true) {
        setInfo({
          approbationStartedFlag: e,
          approbationFederalState: info.approbationFederalState,
        });
      }
      setDropdown(e);
      updateSession(e);
    } else {
      setInfo({
        approbationStartedFlag: info.approbationStartedFlag,
        approbationFederalState: e.currentTarget.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        ...talent,
        ...info,
      }),
    );
    // post to DB
    if (info.approbationStartedFlag === false) {
      history.push('/talent-signup-8');
    } else if (info.approbationStartedFlag === true) {
      history.push('/talent-signup-7');
    }
  };

  const optArray = [
    '',
    'Nordrhein-Westfalen',
    'Niedersachen',
    'Bayern',
    'Rheinland-Pfalz',
    'Hessen',
    'Saarland',
    'Berlin',
    'Brandenburg',
    'Schleswig-Holstein',
    'Mecklenburg-Vorpommern',
    'Thüringen',
    'Sachen',
    'Sachsen-Anhalt',
    'Bremen',
    'Baden-Württemberg',
    'Hamburg',
  ];

  return (
    <div className={styles.TalentSignUp6}>
      <Form onSubmit={handleSubmit} id="occupationId-form">
        <p>
          Hast du schon Mal einen Antrag zur Anerkennung deiner Ausbildung bei
          einer deutschen Behörde eingereicht?*
        </p>
        <RadioInput
          labelText="Ja"
          id="true"
          name="true"
          value="true"
          checked={info.approbationStartedFlag === true}
          onChange={() => handleChange(true)}
        ></RadioInput>
        <RadioInput
          labelText="Nein"
          id="false"
          name="false"
          value="false"
          checked={info.approbationStartedFlag === false}
          onChange={() => handleChange(false)}
        ></RadioInput>
        <Label htmlFor="approbationFederalState">
          Erwartetes Abschlussjahr*
        </Label>
        <Select
          id="approbationFederalState"
          value={info.approbationFederalState}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => updateSession(e)}
          disabled
        >
          {optArray.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
        <Button type="submit">Weiter</Button>
      </Form>
    </div>
  );
};

export default TalentSignUp6;
