import React, {Component} from  'react';
import {
  Container, Content, Text,
  Header, Body, List,
  ListItem, Left, Right,
  CheckBox, Fab, Icon
} from 'native-base';
import {FlatList} from 'react-native';

import ToDoItem from '../components/ToDoItem';

export default class Todos extends Component{

  constructor(){
    super();
    this.state = {
      count : 0,
      todos : []
    };

  }

  
  _keyExtractor=(item, index) => item.id;

  render (){
    return(
    <Container>
      <Content>
          <List>

              <FlatList
                data={this.state.todos}
                renderItem={({item})=><ToDoItem todo={item}/>}
                keyExtractor={this._keyExtractor}
              />



            {/*this.state.todos.map((todo)=><ToDoItem todo = {todo} key={todo.id}/>)*/}

          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=>this.props.navigation.navigate('TodosCreate')}>
          <Icon name="add" />
        </Fab>
      </Container>
    )

  }
}
