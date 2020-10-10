import React from 'react';
import styles from './TalentSignUp4.module.scss';

interface TalentSignUp4Props {
  talentHandler: (obj: unknown) => void;
  progressHandler: (num: number) => void;
}

const TalentSignUp4: React.FC<TalentSignUp4Props> = ({
  talentHandler,
  progressHandler,
}: TalentSignUp4Props) => {
  return <div className={styles.TalentSignUp4}>TalentSignUp4 works!</div>;
};

export default TalentSignUp4;
