import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../Button';
import EditInfo from '../EditInfo';
import PicEdit from '../PicEdit';
import styles from './MainInfo.module.scss';

interface MainInfoAttributes {
  name: string;
  profession: string;
  city: string;
}

const MainInfo: React.FC<MainInfoAttributes> = ({
  name,
  profession,
  city,
}: MainInfoAttributes) => {
  const handlePicClick = (event: React.MouseEvent) => {
    console.log('clicked');
  };

  const [showPicEdit, setShowPicEdit] = useState(false);
  const [showInfoEdit, setShowInfoEdit] = useState(false);

  return (
    <div className={styles.MainInfo}>
      <div className={styles.PicContainer}>
        <div className={styles.ProfilePic}></div>
        <EditInfo onClick={() => setShowPicEdit(true)} />
      </div>
      <div className={styles.InfoText}>
        <h1>{name}</h1>
        <div className={styles.secondaryText}>
          <h2>{profession}</h2>
          <h2>{city}</h2>
        </div>
      </div>
      <EditInfo top="0" />
      {showPicEdit ? <PicEdit setShowPicEdit={setShowPicEdit} /> : ''}
      {/*showInfoEdit ? <InfoEdit setShowPicEdit={setShowInfoEdit} /> : ''*/}
    </div>
  );
};

export default MainInfo;
