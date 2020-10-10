import React, {useState} from 'react';
import styles from './TalentSignUp.module.scss';
import {talentInfo} from '../../types/signup';
import BlueWrapper from '../../containers/BlueWrapper'
import {talent} from '../../types/talent'
import TalentSignUp0 from '../../components/talentSignUpComponents/TalentSignUp0';
import TalentSignUp1 from '../../components/talentSignUpComponents/TalentSignUp1';


interface TalentSignUpProps {
 talentInfo: talentInfo,
};

const TalentSignUp: React.FC<TalentSignUpProps> = (props: TalentSignUpProps) => {
  const [talent, setTalent] = useState<talent>({
    email: props.talentInfo.email,
    firstName: '',
    lastName: '',
    isoCode: '',
    residence: '',
    zipCode: '',
    city: '',
  });
  const [progress, setProgress] = useState<number>(0);

  const talentHandler: Function = (obj: Object): void => {
    setTalent((talent) => Object.assign(talent, obj));
  }

  const progressHandler: Function = (num: number): void => {
    setProgress(() => num);
  }

  const components: React.ReactNode[] = [
  <TalentSignUp0 talentHandler={talentHandler} progessHandler={progressHandler} />,
  <TalentSignUp1 talent={talent} talentHandler={talentHandler} progessHandler={progressHandler}/>]

    return (
      <BlueWrapper>
        {components[progress]}
      </BlueWrapper>
    )
};

export default TalentSignUp;
