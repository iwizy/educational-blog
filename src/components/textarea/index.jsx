import React from 'react';
import { TextArea, Form } from 'semantic-ui-react';

export default class blogTextarea extends TextArea {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };

  render() {
    const { value, placeholder, rows} = this.props;

    return (
      <TextArea
        value={value}
        rows={rows}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}
