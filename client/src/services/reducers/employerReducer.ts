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
  addressAditional: '',
  zipCode: '',
  city: '',
  website: '',
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
