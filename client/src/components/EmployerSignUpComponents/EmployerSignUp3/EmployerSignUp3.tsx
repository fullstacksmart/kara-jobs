import React from 'react';
import styles from './EmployerSignUp3.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';

const EmployerSignUp3: React.FC = () => {
  const history = useHistory();
  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/employer-signup-4');
  };

  return (
    <div className={styles.EmployerSignUp3}>
      Firmenlogo hochladen (optional)
      <Form onSubmit={handleSubmit} id="firmlogo-form"></Form>
      <Button type="submit" value="Submit" form="firmlogo-form">
        Weiter
      </Button>
    </div>
  );
};

export default EmployerSignUp3;
