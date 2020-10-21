import React from 'react';
import styles from './TextInfo.module.scss';

interface TextInfoProps {
  title: string;
  info: string;
}

const TextInfo: React.FC<TextInfoProps> = ({ title, info }: TextInfoProps) => {
  return (
    <div className={styles.TextInfo}>
      <h2>{title}</h2>
      <h3>{info}</h3>
    </div>
  );
};

export default TextInfo;
