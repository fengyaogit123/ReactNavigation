import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';//
// Home
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const { navigate } = this.props.navigation;//获得导航对象
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: "张三" })}
          title="跳转"
          />
      </View>
    );
  }
}
// Chat
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ({state}) => state.params.user,
  };
  render() {
    let {params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('simp', () => SimpleApp);