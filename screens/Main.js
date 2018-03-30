import React ,{Component} from 'react';
import {
  Container,Content,List,ListItem, Header
  Text, Fab, Icon, Form, Item, Input
} from 'native-base';
import {
  Modal,TouchableHighlight, View,
  Button, StyleSheet, ListView
} from 'react-native';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';

export default class Main extends Component{
  constructor(){
    super();

    //initial state
    this.state={
      modalVisible:false,
      list: [],
      name: ''
    }
  }


  allFriends(){
    axios
    .get('http://rest.learncode.academy/api/learncode/fruits')
    .then((result) =>{


      this.setState({list: result.data})
    })
  }

  componentWillMount(){
    
    //before rendering data to screen
    //assign array of obj to list State
    this.allFriends()
   }

  handleModalVisible = ()=>{
    this.setState({modalVisible: !this.state.modalVisible})
  }

  handleChangeText = (text)=>{
    this.setState({name: text});
  }

  handleSubmit= () => {

    //post data into endpoint
    axios
    .post(
      'http://rest.learncode.academy/api/learncode/fruits',
      {name:this.state.name}
    )
    .then((result) =>{
      this.allFriends()

    }
  )
    this.handleModalVisible();
  }

  render (){
    return(
      <Container>
        <Content>
          <List>

            {this.state.list.map((item, index)=>{
              return(

                  <ListItem
                   key={index}
                   onPress={()=>this.props.navigation.navigate('DetailItem',{item: item})}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.isManis? "Manis" : "kecut"}</Text>
                  </ListItem>

              )
            })}

          {
            //   <ListItem>
            //     <Text>Simon Mignolet</Text>
            //   </ListItem>
            //   <ListItem>
            //     <Text>Nathaniel Clyne</Text>
            //   </ListItem>
            //   <ListItem>
            //     <Text>Dejan Lovren</Text>
            //   </ListItem>

          }
      </List>
        </Content>

        <Fab onPress={this.handleModalVisible}>
          <Icon name='add' />
        </Fab>

      <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
        >
        <Form>
            <Item>
              <Input placeholder="name" onChangeText={this.handleChangeText} />
            </Item>
            <View >
              <Button title='submit' onPress={this.handleSubmit} />
              <Button title='cancel' onPress={this.handleModalVisible} />

            </View>
        </Form>

      </Modal>

    </Container>
    )
  }
}
