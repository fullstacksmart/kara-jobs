import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  profil: boolean;
  anerkennung: boolean;
  dokumente: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  profil,
  anerkennung,
  dokumente,
}: ProgressBarProps) => {
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

export default ProgressBar;
