import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import SignUp from '../SignUp';
import LoginComponent from '../../containers/LoginContainer';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import JobSearch from '../JobSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import TalentSignup from '../TalentSignUp';
import TalentSignUp0 from '../../components/talentSignUpComponents/TalentSignUp0';
import EmployerSignUp0 from '../../components/EmployerSignUpComponents/EmployerSignUp0';
import TalentRegistration from '../../components/TalentRegistration';
import LoginContainer from '../../containers/LoginContainer';

const Router: React.FC<unknown> = () => {
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  const paths = isEmpty(auth)
    ? [
        <Route
          key="signup"
          path="/signup"
          exact
          component={TalentSignup}
        ></Route>,
        <Route
          key="/talent-signup-0"
          path="/talent-signup-0"
          exact
          component={TalentSignUp0}
        ></Route>,
        <Route
          key="/employer-signup-0"
          path="/employer-signup-0"
          exact
          component={EmployerSignUp0}
        ></Route>,
      ]
    : [
        <Route
          key="jobsearch"
          path="/jobsearch"
          exact
          component={JobSearch}
        ></Route>,
      ];
  return !isLoaded(auth) ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signedIn" exact component={Success}></Route>
      <Route path="/sign-in" exact component={LoginContainer}></Route>
      <Route path="/sign-up" exact component={TalentRegistration}></Route>
      {paths}
    </BrowserRouter>
  );
};

export default Router;
