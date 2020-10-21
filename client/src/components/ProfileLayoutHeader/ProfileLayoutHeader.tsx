import React from 'react';
import styles from './ProfileLayoutHeader.module.scss';

const ProfileLayoutHeader: React.FC<unknown> = (props: unknown) => {
  return (
    <div className={styles.ProfileLayoutHeader}>
      <div className={styles.Half}>
        <img src="assets/kara_creme.png" />
        <div>SEARCH</div>
      </div>
      <div className={styles.Half}>
        <div>chatPic</div>
        <div>profilePic</div>
      </div>
    </div>
  );
};

export default ProfileLayoutHeader;
