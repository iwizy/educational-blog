import React from 'react';
import { Message } from 'semantic-ui-react';

class Information extends Message {
  render() {
    const { header, content, color, hidden } = this.props;
    return (
      <div>
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