import React from 'react';
import { TabNavigator } from "react-navigation";
import {
  Text,
  View,
  Button
} from 'react-native';


class Item1 extends React.Component {
  render() {
    return <Text>Item1</Text>
  }
}

class Item2 extends React.Component {
  render() {
    return <Text>Item2</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Item1: { screen: Item1 },
  Item2: { screen: Item2 },
});


export default class Chat extends React.Component {
  static navigationOptions = {
    title: ({state}) =>{
        if(state.params.mode===true){
            return "curr mode is true";
        }
        return  `${state.params.title} curr is ${state.params.mode}`;
    },
    header: ({state,setParams })=>{
        let right =(
            <Button 
                title="true"
                onPress={()=>setParams({mode:true})}
            />
        );
        if(state.params.mode){
            right=(
                <Button 
                    title="false"
                    onPress={()=>setParams({mode:false})}
                />
            )
        }
        return {right};
    }
  };
  render() {
    let {params } = this.props.navigation.state;
    return (
      <View style={{flex:1}}>
        <MainScreenNavigator /> 
        <Text>{params.user}</Text>
      </View>
    );
  }
}
