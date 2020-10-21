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
          <li>
            <div>
              <FontAwesomeIcon icon={faHospital} size="3x" />
            </div>
            Arbeitgebersuche
          </li>
        </StyledLink>
        <StyledLink to="">
          <li>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            </div>
            kara Produkte
          </li>
        </StyledLink>
        <StyledLink to="">
          <li>
            <div>
              <FontAwesomeIcon icon={faCog} size="3x" />
            </div>
            Einstellungen
          </li>
        </StyledLink>
      </ul>
    </div>
  );
};

export default ProfileNav;
