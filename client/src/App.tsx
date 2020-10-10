import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './containers/Home';
import SignUp from './containers/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
    </BrowserRouter>
  );
}

export default App;
