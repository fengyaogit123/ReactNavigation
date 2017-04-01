import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class Home extends React.Component{
  static navigationOptions = {
    title: 'StackNavigator 用法 ',
  };
  render() {
    const { navigate } = this.props.navigation;//获得导航对象
    return (
      <View>
        <Text>Hello, StackNavigator!</Text>
        <Button
          onPress={() => navigate('Chat', { title: "Tab Navigator",mode:true })}
          title="Tab Navigator"
        />
      </View>
    );
  }
}