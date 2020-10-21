import React from 'react';
import styles from './ProgressBarEmployer.module.scss';

interface ProgressBarEmployerProps {
  angaben: boolean;
  talentsuche: boolean;
  bewerbungsmanagement: boolean;
}

const ProgressBarEmployer: React.FC<ProgressBarEmployerProps> = ({
  angaben,
  talentsuche,
  bewerbungsmanagement,
}: ProgressBarEmployerProps) => {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.StatusContainer}>
        {angaben ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Allgemeine{<br />}Angaben</div>
      </div>
      <div className={styles.StatusContainer}>
        {talentsuche ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Talentsuche</div>
      </div>
      <div className={styles.StatusContainer}>
        {bewerbungsmanagement ? (
          <div className={styles.ActiveCircle}></div>
        ) : (
          <div className={styles.WhiteCircle}></div>
        )}
        <div className={styles.Text}>Bewerbungs{<br />}management</div>
      </div>
    </div>
  );
};

export default ProgressBarEmployer;
