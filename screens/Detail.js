import React, {Component} from 'react';
import {Container,Content,Text} from 'native-base';

export default class Detail extends Component{

  render (){
    const {params}=this.props.navigation
    const {id,name} = params.product
    return(
      <Container>
        <Content>
          <Text>

          ID produk ={id}
          </Text>

          <Text>

          nama produk ={name}
          </Text>

        </Content>
      </Container>
    )
  }
}
