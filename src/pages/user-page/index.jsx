import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import Title from 'src/components/title';
import { Card, Icon, Image, Grid} from 'semantic-ui-react';
import style from './style.css';

class Profile extends Component {
  componentDidMount() {
    const {match} = this.props;
    this.props.getUserDataAction(match.params.id);
  }

  render() {
    const {data} = this.props;
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
                E-mail: <a href={`mailto:${data.email}`}>{data.email}</a>

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
