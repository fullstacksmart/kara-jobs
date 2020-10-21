import React, { useState, useEffect } from 'react';
import styles from './TalentSignUp2.module.scss';
import { useHistory } from 'react-router-dom';
import Form from '../../Form';
import RadioInput from '../../RadioInput';
import Button from '../../Button';
import BlueWrapper from '../../../containers/BlueWrapper';
import ProgressBar from '../../ProgressBarTalent';
import logo from '../../../assets/logos/kara_gradient.png';
import doctorIcon from '../../../assets/icons/doctor.png';
import nurseIcon from '../../../assets/icons/nurse.png';
import healthcareIcon from '../../../assets/icons/healthcare.png';
import { Talent } from '../../../types/talent';

const TalentSignUp2: React.FC = () => {
  const history = useHistory();
  const [info, setInfo] = useState({ occupationId: 1 });

  const talent = JSON.parse(
    sessionStorage.getItem('talent') as string,
  ) as Talent;

  useEffect(() => {
    if (
      talent &&
      talent.registrationExperience &&
      talent.registrationExperience.occupationId
    ) {
      setInfo({ occupationId: talent.registrationExperience.occupationId });
    }
  }, []);

  const updateSession = (identifier: number): void => {
    sessionStorage.setItem(
      'talent',
      JSON.stringify({
        ...talent,
        registrationExperience: {
          ...talent.registrationExperience,
          occupationId: identifier,
        },
      }),
    );
  };

  const handleOptionChange = (identifier: number): void => {
    setInfo({ occupationId: identifier });
    updateSession(identifier);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentObj = {
      ...talent,
      registrationExperience: { ...talent.registrationExperience, ...info },
      onboardingPage: 3,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
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
                  id="1"
                  name="1"
                  value="1"
                  checked={info.occupationId === 1}
                  onChange={() => handleOptionChange(1)}
                ></RadioInput>
              </div>
              <div className={styles.IconContainer}>
                <img src={doctorIcon} className={styles.Icon} />
                <RadioInput
                  labelText=" Arzt"
                  id="2"
                  name="2"
                  value="2"
                  checked={info.occupationId === 2}
                  onChange={() => handleOptionChange(2)}
                ></RadioInput>
              </div>
              <div className={styles.IconContainer}>
                <img src={healthcareIcon} className={styles.Icon} />
                <RadioInput
                  className={styles.HoverOverMe}
                  labelText=" Sonstiges med Personal"
                  id="3"
                  name="3"
                  value="3"
                  checked={info.occupationId === 3}
                  onChange={() => handleOptionChange(3)}
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
