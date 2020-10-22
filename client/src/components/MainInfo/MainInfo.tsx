import React, { useState } from 'react';
import CancelSave from '../CancelSave';
import EditInfo from '../EditInfo';
import PicEdit from '../PicEdit';
import styles from './MainInfo.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/redux';
import { Talent } from '../../types/talent';
import { saveInfo } from '../../services/dbService';

const MainInfo: React.FC<unknown> = () => {
  const talent = useSelector<RootState>((state) => state.talent) as Talent;
  const [showPicEdit, setShowPicEdit] = useState(false);
  const [showInfoEdit, setShowInfoEdit] = useState(false);
  //mock
  const [info, setInfo] = useState({
    firstName: talent.firstName || 'Max',
    lastName: talent.lastName || 'Mustermann',
    profession: talent.registrationExperience?.positionName || 'Krankenpfleger',
    city: talent.city || 'Belgrad',
    country: talent.country || 'Serbien',
  });
  // mock
  talent.id = talent.id || 'abcd';
  const [oldInfo, setOldInfo] = useState(info);

  const handleInfoClick = () => {
    setShowInfoEdit(true);
    setOldInfo(info);
  };

  const cancelInfoEdit = () => {
    setShowInfoEdit(false);
    setInfo(oldInfo);
  };

  const saveInfoEdit = async () => {
    // TODO: implement actual save to db
    await saveInfo({ ...info, id: talent.id }, 'basic', talent.id);
    setShowInfoEdit(false);
  };

  const handleChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) =>
    setInfo({ ...info, [type]: e.currentTarget.value });
  const nameComponent = showInfoEdit ? (
    <h1>
      <input
        type="text"
        value={info.firstName}
        onChange={(e) => handleChange('firstName', e)}
      ></input>
      <input
        type="text"
        value={info.lastName}
        onChange={(e) => handleChange('lastName', e)}
      ></input>
    </h1>
  ) : (
    <h1>
      {info.firstName} {info.lastName}
    </h1>
  );

  const professionComponent = showInfoEdit ? (
    <h2>
      <input
        type="text"
        value={info.profession}
        onChange={(e) => handleChange('profession', e)}
      ></input>
    </h2>
  ) : (
    <h2>{info.profession}</h2>
  );

  const addressComponent = showInfoEdit ? (
    <h2>
      <input
        type="text"
        value={info.city}
        onChange={(e) => handleChange('city', e)}
      ></input>
      <input
        type="text"
        value={info.country}
        onChange={(e) => handleChange('country', e)}
      ></input>
    </h2>
  ) : (
    <h2>
      {info.city}, {info.country}
    </h2>
  );

  const buttonComponent = showInfoEdit ? (
    <CancelSave onCancel={cancelInfoEdit} onSave={saveInfoEdit} />
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
        <div className={styles.ButtonContainer}>{buttonComponent}</div>
      </div>
      <EditInfo top="0" onClick={handleInfoClick} />
      {showPicEdit ? <PicEdit setShowPicEdit={setShowPicEdit} /> : ''}
    </div>
  );
};

export default MainInfo;
