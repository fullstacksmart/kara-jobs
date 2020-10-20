import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp2.module.scss';
import { useHistory } from 'react-router-dom';
import Form from '../../Form';
import RadioInput from '../../RadioInput';
import Button from '../../Button';
import BlueWrapper from '../../../containers/BlueWrapper';
import ProgressBar from '../../ProgressBar';
import logo from '../../../assets/logos/kara_lightblue.png';
import doctorIcon from '../../../assets/icons/doctor.png';
import nurseIcon from '../../../assets/icons/nurse.png';
import healthcareIcon from '../../../assets/icons/healthcare.png';

const TalentSignUp2: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ occupationId: '' });

  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  useEffect(() => {
    if (talent && talent.occupationId !== undefined) {
      setInfo({ occupationId: talent.occupationId });
    }
  }, []);

  const updateSession = (identifier: string): void => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify(Object.assign(talent, { occupationId: identifier })),
    );
  };

  const handleOptionChange = (identifier: string): void => {
    setInfo({ occupationId: identifier });
    updateSession(identifier);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentObj = {
      ...talent,
      ...info,
      onboarding_page: 3,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
    // post to DB
    history.push('/talent-signup-3');
  };

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp2}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <ProgressBar profil={true} anerkennung={false} dokumente={false} />
          <div className={styles.Text}>Welchen Job machst du derzeit?</div>
        </div>
        <div className={styles.FormWrapper}>
          <Form onSubmit={handleSubmit} id="occupationId-form">
            <div className={styles.RadioContainer}>
              <div className={styles.IconContainer}>
                <img src={nurseIcon} className={styles.Icon} />
                <RadioInput
                  labelText=" Krankenpfleger"
                  id="0"
                  name="0"
                  value="0"
                  checked={info.occupationId === '0'}
                  onChange={() => handleOptionChange('0')}
                ></RadioInput>
              </div>
              <div className={styles.IconContainer}>
                <img src={doctorIcon} className={styles.Icon} />
                <RadioInput
                  labelText=" Arzt"
                  id="1"
                  name="1"
                  value="1"
                  checked={info.occupationId === '1'}
                  onChange={() => handleOptionChange('1')}
                ></RadioInput>
              </div>
              <div className={styles.IconContainer}>
                <img src={healthcareIcon} className={styles.Icon} />
                <RadioInput
                  className={styles.HoverOverMe}
                  labelText=" Sonstiges med Personal"
                  id="2"
                  name="2"
                  value="2"
                  checked={info.occupationId === '2'}
                  onChange={() => handleOptionChange('2')}
                ></RadioInput>
              </div>
            </div>
          </Form>
          <div
            onClick={() => history.push('/talent-signup-4')}
            className={styles.TextLink}
          >
            Ich studiere noch
          </div>
          <div className={styles.ButtonWrapper}>
            <Button onClick={() => history.push('/talent-signup-1')}>
              Zurück
            </Button>
            <Button type="submit" value="Submit" form="occupationId-form">
              Weiter
            </Button>
          </div>
        </div>
      </div>
    </BlueWrapper>
  );
};

export default TalentSignUp2;
