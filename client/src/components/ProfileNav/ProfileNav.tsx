import {
  faCog,
  faGraduationCap,
  faHospital,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import StyledLink from '../StyledLink';
import styles from './ProfileNav.module.scss';

const ProfileNav: React.FC<unknown> = () => {
  return (
    <div className={styles.ProfileNav}>
      <ul>
        <StyledLink to="">
          <li className={styles.ItemWrapper}>
            <div className={styles.Icon}>
              <FontAwesomeIcon icon={faHospital} size="lg" />
            </div>
            <div className={styles.IconText}>Arbeitgebersuche</div>
          </li>
        </StyledLink>
        <StyledLink to="">
          <li className={styles.ItemWrapper}>
            <div className={styles.Icon}>
              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            </div>
            <div className={styles.IconText}>kara Produkte</div>
          </li>
        </StyledLink>
        <StyledLink to="">
          <li className={styles.ItemWrapper}>
            <div className={styles.Icon}>
              <FontAwesomeIcon icon={faCog} size="lg" />
            </div>
            <div className={styles.IconText}>Einstellungen</div>
          </li>
        </StyledLink>
      </ul>
    </div>
  );
};

export default ProfileNav;
