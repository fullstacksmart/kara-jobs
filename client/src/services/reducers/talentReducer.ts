import { TalentActions } from '../actions/talentActions';
import { Talent } from '../../types/talent';

const initialState: Talent = {
  uid: '',
  email: '',
  firstName: '',
  lastName: '',
  isoCode: '',
  residence: '',
  zipCode: '',
  city: '',
  occupationId: '',
  positionName: '',
  occupationStatusId: '',
  employerName: '',
  studyProgram: '',
  university: '',
  expectedGraduationYear: '',
};

const TalentReducer = (state: Talent = initialState, action: TalentActions) => {
  switch (action.type) {
    case 'ADD_TALENT':
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};

export default TalentReducer;
