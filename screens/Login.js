import React ,{Component} from 'react';
import {Container, Header, Content, Form, Item, Input,Text, Button as NbButton} from 'native-base';
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
      <Container>
        <Button onPress={()=>this.props.navigation.dispatch(
          NavigationActions.reset({
          index:0,
          actions:[
            NavigationActions.navigate({routeName :'Main'})

          ]
        }))}
        title ="Add" />
      </Container>
    )
  }
}


const styles=StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ffffff'
  }
})
