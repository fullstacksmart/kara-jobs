import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './TextLink.module.scss';

type TextLinkProps = {
  text: string;
} & LinkProps;

const TextLink: React.FC<TextLinkProps> = ({
  text,
  ...props
}: TextLinkProps) => {
  return (
    <Link className={styles.TextLink} {...props}>
      {text}
    </Link>
  );
};

export default TextLink;
