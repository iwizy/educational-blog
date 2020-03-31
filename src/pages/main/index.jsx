import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import Title from "src/components/title";
import { Item, Icon } from 'semantic-ui-react'
import style from './style.css';

class Main extends Component {
  componentDidMount() {
    this.props.getInitPostsAction();
    window.addEventListener('scroll', this.onScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };

  onScroll = (e) => {
    const { posts, isLoadingPosts } = this.props;
    const postsLength = posts.length;
    const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if(windowRelativeBottom <= document.documentElement.clientHeight + 100 && !isLoadingPosts) {
      this.props.getScrollPostsAction(postsLength)
    }
  };

  onClickLike = (evt) => {
    const { id } = evt.target;
    this.props.increaseLikeCountAction(id);
  };

  onClickDislike = (evt) => {
    const { id } = evt.target;
    this.props.increaseDislikeCountAction(id);
  };

  render() {
    const { posts } = this.props;
    return (
      <>
        <Title title='Блог: Главная страница' />
        <Item.Group divided>
          {posts.map(function (postItem) {
            return (
              <Item key={postItem.id}>
                <Item.Content>
                  <Item.Header as={Link} to={`/post/${postItem.id}`}>{postItem.title}</Item.Header>
                  <Item.Description>
                    {postItem.content}
                  </Item.Description>
                  <Item.Extra>
                    <span className={style.extraItem}>Автор: {postItem.author.login}</span>
                    <span className={style.extraItem}><Icon color='green' name='eye' />{postItem.viewsCount}</span>
                    <span className={style.extraItem}><Icon color='green' name='thumbs up outline' />{postItem.likesCount}</span>
                    <span className={style.extraItem}><Icon color='red' name='thumbs down outline' />{postItem.dislikesCount}</span>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
        </>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.main.posts,
    isLoadingPosts: state.main.isLoadingPosts
  };
}

export default connect(mapStateToProps, Actions)(Main);
