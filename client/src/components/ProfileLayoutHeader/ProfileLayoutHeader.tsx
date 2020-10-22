import React from 'react';
import styles from './ProfileLayoutHeader.module.scss';
import SearchBox from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logos/kara_gradient.png';
import StyledLink from '../StyledLink';

const ProfileLayoutHeader: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileLayoutHeader}>
      <div className={styles.Half}>
        <img src={logo} className={styles.Logo} />
        <SearchBox height="2.2rem" />
      </div>
      <div className={styles.Half}>
        <StyledLink to="">
          <div className={styles.IconBackground}>
            <FontAwesomeIcon icon={faComments} size="2x" />
          </div>
        </StyledLink>
        <StyledLink to="">
          <div className={styles.IconBackground}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </div>
        </StyledLink>
      </div>
    </div>
  );
};

export default ProfileLayoutHeader;
