import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import Title from 'src/components/title';
import { Card, Icon, Image } from 'semantic-ui-react';
import Modal from 'src/components/modal';
import style from './style.css';
import Input from "src/components/input";

class Profile extends Component {
  componentDidMount() {
    const {match} = this.props;
    this.props.getUserDataAction(match.params.id);
  }

  changePassword = () => {
    this.props.showPasswordModalAction();
  };


  render() {
    const { data, passwordModalShow } = this.props;
     console.log('props: ', this.props);

    let signDate = data && data.registrationDate;
    let newDate = data && signDate.slice(0,10).split('-').reverse().join('.'); // да знаю, что не изящно ни разу...

    return data && (
      <>
        <Title title={`Профиль ${data.login}`}/>
        <div>
          <Card>
            <Image
              src={`http://school-blog.ru/images/${data.avatar}`}
              wrapped ui={false}
            />
            <Card.Content>
              <Card.Header>{data.firstName} {data.lastName} ({data.login})</Card.Header>
              <Card.Meta>С нами с {newDate}</Card.Meta>
              <Card.Description>
                <div><Icon name='envelope outline' /> <a href={`mailto:${data.email}`}>{data.email}</a></div>
                <div><Icon name='key' /> <a onClick={this.changePassword}>изменить пароль</a></div>

              </Card.Description>
            </Card.Content>
            <Card.Content extra className={style.cardExtraWrapper}>
              <a>
                <Icon name='write' />
                {data.postsCount}
              </a>
              <a>
                <Icon color='green' name='thumbs up outline' />
                {data.likesCount}
              </a>
              <a>
                <Icon color='red' name='thumbs down outline' />
                {data.dislikesCount}
              </a>
            </Card.Content>
          </Card>
        </div>
        {
          passwordModalShow && <Modal
            content={
              <div>
               www
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
    passwordModalShow: state.profile.passwordModalShow
  };
}

export default connect(mapStateToProps, Actions)(Profile);
