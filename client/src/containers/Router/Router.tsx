import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
// import SignUp from '../SignUp';
import TalentSignUp from '../TalentSignUp';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import JobSearch from '../JobSearch';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/reducers';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import TalentRegistration from '../../components/Registration/TalentRegistration';
import EmployerRegistration from '../../components/Registration/EmployerRegistration';
import TalentSignup from '../TalentSignUp';
import EmployerSignup from '../EmployerSignUp';
import TalentSignUp0 from '../../components/talentSignUpComponents/TalentSignUp0';
import TalentSignUp1 from '../../components/talentSignUpComponents/TalentSignUp1';
import TalentSignUp2 from '../../components/talentSignUpComponents/TalentSignUp2';
import TalentSignUp3 from '../../components/talentSignUpComponents/TalentSignUp3';
import TalentSignUp4 from '../../components/talentSignUpComponents/TalentSignUp4';
import TalentSignUp5 from '../../components/talentSignUpComponents/TalentSignUp5';
import TalentSignUp6 from '../../components/talentSignUpComponents/TalentSignUp6';
import TalentSignUp7 from '../../components/talentSignUpComponents/TalentSignUp7';
import TalentSignUp8 from '../../components/talentSignUpComponents/TalentSignUp8';
import EmployerSignUp0 from '../../components/EmployerSignUpComponents/EmployerSignUp0';
import EmployerSignUp1 from '../../components/EmployerSignUpComponents/EmployerSignUp1';
import EmployerSignUp2 from '../../components/EmployerSignUpComponents/EmployerSignUp2';
import EmployerSignUp3 from '../../components/EmployerSignUpComponents/EmployerSignUp3';
import LoginContainer from '../../containers/LoginContainer';
<<<<<<< HEAD
import EmployerSignUp4 from '../../components/EmployerSignUpComponents/EmployerSignUp4';
=======
import Login from '../../components/Registration/Login';
>>>>>>> acac238760594af0b6d737c51879c42ab5187e89

const Router: React.FC<unknown> = () => {
  const auth = useSelector<RootState>((state) => state.firebase.auth);
  const paths = isEmpty(auth)
    ? []
    : [
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
          key="/talent-signup-1"
          path="/talent-signup-1"
          exact
          component={TalentSignUp1}
        ></Route>,
        <Route
          key="/talent-signup-2"
          path="/talent-signup-2"
          exact
          component={TalentSignUp2}
        ></Route>,
        <Route
          key="/talent-signup-3"
          path="/talent-signup-3"
          exact
          component={TalentSignUp3}
        ></Route>,
        <Route
          key="/talent-signup-4"
          path="/talent-signup-4"
          exact
          component={TalentSignUp4}
        ></Route>,
        <Route
          key="/talent-signup-5"
          path="/talent-signup-5"
          exact
          component={TalentSignUp5}
        ></Route>,
        <Route
          key="/talent-signup-6"
          path="/talent-signup-6"
          exact
          component={TalentSignUp6}
        ></Route>,
        <Route
          key="/talent-signup-7"
          path="/talent-signup-7"
          exact
          component={TalentSignUp7}
        ></Route>,
        <Route
          key="/talent-signup-8"
          path="/talent-signup-8"
          exact
          component={TalentSignUp8}
        ></Route>,
        <Route
          key="/employer-signup-0"
          path="/employer-signup-0"
          exact
          component={EmployerSignUp0}
        ></Route>,
        <Route
          key="/employer-signup-1"
          path="/employer-signup-1"
          exact
          component={EmployerSignUp1}
        ></Route>,
        <Route
          key="/employer-signup-2"
          path="/employer-signup-2"
          exact
          component={EmployerSignUp2}
        ></Route>,
        <Route
          key="/employer-signup-3"
          path="/employer-signup-3"
          exact
          component={EmployerSignUp3}
        ></Route>,
        <Route
          key="/employer-signup-4"
          path="/employer-signup-4"
          exact
          component={EmployerSignUp4}
        ></Route>,
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
    <>
<<<<<<< HEAD
      <Route path="/" exact component={Home}></Route>
=======
      <Route path="/" exact component={TalentRegistration}></Route>
>>>>>>> acac238760594af0b6d737c51879c42ab5187e89
      <Route path="/signedIn" exact component={Success}></Route>
      <Route path="/sign-in" exact component={Login}></Route>
      <Route
        path="/talent-sign-up"
        exact
        component={TalentRegistration}
      ></Route>
      <Route
        path="/employer-sign-up"
        exact
        component={EmployerRegistration}
      ></Route>
      {paths}
    </>
  );
};

export default Router;
