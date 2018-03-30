import React, {Component} from 'react';
import {Container,Content,Text, Button} from 'native-base';
import { View} from 'react-native';
import axios from 'axios';

export default class DetailItem extends Component{
  // state = {
  //   list: [],
  //   name: ''
  // }
  //
  // allFruits(){
  //   axios
  //   .get('http://rest.learncode.academy/api/learncode/fruits')
  //   .then((result) =>{
  //     this.setState({list: result.data})
  //   })
  // }
  //
  // componentWillMount(){
  //   this.allFruits()
  //  }
  //
  //  handleDelete= () => {
  //    const {item}= this.props.navigation.state.params
  //    //post data into endpoint
  //    axios
  //    .delete(
  //      'http://rest.learncode.academy/api/learncode/fruits/' + item.id
  //
  //    )
  //    .then((result) =>{
  //      this.allFruits()
  //
  //    }
  //  )
  // }

  render (){
    return(
      <Container>
        <Content>
          <Text>tes</Text>
        </Content>
      </Container>
    )
  }
}
