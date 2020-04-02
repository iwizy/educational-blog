import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import Title from 'src/components/title';

class Profile extends Component {
  componentDidMount() {
    const {match} = this.props;
    this.props.getUserDataAction(match.params.id);
  }

  render() {
    const {data} = this.props;
    return data && (
      <>
        <Title title={`Профиль ${data.login}`}/>
        <div>
          Профиль: {data.login}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.profile.data
  };
}

export default connect(mapStateToProps, Actions)(Profile);
