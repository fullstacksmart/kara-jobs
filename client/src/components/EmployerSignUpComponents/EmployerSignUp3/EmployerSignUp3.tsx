import React from 'react';
import styles from './EmployerSignUp3.module.scss';
import Button from '../../Button';

const EmployerSignUp3: React.FC<unknown> = (props: unknown) => {
  return (
    <div className={styles.EmployerSignUp3}>
      Firmenlogo hochladen (optional)
      <Button>Weiter</Button>
    </div>
  );
};

export default EmployerSignUp3;
