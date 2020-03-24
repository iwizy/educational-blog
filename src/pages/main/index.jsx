import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './actions';
import Title from "src/components/title";
import { Item } from 'semantic-ui-react'
import style from './style.css';

class Main extends Component {
  componentDidMount() {
    this.props.getPostsAction();
  }

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
    posts: state.main.posts
  };
}

export default connect(mapStateToProps, Actions)(Main);
