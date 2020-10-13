import React from 'react';
//import styles from './EmployerRegistration.module.scss';
import Registration from '../Base';

const EmployerRegistration: React.FC<unknown> = () => {
  return (
    <Registration
      heading="In wenigen Schritten mit internationalen Talenten aus dem medizinischen Bereich in Kontakt treten"
      kind="employer"
    />
  );
};

export default EmployerRegistration;
