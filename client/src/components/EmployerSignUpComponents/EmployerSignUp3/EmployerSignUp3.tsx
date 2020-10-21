import React, { useEffect } from 'react';
import styles from './EmployerSignUp3.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/reducers';

const EmployerSignUp3: React.FC = () => {
  const history = useHistory();
  const employer = JSON.parse(sessionStorage.getItem('employer') as string);

  //FILE MGMT
  const firebase = useFirebase();
  const auth: any = useSelector<RootState>((state) => state.firebase.auth);
  const uid = auth.uid as string;

  const downloadImage = () => {
    const storageRef = firebase
      .storage()
      .ref(`/employers/${uid}/images/profile-picture`);
    storageRef
      .getDownloadURL()
      .then(function (url) {
        if (url) {
          console.log(url);
          const img = document.getElementById(
            'profile-picture',
          ) as HTMLImageElement;
          if (img) img.src = url;
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  useEffect(() => {
    downloadImage();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const employerObj = {
      ...employer,
      onboarding_page: 4,
    };
    sessionStorage.setItem('employer', JSON.stringify(employerObj));
    history.push('/employer-signup-4');
  };

  function handleFiles(this: HTMLInputElement) {
    const file = this.files ? this.files[0] : null;
    if (file) {
      const storageRef = firebase
        .storage()
        .ref(`/employers/${uid}/images/profile-picture`);
      const task = storageRef.put(file);
      task.on(
        'state_changed',
        function progress(snapshot) {
          const percentage = snapshot.bytesTransferred / snapshot.totalBytes;
          if (percentage === 1) {
            downloadImage();
          }
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
    <div className={styles.EmployerSignUp3}>
      <img src="" id="profile-picture"></img>
      <Form onSubmit={handleSubmit} id="picture-form">
        <input type="file" id="input"></input>
      </Form>
      <Button onClick={() => history.push('/employer-signup-2')}>Zurück</Button>
      <Button type="submit" value="Submit" form="picture-form">
        Submit
      </Button>
    </div>
  );
};

export default EmployerSignUp3;
