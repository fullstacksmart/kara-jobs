import React from 'react';
import styles from './ProfileLayoutHeader.module.scss';
import SearchBox from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfileLayoutHeader: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileLayoutHeader}>
      <div className={styles.Half}>
        <img src="assets/kara_creme.png" />
        <SearchBox />
      </div>
      <div className={styles.Half}>
        <Link className={styles.Link} to="">
          <div>
            <FontAwesomeIcon icon={faComments} size="3x" />
          </div>
        </Link>
        <Link to="" className={styles.Link}>
          <div>
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileLayoutHeader;
