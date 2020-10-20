import React, { useEffect } from 'react';
import styles from './TalentSignUp5.module.scss';
import Form from '../../Form';
import Button from '../../Button';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/reducers';

const TalentSignUp5: React.FC = () => {
  const history = useHistory();
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);

  //FILE MGMT
  const firebase = useFirebase();
  const auth: any = useSelector<RootState>((state) => state.firebase.auth);
  const uid = auth.uid as string;

  const downloadImage = () => {
    const storageRef = firebase
      .storage()
      .ref(`/talents/${uid}/images/profile-picture`);
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
    const talentObj = {
      ...talent,
      onboardingPage: 6,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentObj));
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
    const file = this.files ? this.files[0] : null;
    if (file) {
      const storageRef = firebase
        .storage()
        .ref(`/talents/${uid}/images/profile-picture`);
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
    <div className={styles.TalentSignUp5}>
      <img src="" id="profile-picture"></img>
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
