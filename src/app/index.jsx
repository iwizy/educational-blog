import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';
import Main from 'src/pages/main';
import About from 'src/pages/about';
import * as Actions from './actions';

class App extends Component {
  render() {
  return(
    <>
    <Header></Header>
    <Switch>
      <Route path='/' exact={true} component={Main} />
      <Route path='/about' exact={true} component={About} />
    </Switch>
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
