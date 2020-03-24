import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Title from "src/components/title";
import * as Actions from './actions';

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
        <div>
          <div>
            login
          </div>
          <div>
            <Input
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            first name
          </div>
          <div>
            <Input
              id="firstName"
              value={this.props.dataForm.firstName}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            last name
          </div>
          <div>
            <Input
              id="lastName"
              value={this.props.dataForm.lastName}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            email
          </div>
          <div>
            <Input
              id="email"
              value={this.props.dataForm.email}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <div>
          <div>
            password
          </div>
          <div>
            <Input
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
            />
          </div>
        </div>
        <button onClick={this.onSubmit}>Register</button>
      </div>
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signUp.dataForm
});

export default connect(mapStateToProps, Actions)(SignUp);
