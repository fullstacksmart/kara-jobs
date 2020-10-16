import React from 'react';
import styles from './TalentSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';

const TalentSignUp5: React.FC = () => {
  const history = useHistory();
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/talent-signup-6');
  };

  const redirect = () => {
    if (talent.studyProgram && talent.university) {
      history.push('/talent-signup-4');
    } else {
      history.push('/talent-signup-3');
    }
  };

  return (
    <div className={styles.TalentSignUp5}>
      <p>Talent SignUp 5</p>
      <Form onSubmit={handleSubmit} id="picture-form"></Form>
      <Button onClick={() => redirect()}>Zurück</Button>
      <Button type="submit" value="Submit" form="picture-form">
        Submit
      </Button>
    </div>
  );
};

export default TalentSignUp5;
