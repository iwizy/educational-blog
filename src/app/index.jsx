import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/header';

import * as Actions from './actions';

class App extends Component {
  render() {
  return(
    <Header></Header>
  );
};
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter,
    user: state.applicationReducer.user
  });
};


export default connect(mapStateToProps, Actions)(App);
