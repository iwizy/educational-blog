import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import Title from 'src/components/title';
import {Card, Icon, Image, Grid, Form, Segment, Button, Item} from 'semantic-ui-react';
import Modal from 'src/components/modal';
import style from './style.css';
import Input from "src/components/input";
import Info from 'src/components/notify';
import Moment from 'react-moment';
import {Link} from "react-router-dom";

class Profile extends Component {

  componentDidUpdate(prevProps) {
    const {match} = this.props;
    if (match !== prevProps.match) {
      this.props.getUserDataAction(match.params.id);
      this.props.getPostsAction(match.params.id);
    }
  }

  componentDidMount(prevProps) {
    const {match} = this.props;
    this.props.getUserDataAction(match.params.id);
    this.props.getPostsAction(match.params.id);
  }

  changePassword = () => {
    this.props.showPasswordModalAction();
  };

  onCloseClick = () => {
    this.props.closePasswordModalAction();
  };

  onChangePasswordClick = () => {
    const {dataForm} = this.props;
    this.props.changeUserPasswordAction(dataForm);
  };


  render() {
    const {data, passwordModalShow, message, posts, user, profile} = this.props;

    return data && (
      <>
        <Title title={`Профиль ${data.login}`}/>
        <Info
          header={this.props.message.header}
          content={this.props.message.content}
          hidden={this.props.message.isHidden}
          color={this.props.message.color}
        />
        <Grid>
          <Grid.Column width={5}>
            <Card>
              <Image
                src={`http://school-blog.ru/images/${data.avatar}`}
                wrapped ui={false}
              />
              <Card.Content>
                <Card.Header>{data.firstName} {data.lastName} ({data.login})</Card.Header>
                <Card.Meta>С нами с <Moment date={data.registrationDate} format='DD.MM.YYYY'></Moment></Card.Meta>
                <Card.Description>
                  <div><Icon name='envelope outline'/> <a href={`mailto:${data.email}`}>{data.email}</a></div>
                  {profile.id == user.id ?
                    <div><Icon name='key'/> <a onClick={this.changePassword}>изменить пароль</a></div> : <div></div>}

                </Card.Description>
              </Card.Content>
              <Card.Content extra className={style.cardExtraWrapper}>
                <a>
                  <Icon name='write'/>
                  {data.postsCount}
                </a>
                <a>
                  <Icon color='green' name='thumbs up outline'/>
                  {data.likesCount}
                </a>
                <a>
                  <Icon color='red' name='thumbs down outline'/>
                  {data.dislikesCount}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={11}>
            <div>
              <h2>Список постов</h2>
              {posts
                ?
                <Item.Group divided>
                  {posts.map((postItem) => {
                    return (
                      <Item key={postItem.id}>
                        <Item.Content>
                          <Item.Header as={Link} to={`/post/${postItem.id}`}>{postItem.title}</Item.Header>
                          <Item.Description>
                            {postItem.content}
                          </Item.Description>
                          <Item.Extra>
                            <span className={style.extraItem}>
                              <Icon color='green'
                                    name='eye'
                              />{postItem.viewsCount}
                            </span>
                            <span className={style.extraItem}>
                              <Icon color='green'
                                    name='thumbs up outline'
                              />{postItem.likesCount}
                            </span>
                            <span className={style.extraItem}>
                              <Icon id={postItem.id} color='red'
                                    name='thumbs down outline'
                              />{postItem.dislikesCount}
                            </span>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    );
                  })}
                </Item.Group>
                :
                <span>нет постов</span>
              }
            </div>
          </Grid.Column>
        </Grid>
        {
          passwordModalShow && <Modal
            content={
              <div>
                <Grid textAlign='center'>
                  <Grid.Column style={{width: 450}}>
                    <Segment raised size='small'>
                      <Form size='large'>
                        <div className={style.fieldWrapper}>
                          <Input
                            id="currentPassword"
                            value={this.props.dataForm.currentPassword}
                            onChange={this.props.changeFieldAction}
                            placeholder='Текущий пароль'
                            type='password'
                            icon='lock'
                            iconPosition='left'
                          />
                        </div>
                        <div className={style.fieldWrapper}>
                          <Input
                            id="newPassword"
                            value={this.props.dataForm.newPassword}
                            onChange={this.props.changeFieldAction}
                            placeholder='Новый пароль'
                            type='password'
                            icon='lock'
                            iconPosition='left'
                          />
                        </div>
                        <Button onClick={this.onCloseClick}>Закрыть</Button>
                        <Button onClick={this.onChangePasswordClick} primary>Изменить</Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>
            }
          />
        }
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.profile.data,
    dataForm: state.profile.dataForm,
    passwordModalShow: state.profile.passwordModalShow,
    message: state.profile.message,
    posts: state.profile.posts,
    user: state.applicationReducer.user,
    profile: state.applicationReducer.profile
  };
}

export default connect(mapStateToProps, Actions)(Profile);
