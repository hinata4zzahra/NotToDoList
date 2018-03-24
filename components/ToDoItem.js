import React, {Component} from 'react';
import {Body, ListItem, Right, Left, CheckBox, Text} from 'native-base';
import PropTypes from 'prop-types';

export default class ToDoItem extends Component{

  render (){
    const {todo:{id,todo}} = this.props;
    return(
      <ListItem key={id}>
        <Left>
          <CheckBox checked = {false}/>
        </Left>
        <Body>
          <Text>{todo}</Text>
        </Body>
        <Right/>
      </ListItem>

    )

}
}


ToDoItem.propTypes = {
  todo : PropTypes.object.isRequired
}
