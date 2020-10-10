import React from 'react';
import styles from './TalentSignUp.module.scss';
import {talentInfo} from '../../types/signup';
import BlueWrapper from '../../containers/BlueWrapper'

interface TalentSignUpProps {
 talentInfo: talentInfo
};

const TalentSignUp: React.FC<TalentSignUpProps> = (props: TalentSignUpProps) => {
  console.log(props.talentInfo)
    return (<BlueWrapper>
      <h1>Talent signup</h1>
    </BlueWrapper>)
};

export default TalentSignUp;
