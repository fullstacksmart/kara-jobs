import { Employer } from '../../types/employer';

export interface AddEmployerAction {
  readonly type: 'ADD_EMPLOYER';
  payload: Employer;
}

export type EmployerActions = AddEmployerAction;
