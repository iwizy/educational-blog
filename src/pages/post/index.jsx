import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { Dimmer, Loader } from 'semantic-ui-react';
import style from './style.css';

class PostPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  componentWillUnmount() {
    this.props.leavingPostAction();
  }

  render() {
    const { data } = this.props;

    return (
      <>

      <div>
        {data
          ? <div className={style.postWrapper}>
            <div className={style.postTitle}>{data.title}</div>
            <div className={style.postContent}>{data.content}</div>
          </div>
          :
          <Dimmer active>
            <Loader>Загрузка</Loader>
          </Dimmer>
        }
      </div>
    </>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.post.data
  };
}

export default connect(mapStateToProps, Actions)(PostPage);
