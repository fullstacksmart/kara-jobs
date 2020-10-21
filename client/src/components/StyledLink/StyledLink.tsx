import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './StyledLink.module.scss';

// interface StyledLinkAttributes {
//   children?: React.ReactChildren;
// }

const StyledLink: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <Link to={props.to} className={styles.StyledLink}>
      {props.children}
    </Link>
  );
};

export default StyledLink;
