import React, { Component } from 'react';
import Modal from 'src/components/modal';

class TestPage extends Component {
  state = {
    isShownModal: false
  };

  onClick = () => {
    this.setState(
      {
        isShownModal: !this.state.isShownModal
      }
    )
  };

  render() {
    const { isShownModal } = this.state;
    return(
      <div>
        test
        <button onClick={this.onClick}>Open</button>
        {
          isShownModal && <Modal
            content={
              <div>11</div>
            }
            closeModal={this.onClick}
          />
        }
      </div>
    );
  }
}

export default TestPage;