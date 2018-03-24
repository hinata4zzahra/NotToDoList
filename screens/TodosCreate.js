import React, {Component} from 'react';
import {Container,Content, Text,Form, Label, Input, Item, Button} from 'native-base';
import Expo from "expo";


export default class TodosCreate extends Component{

  constructor(props) {
    super(props);
    this.state = { text: '',loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


  handleSubmit(){
    alert(this.state.text)
  }

  render(){
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>not todo</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
            <Button full primary onPress={()=>this.handleSubmit()}>
              <Text>submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>

    )
  }
}
