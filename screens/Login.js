import React ,{Component} from 'react';
import { Container, Header, Content, Form, Item, Input,Text, Button as NbButton} from 'native-base';
import {Button, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class Login extends Component{
handleLogin(){
      return NavigationActions.reset({
        index:0,
        actions:[
          NavigationActions.navigate({routeName :'Main'}),
          NavigationActions.navigate({routeName :'Login'}),
        ]
      })
    }
  render (){
    return(
      <Container style={styles.container}>
        <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" secureTextEntry={true}/>
            </Item>
            <Button onPress={()=>this.props.navigation.navigate('Main')} title ="login" />
            <NbButton onPress={()=> alert('halo')}>
              <Text>tes</Text>
            </NbButton>
          </Form>
        </Container>
    )
  }
}


const styles=StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'#ffffff'
  }
})
