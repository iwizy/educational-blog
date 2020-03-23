import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Segment } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';

import style from 'src/app/style.css';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singInAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.singInAction(dataForm);
  };

  render() {
    return (
      <Segment raised size='small'>
      <div>
          <div className={style.fieldWrapper}>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              placeholder='Логин'
            />
          </div>
        <div className={style.fieldWrapper}>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              placeholder='Пароль'
              type='password'
            />
        </div>
        <div>
          <Button positive onClick={this.onSubmit}>Войти</Button>
        </div>
      </div>
      </Segment>
    );
  }
}

const stateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(stateToProps, Actions)(SignIn);
