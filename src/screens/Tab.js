import {TabNavigator} from "react-navigation";
import Home from './Home'
import Search from './Search'
import Best from './Best'
import My from './My'

var MainScreenNavigator = TabNavigator({
  Home: {screen:Home},
  Search: {screen:Search},
  Best: {screen:Best},
  My: {screen:My}

},{
  tabBarPosition:'bottom',
  swipeEnabled:true,
  tabBarOptions:{
    activeTintColor:'white',
    activeBackgroundColor:'#3c6382',
    inactiveTintColor:'black',
    inactiveBackgroundColor:'#0a3d62',
    lableStyle:{
      fontSize:16,
      padding:10
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: "Tab exapmle"
};
export default MainScreenNavigator;

import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class Tab extends Component{
  render(){
  }
}
