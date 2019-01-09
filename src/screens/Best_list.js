import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import {Navigation} from 'react-native-navigation';

class Best_list extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Best_list</Text>
      </View>
    );
  }
}
export default Best_list;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
