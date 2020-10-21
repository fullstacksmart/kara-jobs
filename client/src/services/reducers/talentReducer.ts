import { TalentActions } from '../actions/talentActions';
import { Talent } from '../../types/talent';

const initialState: Talent = {
  id: '',
};

const TalentReducer = (
  state: Talent = initialState,
  action: TalentActions,
): Talent => {
  switch (action.type) {
    case 'ADD_TALENT':
      return Object.assign(state, action.payload);
    default:
      return state;
  }
};

export default TalentReducer;
