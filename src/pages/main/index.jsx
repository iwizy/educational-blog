import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as Actions from './actions';
import Title from "src/components/title";
import {Item, Icon, Header, Dimmer, Loader, Label, Segment, Container, Divider} from 'semantic-ui-react';
import Info from 'src/components/notify';
import style from './style.css';
import Moment from "react-moment";

class Main extends Component {
  componentDidMount() {
    this.props.getInitPostsAction();
    window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };

  onScroll = (e) => {
    const {posts, isLoadingPosts} = this.props;
    const postsLength = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(postsLength)
    }
  };

  onClickLike = (evt) => {
    const {id} = evt.target;
    this.props.increaseLikeCountAction(id);
  };

  onClickDislike = (evt) => {
    const {id} = evt.target;
    this.props.increaseDislikeCountAction(id);
  };

  render() {
    const {posts, message} = this.props;
    return (
      <>
        <Title title='Блог: Главная страница'/>
        <Info
          header={this.props.message.header}
          content={this.props.message.content}
          hidden={this.props.message.isHidden}
          color={this.props.message.color}
        />
        <Header as='h2'>Последние записи</Header>
        {posts
          ? <Item.Group divided>
            {posts.map((postItem) => {
              return (
                <Segment key={postItem.id}>
                  <Label as='a' color='green' ribbon='right'>
                    <Moment date={postItem.date} format='DD.MM.YYYY'></Moment>
                  </Label>
                  <Header as='h3' dividing>
                    <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
                  </Header>
                  <Container fluid>
                    {postItem.content}
                  </Container>
                  <Divider className={style.divider}/>

                  <Label as='a' image>
                    <img src={`http://school-blog.ru/images/${postItem.author.avatar}`}/>
                    {postItem.author.login}
                  </Label>
                  <Label as='a'>
                    <Icon name='eye'/> {postItem.viewsCount}
                  </Label>
                  <Label as='a' onClick={this.onClickLike} id={postItem.id}>
                    <Icon name='thumbs up outline' id={postItem.id}/> {postItem.likesCount}
                  </Label>
                  <Label as='a' onClick={this.onClickDislike} id={postItem.id}>
                    <Icon name='thumbs down outline' id={postItem.id}/> {postItem.dislikesCount}
                  </Label>

                </Segment>
              );
            })}
          </Item.Group>
          :
          <Dimmer active>
            <Loader>Загрузка</Loader>
          </Dimmer>
        }
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts,
    message: state.main.message
  };
}

export default connect(mapStateToProps, Actions)(Main);
