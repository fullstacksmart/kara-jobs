import React from 'react';
import styles from './SearchBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBoxAttributes {
  height?: string;
  width?: string;
}

const SearchBox: React.FC<SearchBoxAttributes> = ({
  height,
  width,
}: SearchBoxAttributes) => {
  const style: SearchBoxAttributes = {};
  if (height) style.height = height;
  if (width) style.width = width;
  return (
    <div className={styles.SearchBox} style={style}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="search" className={styles.InputBox} />
    </div>
  );
};

export default SearchBox;
