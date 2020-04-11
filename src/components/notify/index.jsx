import React from 'react';
import { Message } from 'semantic-ui-react';
import style from './style.css';

class Information extends Message {
  render() {
    const { header, content, color, hidden } = this.props;
    return (
      <div className={style.notify}>
        <Message
          header={header}
          content={content}
          color={color}
          hidden={hidden}
          />
      </div>
    );
  }
}

export default Information;