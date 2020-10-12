import React from 'react';
import styles from './TextLink.module.scss';

type TextLinkProps = {
  text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const TextLink: React.FC<TextLinkProps> = ({
  text,
  ...props
}: TextLinkProps) => {
  return (
    <a className={styles.TextLink} {...props}>
      {text}
    </a>
  );
};

export default TextLink;
