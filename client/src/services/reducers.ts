import { combineReducers } from 'redux';
import { FirebaseReducer, firebaseReducer } from 'react-redux-firebase';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

export interface RootState {
  firebase: FirebaseReducer.Reducer;
}
