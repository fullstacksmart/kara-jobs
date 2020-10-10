import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={styles.Button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
