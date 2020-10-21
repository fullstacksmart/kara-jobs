import React from 'react';
import styles from './ProgressBarTalent.module.scss';

interface ProgressBarTalentProps {
  profil: boolean;
  anerkennung: boolean;
  dokumente: boolean;
}

const ProgressBarTalent: React.FC<ProgressBarTalentProps> = ({
  profil,
  anerkennung,
  dokumente,
}: ProgressBarTalentProps) => {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.StatusContainer}>
        {profil ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Profil</div>
      </div>
      <div className={styles.StatusContainer}>
        {anerkennung ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Anerkennung</div>
      </div>
      <div className={styles.StatusContainer}>
        {dokumente ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Dokumente</div>
      </div>
    </div>
  );
};

export default ProgressBarTalent;
