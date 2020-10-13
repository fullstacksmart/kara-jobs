import { combineReducers } from 'redux';
import { FirebaseReducer, firebaseReducer } from 'react-redux-firebase';
import TalentReducer from './reducers/talentReducer';
import EmployerReducer from './reducers/employerReducer';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  talent: TalentReducer,
  employer: EmployerReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export interface RootState {
  firebase: FirebaseReducer.Reducer;
  talent: typeof TalentReducer;
  employer: typeof EmployerReducer;
}
