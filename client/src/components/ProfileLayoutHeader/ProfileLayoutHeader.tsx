import React from 'react';
import styles from './ProfileLayoutHeader.module.scss';
import SearchBox from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import StyledLink from '../StyledLink';

const ProfileLayoutHeader: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileLayoutHeader}>
      <div className={styles.Half}>
        <img src="assets/kara_creme.png" />
        <SearchBox height="2.2rem" />
      </div>
      <div className={styles.Half}>
        <StyledLink to="">
          <div>
            <FontAwesomeIcon icon={faComments} size="3x" />
          </div>
        </StyledLink>
        <StyledLink to="">
          <div>
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
          </div>
        </StyledLink>
      </div>
    </div>
  );
};

export default ProfileLayoutHeader;
