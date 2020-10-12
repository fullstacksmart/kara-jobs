import React from 'react';
import styles from './Success.module.scss';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

const Success: React.FC<unknown> = (props: unknown) => {
  const history = useHistory();
  const firebase = useFirebase();
  const logout = () => {
    firebase.logout();
    history.push('/');
  };
  return (
    <div className={styles.Success}>
      <h1>Successfully logged in</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Success;
