import React, { PropsWithChildren } from 'react';
import styles from './Details.module.scss';

const Details: React.FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return <div className={styles.Details}>{children}</div>;
};

export default Details;
