import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Segment, Form, Grid, Header} from 'semantic-ui-react';

import PropTypes from 'prop-types';
import Input from 'src/components/input';
import Title from 'src/components/title';
import * as Actions from './actions';

import style from './style.css';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
    singInAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const {dataForm} = this.props;
    this.props.singInAction(dataForm);
  };

  render() {
    return (
      <>
        <Title title='Блог: Войти на сайт'/>
        <Header as='h2'>Войти на сайт</Header>
        <Grid textAlign='center'>
          <Grid.Column style={{maxWidth: 450}}>
            <Segment raised size='small'>
              <Form>
                <div>
                  <div className={style.fieldWrapper}>
                    <Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      id="login"
                      value={this.props.dataForm.login}
                      onChange={this.props.changeFieldAction}
                      placeholder='Логин'
                      className={style.inputFields}
                    />
                  </div>
                  <div className={style.fieldWrapper}>
                    <Input
                      fluid
                      icon='lock'
                      iconPosition='left'
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
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const stateToProps = (state) => ({
  dataForm: state.signIn.dataForm
});

export default connect(stateToProps, Actions)(SignIn);
