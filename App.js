import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './screens/Login';
import Main from './screens/Main';

const App = StackNavigator ({
  Login : {
    screen:Login,
    navigationOptions:{
      title:'login'
    }
  },
  Main : {
    screen:Main,
    navigationOptions:{
      title:'main'
    }
  }


},{
  initialRouteName :'Login'
}
);


export default App;
