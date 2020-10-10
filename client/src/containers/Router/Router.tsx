import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import SignUp from '../SignUp';
import styles from './Router.module.scss';

const Router: React.FC<unknown> = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
    </BrowserRouter>
  );
};

export default Router;
