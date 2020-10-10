import React from 'react';
import styles from './TalentSignUp.module.scss';
import {talentInfo} from '../../types/signup';

interface TalentSignUpProps {
 talentInfo: talentInfo
};

const TalentSignUp: React.FC<TalentSignUpProps> = (props: TalentSignUpProps) => {
  console.log(props.talentInfo)
  return <div className={styles.TalentSignUp}>TalentSignUp works!</div>;
};

export default TalentSignUp;
