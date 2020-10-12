import React, { useState } from 'react';
import styles from './TalentSignUp.module.scss';
import { TalentInfo } from '../../types/signup';
import { Talent } from '../../types/talent';
import TalentSignUp0 from '../../components/talentSignUpComponents/TalentSignUp0';
import TalentSignUp1 from '../../components/talentSignUpComponents/TalentSignUp1';
import TalentSignUp2 from '../../components/talentSignUpComponents/TalentSignUp2';
import TalentSignUp3 from '../../components/talentSignUpComponents/TalentSignUp3';
import TalentSignUp4 from '../../components/talentSignUpComponents/TalentSignUp4';
import TalentSignUp5 from '../../components/talentSignUpComponents/TalentSignUp5';
import TalentSignUp6 from '../../components/talentSignUpComponents/TalentSignUp6';
import TalentSignUp7 from '../../components/talentSignUpComponents/TalentSignUp7';

interface TalentSignUpProps {
  talentInfo: TalentInfo;
}

const TalentSignUp: React.FC<TalentSignUpProps> = (
  props: TalentSignUpProps,
) => {
  const [talent, setTalent] = useState<Talent>({
    uid: '',
    email: props.talentInfo.email,
    firstName: '',
    lastName: '',
    isoCode: '',
    residence: '',
    zipCode: '',
    city: '',
    occupationId: '',
    positionName: '',
    occupationStatusId: '',
    employerName: '',
    studyProgram: '',
    university: '',
    expectedGraduationYear: '',
  });
  console.log(talent);

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
      progressHandler={progressHandler}
    />,
    <TalentSignUp1
      key={1}
      talent={talent}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp2
      key={2}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp3
      key={3}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp4
      key={4}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp5
      key={5}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp6
      key={6}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
    <TalentSignUp7
      key={7}
      talentHandler={talentHandler}
      progressHandler={progressHandler}
    />,
  ];

  return <>{components[progress]}</>;
};

export default TalentSignUp;
