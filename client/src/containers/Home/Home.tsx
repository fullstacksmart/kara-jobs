import React from 'react';
// import styles from './Home.module.scss';
import Landing from '../../components/Landing';
import GradientWrapper from '../GradientWrapper';

// interface HomeProps {}

//REDUX
// import { Dispatch } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../services/reducers';
// import { TalentActions } from '../../services/actions/talentActions';

const Home: React.FC<unknown> = () => {
  return (
    <GradientWrapper>
      <Landing />
    </GradientWrapper>
  );
};

export default Home;
