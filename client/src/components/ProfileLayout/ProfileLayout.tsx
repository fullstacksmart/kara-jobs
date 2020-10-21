import React from 'react';
import styles from './ProfileLayout.module.scss';
import ProfileLayoutHeader from '../ProfileLayoutHeader';

const ProfileLayout: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileLayout}>
      <ProfileLayoutHeader />
    </div>
  );
};

export default ProfileLayout;
