import React from 'react';
import styles from './TalentSignUp7.module.scss';

interface TalentSignUp7Props {
  talentHandler: (obj: unknown) => void;
  progressHandler: (num: number) => void;
}

const TalentSignUp7: React.FC<TalentSignUp7Props> = ({
  talentHandler,
  progressHandler,
}: TalentSignUp7Props) => {
  return <div className={styles.TalentSignUp7}>TalentSignUp7 works!</div>;
};

export default TalentSignUp7;