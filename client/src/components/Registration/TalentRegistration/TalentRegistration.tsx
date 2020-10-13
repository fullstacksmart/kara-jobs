import React from 'react';
// import styles from './TalentRegistration.module.scss';
import Registration from '../Base';

const TalentRegistration: React.FC<unknown> = () => {
  return (
    <Registration
      heading="In wenigen Schritten zu Deinem Profil"
      kind="talent"
    />
  );
};

export default TalentRegistration;
