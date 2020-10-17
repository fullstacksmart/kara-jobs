import { EmployerActions } from '../actions/employerActions';
import { Employer } from '../../types/employer';

const initialState: Employer = {
  uid: '',
  email: '',
  firstName: '',
  lastName: '',
  companyName: '',
  sector: '',
  type: '',
  street: '',
  streetNumber: '',
  addressAdditional: '',
  zipCode: '',
  city: '',
  website: '',
  searchDoctor: 0, //false?
  searchNurse: 0, //false?
  searchOther: 0, //false?
  talentStudyStatus: 0, //false?
  talentAprobStatus: 0, //false?
  talentMinGerman: '',
};

const EmployerReducer = (
  state: Employer = initialState,
  action: EmployerActions,
): Employer => {
  switch (action.type) {
    case 'ADD_EMPLOYER':
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};

export default EmployerReducer;
