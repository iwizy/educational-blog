import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';
import Main from 'src/pages/main';
import About from 'src/pages/about';
import SignIn from 'src/pages/sign-in';
import * as Actions from './actions';

import style from './style.css';

class App extends Component {
  render() {
  return(
    <>
    <Header></Header>
      <div className={style.contentWrapper}>
    <Switch>
      <Route path='/' exact={true} component={Main} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/sign-in' exact={true} component={SignIn} />
    </Switch>
    </div>
      </>
  );
};
}

const mapStateToProps = (state) => {
  return ({
    user: state.applicationReducer.user
  });
};


export default connect(mapStateToProps, Actions)(App);
