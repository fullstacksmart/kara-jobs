import React from 'react';
import CancelSave from '../CancelSave';
import styles from './PicEdit.module.scss';

interface PicEditProps {
  setShowPicEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const PicEdit: React.FC<PicEditProps> = ({ setShowPicEdit }: PicEditProps) => {
  return (
    <div className={styles.PicEdit}>
      <div className={styles.InnerWindow}>
        upload new profile picture
        <CancelSave onCancel={() => setShowPicEdit(false)} />
      </div>
    </div>
  );
};

export default PicEdit;
