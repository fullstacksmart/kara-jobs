import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp7.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import RadioInputHorizontal from '../../RadioInputHorizontal';
import { useHistory } from 'react-router-dom';
import Label from '../../Label';
import Select from '../../Select';
import Option from '../../Option';
import BlueWrapper from '../../../containers/BlueWrapper';
import ProgressBar from '../../ProgressBar';
import logo from '../../../assets/logos/kara_lightblue.png';

const TalentSignUp7: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    approbationFeedbackFlag: false,
    approbationStatus: '',
  });

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const setDropdown = (flag: boolean) => {
    const dropdown = document.getElementById(
      'approbationStatus',
    ) as HTMLInputElement;
    if (flag === true) {
      dropdown.removeAttribute('disabled');
    } else if (flag === false) {
      dropdown.setAttribute('disabled', 'true');
      setInfo({
        approbationFeedbackFlag: flag,
        approbationStatus: '',
      });
    }
  };

  useEffect(() => {
    if (
      talent &&
      talent.approbationFeedbackFlag !== undefined &&
      talent.approbationStatus !== undefined
    ) {
      setInfo({
        approbationFeedbackFlag: talent.approbationFeedbackFlag,
        approbationStatus: talent.approbationStatus,
      });
      if (talent.approbationFeedbackFlag === true) setDropdown(true);
    }
  }, []);

  const updateSession = (
    e: React.FormEvent<HTMLSelectElement> | boolean,
  ): void => {
    if (typeof e === 'boolean') {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(Object.assign(talent, { approbationFeedbackFlag: e })),
      );
    } else {
      sessionStorage.setItem(
        'talent',
        JSON.stringify(
          Object.assign(talent, {
            approbationStatus: e.currentTarget.value,
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
          approbationFeedbackFlag: e,
          approbationStatus: info.approbationStatus,
        });
      }
      setDropdown(e);
      updateSession(e);
    } else {
      setInfo({
        approbationFeedbackFlag: info.approbationFeedbackFlag,
        approbationStatus: e.currentTarget.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentObj = {
      ...talent,
      ...info,
      onboarding_page: 8,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
    // post to DB
    history.push('/talent-signup-8');
  };

  const optArray = [
    '',
    'Antrag wird geprüft',
    'Anerkennungsbescheid liegt vor',
    'Antrag abgelehnt',
  ];

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp7}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <ProgressBar profil={false} anerkennung={true} dokumente={false} />
        </div>
        <div className={styles.FormWrapper}>
          <div className={styles.FormContainer}>
            <Form onSubmit={handleSubmit} id="approbation-feedback-form">
              <div className={styles.Text}>
                Hast du schon Rückmeldung von der Behörde erhalten?
              </div>
              <div className={styles.RadioContainer}>
                <div className={styles.ItemContainer}>
                  <RadioInputHorizontal
                    labelText="Ja"
                    id="true"
                    name="true"
                    value="true"
                    checked={info.approbationFeedbackFlag === true}
                    onChange={() => handleChange(true)}
                  ></RadioInputHorizontal>
                </div>
                <div className={styles.ItemContainer}>
                  <RadioInputHorizontal
                    labelText="Nein"
                    id="false"
                    name="false"
                    value="false"
                    checked={info.approbationFeedbackFlag === false}
                    onChange={() => handleChange(false)}
                  ></RadioInputHorizontal>
                </div>
              </div>
              <div className={styles.DropDownContainer}>
                <Label htmlFor="approbationStatus">
                  Was ist der letzte Status deiner Anerkennung?
                </Label>
                <Select
                  id="approbationStatus"
                  value={info.approbationStatus}
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
              </div>
            </Form>
          </div>
          <div className={styles.ButtonWrapper}>
            <Button onClick={() => history.push('/talent-signup-6')}>
              Zurück
            </Button>
            <Button
              type="submit"
              value="Submit"
              form="approbation-feedback-form"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </BlueWrapper>
  );
};

export default TalentSignUp7;
