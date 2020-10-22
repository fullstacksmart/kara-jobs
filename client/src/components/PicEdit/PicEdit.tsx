import React from 'react';
import CancelSave from '../CancelSave';
import EditPopup from '../EditPopup';
import styles from './PicEdit.module.scss';

interface PicEditProps {
  setShowPicEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const PicEdit: React.FC<PicEditProps> = ({ setShowPicEdit }: PicEditProps) => {
  return (
    // <div className={styles.PicEdit}>
    //   <div className={styles.InnerWindow}>
    //     upload new profile picture
    //     <CancelSave onCancel={() => setShowPicEdit(false)} />
    //   </div>
    // </div>
    <EditPopup
      onCancel={() => setShowPicEdit(false)}
      onSave={() => {
        console.log('save');
      }}
    >
      edit profile picture
    </EditPopup>
  );
};

export default PicEdit;
