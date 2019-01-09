import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import {Navigation} from 'react-native-navigation';

class Filter extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Filter</Text>
      </View>
    );
  }
}
export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
