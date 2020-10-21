import React from 'react';
import styles from './ProfileLayout.module.scss';
import ProfileLayoutHeader from '../ProfileLayoutHeader';

const ProfileLayout: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileLayout}>
      <ProfileLayoutHeader />
      <div className={styles.ProfileBody}>
        <div className={styles.ProfileNav}></div>
        <div className={styles.ProfileMain}></div>
        <div className={styles.ProfileAdds}></div>
      </div>
    </div>
  );
};

export default ProfileLayout;
