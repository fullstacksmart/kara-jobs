import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { RootState } from './reducers';

// const uid = '1234567890';

export const redirect = (uid: string) => {
  const firebase = useFirebase();
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  console.log(uid);
};
