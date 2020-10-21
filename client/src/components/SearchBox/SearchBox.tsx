import React from 'react';
import styles from './SearchBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox: React.FC<unknown> = (props: unknown) => {
  return (
    <div className={styles.SearchBox}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="search" className={styles.InputBox} />
    </div>
  );
};

export default SearchBox;
