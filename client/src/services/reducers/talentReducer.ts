import { TalentActions } from '../actions/talentActions';
import { Talent } from '../../types/talent';

const initialState: Talent = {
  id: '',
  firstName: '',
  lastName: '',
  isoCode: '',
  country: '',
  zipCode: '',
  city: '',
  onboardingComplete: false,
  onboardingPage: 0,
  createdAt: '',
  updatedAt: '',
  registrationExperience: {
    TalentId: '',
    occupationId: 1,
    positionName: '',
    occupationStatusId: 1,
    employerName: '',
    createdAt: '',
    updatedAt: '',
  },
  registrationQualification: {
    TalentId: '',
    studyProgram: '',
    university: '',
    expectedGraduationYear: new Date().getFullYear(),
  },
  approbations: [],
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
