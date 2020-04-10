import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import style from './style.css';

export default class Header extends Component {

  render() {
    return (
      <Menu size='large' fixed='top'>
        <div className={style.mainmenu}>
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
        {!this.props.user
          ?
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
          :
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button
                secondary
                as={Link}
                to='/new-post'
              >Создать пост</Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                primary
                as={Link}
                to={`/user-page/${this.props.user.id}`}
              >{this.props.user.login}</Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                secondary
                onClick={this.props.signOut}
              >Выход</Button>
            </Menu.Item>
          </Menu.Menu>
        }
        </div>
      </Menu>
    )
  }
}