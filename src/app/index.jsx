import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Header from 'src/components/header';
import Main from 'src/pages/main';
import About from 'src/pages/about';
import SignIn from 'src/pages/sign-in';
import SignUp from 'src/pages/sign-up';
import Post from 'src/pages/post';
import NewPost from 'src/pages/new-post';
import Profile from 'src/pages/user-page';
import TestPage from 'src/pages/test-page';
import * as Actions from './actions';

import style from './style.css';

class App extends Component {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <>
        <Header user={this.props.user} signOut={this.props.signOut}/>
        <div className={style.contentWrapper}>
          <Switch>
            <Route path='/' exact={true} component={Main}/>
            <Route path='/about' exact={true} component={About}/>
            <Route path='/sign-in' exact={true} component={SignIn}/>
            <Route path='/sign-up' exact={true} component={SignUp}/>
            <Route path='/post/:id' exact={true} component={Post}/>
            <Route path='/new-post' exact={true} component={NewPost}/>
            <Route path='/user-page/:id' exact={true} component={Profile}/>
            <Route path='/test-page' exact={true} component={TestPage}/>
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
