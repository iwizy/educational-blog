import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  render() {
    return (
      <Menu size='small' fixed='top'>
        <Menu.Item
          name='Главная'
          as={Link}
          to='/'
        />
        <Menu.Item
          name='О сайте'
          as={Link}
          to='/about'
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              primary
              as={Link}
              to='/sign-in'
            >Войти</Button>
          </Menu.Item>
          <Menu.Item>
            <Button
              secondary
              as={Link}
              to='/sign-up'
            >Регистрация</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}