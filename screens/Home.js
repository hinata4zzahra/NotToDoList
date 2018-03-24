import React, {Component} from 'react';
import {Container,Content,Text,Button,List, ListItem,Right,Body,Icon} from 'native-base';

export default class Home extends Component{
  product =[
    {id:1,name:'product 1'},
    {id:2,name:'product 2'}
  ]
  render (){
    return(
      <Container>
        <Content>
        <List>
          {this.home.map((product)=> (
            <ListItem key={product.id}>
            <Body>
              <Text>{product.id}.{product.name}</Text>
              </Body>
              <Right>
              <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
          )
          )}

        </List>

        
        </Content>
      </Container>
    )
  }
}
