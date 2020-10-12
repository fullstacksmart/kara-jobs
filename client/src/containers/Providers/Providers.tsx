import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../services/firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rootReducer } from '../../services/reducers';

firebase.initializeApp(firebaseConfig);

const rrfConfig = {};

const initialStore = {};

const store = createStore(rootReducer, initialStore);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const Providers: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {children}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Providers;
