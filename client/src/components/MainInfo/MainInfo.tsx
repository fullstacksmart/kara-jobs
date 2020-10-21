import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../Button';
import CancelSave from '../CancelSave';
import EditInfo from '../EditInfo';
import PicEdit from '../PicEdit';
import styles from './MainInfo.module.scss';

interface MainInfoAttributes {
  firstName: string;
  lastName: string;
  profession: string;
  city: string;
  country: string;
}

const MainInfo: React.FC<MainInfoAttributes> = ({
  firstName,
  lastName,
  profession,
  city,
  country,
}: MainInfoAttributes) => {
  const handlePicClick = (event: React.MouseEvent) => {
    console.log('clicked');
  };

  const [showPicEdit, setShowPicEdit] = useState(false);
  const [showInfoEdit, setShowInfoEdit] = useState(false);
  const [info, setInfo] = useState({
    firstName,
    lastName,
    profession,
    city,
    country,
  });

  const nameComponent = showInfoEdit ? (
    <h1>
      <input type="text" value={info.firstName}></input>
      <input type="text" value={info.lastName}></input>
    </h1>
  ) : (
    <h1>
      {info.firstName} {info.lastName}
    </h1>
  );

  const professionComponent = showInfoEdit ? (
    <h2>
      <input type="text" value={info.profession}></input>
    </h2>
  ) : (
    <h2>{info.profession}</h2>
  );

  const addressComponent = showInfoEdit ? (
    <h2>
      <input type="text" value={info.city}></input>
      <input type="text" value={info.country}></input>
    </h2>
  ) : (
    <h2>
      {info.city}, {info.country}
    </h2>
  );

  const buttonComponent = showInfoEdit ? (
    <CancelSave onCancel={() => setShowInfoEdit(false)} />
  ) : (
    ''
  );

  return (
    <div className={styles.MainInfo}>
      <div className={styles.PicContainer}>
        <div className={styles.ProfilePic}></div>
        <EditInfo onClick={() => setShowPicEdit(true)} />
      </div>
      <div className={styles.InfoText}>
        {nameComponent}
        <div className={styles.secondaryText}>
          {professionComponent}
          {addressComponent}
        </div>
        <div className={styles.buttonContainer}>{buttonComponent}</div>
      </div>
      <EditInfo top="0" onClick={() => setShowInfoEdit(true)} />
      {showPicEdit ? <PicEdit setShowPicEdit={setShowPicEdit} /> : ''}
    </div>
  );
};

export default MainInfo;
