import React from 'react';
import styles from './ProfileLayout.module.scss';
import ProfileLayoutHeader from '../ProfileLayoutHeader';

interface ProfileLayoutAttributes {
  nav: React.ReactNode;
  main?: React.ReactNode;
  adds?: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutAttributes> = ({
  nav,
  main,
  adds,
}: ProfileLayoutAttributes) => {
  return (
    <div className={styles.ProfileLayout}>
      <ProfileLayoutHeader />
      <div className={styles.ProfileBody}>
        <div className={styles.ProfileNav}>{nav}</div>
        <div className={styles.ProfileMain}>{main}</div>
        {/* <div className={styles.ProfileAdds}>{adds}</div> */}
      </div>
    </div>
  );
};

export default ProfileLayout;
