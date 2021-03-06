import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from 'src/components/input';
import Textarea from 'src/components/textarea';
import {Button, Segment, Grid, Header, Form} from 'semantic-ui-react';
import Title from 'src/components/title';
import * as Actions from './actions';
import style from "src/app/style.css";


class NewPost extends Component {
  onChangeData = (data) => {
    const fieldId = data.fieldId;
    const value = data.value;

    this.props.changeDataAction(fieldId, value);
  };

  onSubmit = () => {
    this.props.createPostAction(this.props.data);
  };

  render() {
    const {data} = this.props;
    return (
      <>
        <Title title='Блог: Создать пост'/>
        <Header as='h2'>Создать пост</Header>
        <Grid textAlign='center'>
          <Grid.Column style={{maxWidth: 450}}>
            <Segment raised size='small'>
              <Form>
            <div>
              <div className={style.fieldWrapper}>
                <Input
                  fluid
                  id="title"
                  value={data.title}
                  onChange={this.onChangeData}
                  placeholder='Заголовок'
                />
              </div>
              <div className={style.fieldWrapper}>
                <Textarea
                  rows={6}
                  id="content"
                  value={data.content}
                  onChange={this.onChangeData}
                  placeholder='Текст поста'
                />
              </div>
              <div>
                <Button positive onClick={this.onSubmit}>Создать пост</Button>
              </div>
            </div>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </>

    );
  }

}

function mapStateToProps(state) {
  return {
    data: state.newPost.data
  };
}

export default connect(mapStateToProps, Actions)(NewPost);