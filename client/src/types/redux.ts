import { Talent } from './talent';
import { Employer } from './employer';

export type InitialState = {
  talent: Talent;
  employer: Employer;
};

export type RootState = InitialState;
