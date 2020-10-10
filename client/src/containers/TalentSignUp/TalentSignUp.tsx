import React, { useState } from 'react';
import styles from './TalentSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import BlueWrapper from '../../containers/BlueWrapper';
import { Talent } from '../../types/talent';
import TalentSignUp0 from '../../components/talentSignUpComponents/TalentSignUp0';
import TalentSignUp1 from '../../components/talentSignUpComponents/TalentSignUp1';

interface TalentSignUpProps {
  talentInfo: TalentInfo;
}

const TalentSignUp: React.FC<TalentSignUpProps> = (
  props: TalentSignUpProps,
) => {
  const [talent, setTalent] = useState<Talent>({
    email: props.talentInfo.email,
    firstName: '',
    lastName: '',
    isoCode: '',
    residence: '',
    zipCode: '',
    city: '',
  });
  const [progress, setProgress] = useState<number>(0);

  const talentHandler = (obj: unknown): void => {
    setTalent((talent) => Object.assign(talent, obj));
  };

  const progressHandler = (num: number): void => {
    setProgress(() => num);
  };

  // TODO: find better keys
  const components: React.ReactNode[] = [
    <TalentSignUp0
      key={0}
      talentHandler={talentHandler}
      progessHandler={progressHandler}
    />,
    <TalentSignUp1
      key={1}
      talent={talent}
      talentHandler={talentHandler}
      progessHandler={progressHandler}
    />,
  ];

  return <BlueWrapper>{components[progress]}</BlueWrapper>;
};

export default TalentSignUp;
