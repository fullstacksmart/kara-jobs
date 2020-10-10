import React from 'react';
import styles from './TalentSignUp4.module.scss';

interface TalentSignUp4Props {
	talentHandler: Function;
	progressHandler: Function
}


const TalentSignUp4: React.FC<TalentSignUp4Props> = ({ talentHandler, progressHandler }: TalentSignUp4Props) => {
  return <div className={styles.TalentSignUp4}>TalentSignUp4 works!</div>;
};

export default TalentSignUp4;
