import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  render() {
    return (
      <Menu size='small'>
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
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}