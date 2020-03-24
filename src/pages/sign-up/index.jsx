import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Title from "src/components/title";
import * as Actions from './actions';
import style from 'src/app/style.css';
import {Button} from "semantic-ui-react";

class SignUp extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singUpAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { dataForm } = this.props;
    this.props.singUpAction(dataForm);
  };

  render() {
    return (
      <>
      <Title title='Блог: Регистрация' />
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
              id="firstName"
              value={this.props.dataForm.firstName}
              onChange={this.props.changeFieldAction}
              placeholder='Имя'
            />
        </div>
        <div className={style.fieldWrapper}>
            <Input
              id="lastName"
              value={this.props.dataForm.lastName}
              onChange={this.props.changeFieldAction}
              placeholder='Фамилия'
            />
        </div>
        <div className={style.fieldWrapper}>
            <Input
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
              placeholder='Электронная почта'
            />
        </div>
        <div className={style.fieldWrapper}>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              placeholder='Пароль'
            />
        </div>
        <div>
          <Button positive onClick={this.onSubmit}>Зарегистрироваться</Button>
        </div>
      </div>
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
