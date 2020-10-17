import React from 'react';
import styles from './TalentSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const TalentSignUp5: React.FC = () => {
  const history = useHistory();
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  //FILE MGMT
  const firebase = useFirebase();

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

  function handleFiles(this: HTMLInputElement) {
    console.log('here');
    const file = this.files ? this.files[0] : null;
    console.log(file);
    if (file) {
      const storageRef = firebase.storage().ref('tetFolder/testFile.png');
      const task = storageRef.put(file);
      task.on(
        'state_changed',
        function progress(snapshot) {
          const percentage = snapshot.bytesTransferred / snapshot.totalBytes;
          console.log(percentage);
        },
        function error(err) {
          console.log(err);
        },
      );
    }
  }
  const input = document.getElementById('input') as HTMLInputElement;
  if (input) input.addEventListener('change', handleFiles, false);

  return (
    <div className={styles.TalentSignUp5}>
      <p>Talent SignUp 5</p>
      <Form onSubmit={handleSubmit} id="picture-form">
        <input type="file" id="input"></input>
      </Form>
      <Button onClick={() => redirect()}>Zurück</Button>
      <Button type="submit" value="Submit" form="picture-form">
        Submit
      </Button>
    </div>
  );
};

export default TalentSignUp5;
