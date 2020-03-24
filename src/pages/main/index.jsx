import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Title from "src/components/title";
class Main extends Component {
  render() {
    return (
      <>
        <Title title='Блог: Главная страница' />
      <div>
        Main page
      </div>
        </>
    );
  }
}

export default Main;
