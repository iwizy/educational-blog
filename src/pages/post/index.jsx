import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import {Dimmer, Loader, Divider, Segment, Label, Icon} from 'semantic-ui-react';
import style from './style.css';
import Title from "src/components/title";
import Moment from 'react-moment';
import Info from 'src/components/notify';

class PostPage extends Component {
  componentDidMount() {
    const {match} = this.props;
    this.props.getPostDataAction(match.params.id);
  }

  componentWillUnmount() {
    this.props.leavingPostAction();
  }

  onClickLike = (evt) => {
    const {id} = evt.target;
    this.props.increaseLikeCountAction(id);
  };

  onClickDislike = (evt) => {
    const {id} = evt.target;
    this.props.increaseDislikeCountAction(id);
  };

  render() {
    const {data, author, message} = this.props;

    return data && (
      <>
        <Title title={`Блог: ${data.title}`}/>
        <Info
          header={this.props.message.header}
          content={this.props.message.content}
          hidden={this.props.message.isHidden}
          color={this.props.message.color}
        />
        <div>
          {data
            ?
            <Segment>
              <Label as='a' color='green' ribbon='right'>
                <Moment date={data.date} format='DD.MM.YYYY'></Moment>
              </Label>
              <div>
                <div className={style.postWrapper}>
                  <div className={style.postTitle}>{data.title}</div>
                  <div className={style.postContent}>{data.content}</div>
                </div>
                <div>
                  <Divider fitted/>
                  <div className={style.postData}>
                    <Label as='a' href={`/user-page/${author.id}`} image>
                      <img src={`http://school-blog.ru/images/${author.avatar}`}/>
                      {author.login}
                    </Label>
                    <Label as='a'>
                      <Icon name='eye'/> {data.viewsCount}
                    </Label>
                    <Label as='a' onClick={this.onClickLike} id={data.id}>
                      <Icon name='thumbs up outline' id={data.id}/> {data.likesCount}
                    </Label>
                    <Label as='a' onClick={this.onClickDislike} id={data.id}>
                      <Icon name='thumbs down outline' id={data.id}/> {data.dislikesCount}
                    </Label>
                  </div>
                </div>
              </div>
            </Segment>
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
    data: state.post.data,
    author: state.post.author,
    message: state.post.message
  };
}

export default connect(mapStateToProps, Actions)(PostPage);
