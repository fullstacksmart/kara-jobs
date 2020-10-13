import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={className ? styles.Button + ' ' + className : styles.Button}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
