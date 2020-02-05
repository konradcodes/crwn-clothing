import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
