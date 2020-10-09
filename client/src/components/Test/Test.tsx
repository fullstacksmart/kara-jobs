import React from 'react';
import styles from './Test.module.scss';

interface TestProps {}


const Test: React.FC<TestProps> = (props: TestProps) => {
  return <div>Test works!</div>;
};

export default Test;
