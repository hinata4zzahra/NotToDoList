import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Main from './screens/Main';
import DetailItem from './screens/DetailItem';

const RootStack = StackNavigator ({
  Login : {
    screen:Login,
    navigationOptions:{
      title:'login'
    },

  },
  Main : {
    screen:Main,
    navigationOptions:{
      title:'main'
    }
  },
  DetailItem : {
    screen:DetailItem,
    navigationOptions:{
      title:'Detail Item'
    }
  },
},
{
  initialRouteName :'Login'
},
{
  headerMode : 'none',
}
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
