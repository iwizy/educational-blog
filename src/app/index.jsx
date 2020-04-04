import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';

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
  return(
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}><Header user={this.props.user} signOut={this.props.signOut}/></Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
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
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
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
