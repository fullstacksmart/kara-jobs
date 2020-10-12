import React from 'react';
import styles from './ButtonLink.module.scss';
import Button, { ButtonProps } from '../Button/Button';
import { Link } from 'react-router-dom';

type ButtonLinkProps = ButtonProps & {
  to: string;
  text?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  text,
}: ButtonLinkProps) => {
  return (
    <Button>
      <Link to={to}>{text}</Link>
    </Button>
  );
};

export default ButtonLink;
