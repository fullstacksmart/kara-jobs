import React, { useState, useEffect } from 'react';
import Form from '../../Form';
import Label from '../../Label';
import Option from '../../Option';
import Select from '../../Select';
import Button from '../../Button';
import BlueWrapper from '../../../containers/BlueWrapper';
import ProgressBar from '../../ProgressBarTalent';
import logo from '../../../assets/logos/kara_gradient.png';
import trash from '../../../assets/icons/trash.png';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/reducers';
import styles from './TalentSignUp8.module.scss';
import dbService from '../../../services/dbService';

const optArray = [
  '',
  'Annerkennungsbescheid',
  'Sprachzertifikat',
  'Abschlusszeugnis (Uni-Ausbildung)',
  'Arbeitszeugnis',
  'Zertifikate-Bescheinigung',
];

const TalentSignUp8: React.FC = () => {
  const history = useHistory();
  const talent = JSON.parse(sessionStorage.getItem('talent') as string);
  const [info, setInfo] = useState({ document: '' });
  const [list, setList] = useState<string[]>([]);

  //FILE MGMT
  const firebase = useFirebase();
  const auth: any = useSelector<RootState>((state) => state.firebase.auth);
  const uid = auth.uid as string;

  useEffect(() => {
    const storageRef = firebase.storage().ref('talents');
    const listRef = storageRef
      .child(`${uid}/documents/`)
      .listAll()
      .then(function (res: any) {
        res.items.forEach((el: any) => {
          setList((list) => [...list, el.name]);
        });
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);

  const addDoc = (file: any, name: string) => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === name) count++;
    }
    const docName = count > 0 ? `${name}(${count})` : name;
    const storageRef = firebase
      .storage()
      .ref(`talents/${uid}/documents/${docName}`);
    const task = storageRef.put(file);
    task.on('state_changed', function progress(snapshot) {
      const percentage = snapshot.bytesTransferred / snapshot.totalBytes;
      if (percentage === 1) {
        console.log('successfully uploaded');
      }
    });
    setList((list) => [...list, docName]);
  };

  function deleteDoc(this: string, e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const storageRef = firebase
      .storage()
      .ref(`talents/${uid}/documents/${this}`);
    storageRef.delete().catch(function (e) {
      console.log(e);
    });
    setList((list) => {
      const newList = [...list];
      const index = newList.indexOf(this);
      newList.splice(index, 1);
      return newList;
    });
  }

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setInfo({
      document: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const talentForDB = {
      ...talent,
      onboardingPage: 9,
      onboardingComplete: true,
    };
    sessionStorage.setItem('talent', JSON.stringify(talentForDB));
    //TO DOs:
    //enter path to profile, fill redux
    dbService
      .postSignup(`/talents/${talentForDB.id}/signup`, talentForDB)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
    history.push('/');
  };

  async function handleFiles(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const doc = await info.document;
    if (doc === '') {
      alert('Bitte wählen Sie zuerst eine Dokumentart aus');
      return;
    } else {
      const input = document.getElementById('input') as HTMLInputElement;
      const file = input.files ? input.files[0] : null;
      if (file) {
        console.log(file);
        addDoc(file, doc);
      }
    }
  }

  return (
    <BlueWrapper>
      <div className={styles.TalentSignUp8}>
        <div className={styles.FormHeader}>
          <img src={logo} className={styles.Logo} />
          <ProgressBar profil={false} anerkennung={false} dokumente={true} />
        </div>
        <div className={styles.FormWrapper}>
          <Form onSubmit={handleSubmit} id="document-form">
            <div className={styles.DropDownContainer}>
              <Label htmlFor="document">Dokumentart</Label>
              <Select
                id="document"
                value={info.document}
                onChange={handleChange}
              >
                {optArray.map((opt) => (
                  <Option key={opt} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            </div>
            <div className={styles.InputWrapper}>
              <input type="file" id="input" className={styles.Input}></input>
            </div>
            <div className={styles.SingleButtonWrapper}>
              <Button onClick={handleFiles}>Hochladen</Button>
            </div>
          </Form>
          <div
            id="uploaded-documents-wrapper"
            className={styles.UploadedDocsWrapper}
          >
            <div className={styles.TextDocument}>Hochgeladene Dokumente*</div>
            <div id="uploaded-documents" className={styles.Documents}>
              {list.map((el) => {
                return (
                  <div key={el} className={styles.DocumentItem}>
                    <div className={styles.DeleteButtonWrapper}>
                      <Button id={`delete-${el}`} onClick={deleteDoc.bind(el)}>
                        <img src={trash} className={styles.TrashIcon} />
                      </Button>
                    </div>
                    <div id={el}>{el}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.ButtonWrapper}>
            <Button onClick={() => history.push('/talent-signup-6')}>
              Zurück
            </Button>
            <Button type="submit" value="Submit" form="document-form">
              Submit
            </Button>
          </div>
          <div className={styles.Text}>
            *Du kannst Dokumente auch noch zu einem späteren Zeitpunkt
            hinzufügen
          </div>
        </div>
      </div>
    </BlueWrapper>
  );
};

//back button: redirect to page 6 (zurück zu Anerkennung)

export default TalentSignUp8;
