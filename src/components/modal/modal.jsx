import React, { Component } from 'react';
import style from './style.css';

class Modal extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.modal}>
          <div className={style.modalWrapper}>
            {
              this.props.content
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;