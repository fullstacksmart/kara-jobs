import React from 'react';
import styles from './Success.module.scss';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';

const Success: React.FC<unknown> = () => {
  const history = useHistory();
  const firebase = useFirebase();
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  const logout = () => {
    firebase.logout();
    history.push('/');
  };
  return (
    <div className={styles.Success}>
      <h1>Successfully logged in</h1>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Success;
