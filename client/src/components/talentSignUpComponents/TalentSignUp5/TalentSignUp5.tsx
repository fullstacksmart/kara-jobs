import React from 'react';
import styles from './TalentSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';

const TalentSignUp5: React.FC = () => {
  console.log(history);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/talent-signup-6');
  };

  return (
    <div className={styles.TalentSignUp5}>
      <p>Talent SignUp 5</p>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Weiter</Button>
      </Form>
    </div>
  );
};

export default TalentSignUp5;
