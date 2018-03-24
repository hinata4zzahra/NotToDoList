import React ,{Component} from 'react';
import {
  Container,Content,List,ListItem,
  Text, Fab, Icon, Form, Item, Input
} from 'native-base';
import {
  Modal,TouchableHighlight, View,Button, StyleSheet
} from 'react-native';
import axios from 'axios';

export default class Main extends Component{
  constructor(){
    super();
    console.log('Constructor')
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
      console.log(result.data)

      this.setState({list: result.data})
    })
  }

  componentWillMount(){
    console.log('component will mount');
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
                <ListItem key={index}>
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
            <View style= {styles.containerButton}>
              <Button title='submit' onPress={this.handleSubmit} />
              <Button title='cancel' onPress={this.handleModalVisible} />

            </View>
        </Form>

      </Modal>

    </Container>
    )
  }
}

const styles= StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})
