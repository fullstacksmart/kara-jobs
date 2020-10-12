import { Talent } from '../../types/talent';

//import { Talent } from '../../types/talent';

export interface AddTalentAction {
  readonly type: 'ADD_TALENT';
  payload: Talent;
}

export type TalentActions = AddTalentAction;
