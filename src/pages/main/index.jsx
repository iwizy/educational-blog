import React, { Component } from 'react';
import {Helmet} from "react-helmet";
class Main extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Блог: Главная страница</title>
        </Helmet>
      <div>
        Main page
      </div>
        </>
    );
  }
}

export default Main;
